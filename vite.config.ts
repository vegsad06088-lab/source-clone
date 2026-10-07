import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import fs from "fs";
import { componentTagger } from "lovable-tagger";

// Scans /public/content and exposes the file list as `virtual:content-manifest`.
// Drop photos into the folders — galleries and the admin status tab pick them up automatically.
function contentManifest(): Plugin {
  const id = "virtual:content-manifest";
  const root = path.resolve(__dirname, "public/content");
  const walk = (dir: string): string[] =>
    fs.existsSync(dir)
      ? fs.readdirSync(dir, { withFileTypes: true }).flatMap((e) =>
          e.isDirectory() ? walk(path.join(dir, e.name)) : e.name.startsWith(".") ? [] : [path.join(dir, e.name)],
        )
      : [];
  return {
    name: "content-manifest",
    resolveId: (s) => (s === id ? "\0" + id : null),
    load(s) {
      if (s !== "\0" + id) return null;
      const files = walk(root).map((f) => "/content/" + path.relative(root, f).split(path.sep).join("/"));
      return `export const contentFiles = ${JSON.stringify(files)};`;
    },
    configureServer(server) {
      server.watcher.add(root);
      const reload = (f: string) => {
        if (!f.startsWith(root)) return;
        const m = server.moduleGraph.getModuleById("\0" + id);
        if (m) server.moduleGraph.invalidateModule(m);
        server.ws.send({ type: "full-reload" });
      };
      server.watcher.on("add", reload);
      server.watcher.on("unlink", reload);
    },
  };
}

// LOCAL-ONLY config editor API used by /admin → "Einstellungen".
// Runs only in `npm run dev`; it does not exist in the published site.
// Only JSON files in these folders can be read or written.
function configEditor(): Plugin {
  const allowed = ["src/config", "src/components/promo", "src/translations"];
  const list = () =>
    allowed.flatMap((d) =>
      fs.existsSync(d) ? fs.readdirSync(d).filter((f) => f.endsWith(".json")).map((f) => `${d}/${f}`) : [],
    );
  return {
    name: "config-editor",
    apply: "serve",
    configureServer(server) {
      server.middlewares.use("/__config", (req, res) => {
        const url = new URL(req.url || "/", "http://x");
        const file = url.searchParams.get("file");
        const send = (code: number, body: unknown) => {
          res.statusCode = code;
          res.setHeader("Content-Type", "application/json");
          res.end(JSON.stringify(body));
        };
        if (!file) return send(200, { files: list() });
        if (!list().includes(file)) return send(403, { error: "File not allowed" });
        const abs = path.resolve(__dirname, file);
        if (req.method === "GET") return send(200, { content: fs.readFileSync(abs, "utf8") });
        if (req.method === "POST") {
          let body = "";
          req.on("data", (c) => (body += c));
          req.on("end", () => {
            try {
              JSON.parse(body);
            } catch {
              return send(400, { error: "Invalid JSON" });
            }
            fs.writeFileSync(abs, body.endsWith("\n") ? body : body + "\n");
            send(200, { ok: true });
          });
          return;
        }
        send(405, { error: "Method not allowed" });
      });

      // Photos & PDFs in public/content: upload/replace (POST raw bytes) and delete (DELETE).
      const contentRoot = path.resolve(__dirname, "public/content");
      const okExt = /\.(avif|jpe?g|png|webp|gif|svg|pdf)$/i;
      server.middlewares.use("/__content", (req, res) => {
        const url = new URL(req.url || "/", "http://x");
        const rel = (url.searchParams.get("path") || "").replace(/^\/+/, "");
        const abs = path.resolve(contentRoot, rel);
        const send = (code: number, body: unknown) => {
          res.statusCode = code;
          res.setHeader("Content-Type", "application/json");
          res.end(JSON.stringify(body));
        };
        if (!rel || !abs.startsWith(contentRoot + path.sep) || !okExt.test(abs)) return send(403, { error: "Path not allowed" });
        if (req.method === "DELETE") {
          if (fs.existsSync(abs)) fs.unlinkSync(abs);
          return send(200, { ok: true });
        }
        if (req.method === "POST") {
          const chunks: Buffer[] = [];
          req.on("data", (c) => chunks.push(c));
          req.on("end", () => {
            const buf = Buffer.concat(chunks);
            if (!buf.length) return send(400, { error: "Empty file" });
            if (buf.length > 20 * 1024 * 1024) return send(413, { error: "File larger than 20 MB" });
            fs.mkdirSync(path.dirname(abs), { recursive: true });
            fs.writeFileSync(abs, buf);
            send(200, { ok: true, url: "/content/" + rel });
          });
          return;
        }
        send(405, { error: "Method not allowed" });
      });
    },
  };
}

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  publicDir: "public",
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [contentManifest(), configEditor(), react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
