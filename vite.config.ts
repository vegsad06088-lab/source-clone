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
  plugins: [contentManifest(), react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
