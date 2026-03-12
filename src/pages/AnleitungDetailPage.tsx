import { useI18n } from "@/lib/i18n";
import { instructions } from "@/lib/data";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";


// Content sections for each instruction page (real content from the original site)
type ContentBlock = { type: "text" | "quote" | "image" | "heading" | "link"; content?: string; translationKey?: string; href?: string; linkTextKey?: string };

const instructionContent: Record<string, ContentBlock[]> = {
  "check-in-anleitung": [
  { type: "quote", translationKey: "instructions.checkin.quote1" },
  { type: "image", content: "/images/66dc45988e6e09e9b269ac19_66dc45928f8fd5ebe17d1afc_IMG_1436.avif" },
  { type: "quote", translationKey: "instructions.checkin.quote2" },
  { type: "image", content: "/images/66dc443f29e15a21ed69ce8b_66dc42ad06db0a58c147d4d6_IMG_1440.avif" },
  { type: "quote", translationKey: "instructions.checkin.quote3" },
  { type: "image", content: "/images/66dc467cdd607b08dfe8c236_66dc465440390f84ccd1ead1_IMG_1444.avif" },
  { type: "quote", translationKey: "instructions.checkin.quote4" },
  { type: "image", content: "/images/66dc467cdd607b08dfe8c239_66dc466c06db0a58c14aef89_IMG_1449.avif" },
  { type: "quote", translationKey: "instructions.checkin.quote5" },
  { type: "image", content: "/images/66dc483281bf97e67091ad00_66dc46f7e38da854fed8c474_IMG_1521.avif" },
  { type: "image", content: "/images/66dc483281bf97e67091acfd_66dc478efa615238251319d1_IMG_1522.avif" },
  { type: "quote", translationKey: "instructions.checkin.quote6" },
  { type: "image", content: "/images/66dc483281bf97e67091acf5_66dc47a1e1e99fbb39092a1a_IMG_1454.avif" },
  { type: "image", content: "/images/66dc483281bf97e67091ad14_66dc47b1d8e5c09607f54284_IMG_1455.avif" },
],
 "bugeleisen-bugelbrett": [
  { type: "quote", translationKey: "instructions.ironing.quote1" },
  { type: "image", content: "/images/66dc52d2930b82790d33cb66_66dc529e06db0a58c155b71b_IMG_2869.avif" },
  { type: "image", content: "/images/66dc54cc8f8fd5ebe18ae220_66dc53ddfc927bc34ff43cb4_IMG_2870%2520Kopie.avif" },
  { type: "quote", translationKey: "instructions.ironing.quote2" },
  { type: "image", content: "/images/66dc54cc8f8fd5ebe18ae213_66dc532229e15a21ed76e692_IMG_2872.avif" },
  { type: "image", content: "/images/66dc54cc8f8fd5ebe18ae210_66dc544139706fc65ea3af9d_IMG_2873%2520Kopie.avif" },
  { type: "quote", translationKey: "instructions.ironing.quote3" },
  { type: "image", content: "/images/66dc54cc8f8fd5ebe18ae216_66dc54c029e15a21ed785738_IMG_2877.avif" }
],
  "parkmoglichkeiten": [
  { type: "heading", translationKey: "instructions.parking.heading" },
  { type: "quote", translationKey: "instructions.parking.quote1" },
  { type: "quote", translationKey: "instructions.parking.quote2" },
  { type: "image", content: "/images/66dc5abf81bf97e670a31eb0_66dc5ab602429c73b8411a77_unnamed.avif" }
],
"check-out-anleitung": [
  { type: "text", translationKey: "instructions.checkout.text1" },
  { type: "quote", translationKey: "instructions.checkout.quote1" },
  { type: "quote", translationKey: "instructions.checkout.quote2" },
  { type: "quote", translationKey: "instructions.checkout.quote3" },
  { type: "quote", translationKey: "instructions.checkout.quote4" },
  { type: "text", translationKey: "instructions.checkout.text2" }
],
  "offentlichen-verkehrsmittel-in-wien": [
  { type: "heading", translationKey: "instructions.publictransport.heading" },
  { type: "text", translationKey: "instructions.publictransport.text1" },
  { type: "quote", translationKey: "instructions.publictransport.quote1", href: "https://www.wienerlinien.at/route-planen", linkTextKey: "instructions.publictransport.linktext1" },
  { type: "quote", translationKey: "instructions.publictransport.quote2" },
  { type: "quote", translationKey: "instructions.publictransport.quote3" },
  { type: "quote", translationKey: "instructions.publictransport.quote4" },
  { type: "quote", translationKey: "instructions.publictransport.quote5" },
  { type: "text", translationKey: "instructions.publictransport.text2" }
],
"gepackaufbewahrung-vor-dem-check-in": [
  { type: "text", translationKey: "instructions.baggagestorage_before.text1" },
  { type: "quote", translationKey: "instructions.baggagestorage_before.quote1" },
  { type: "quote", translationKey: "instructions.baggagestorage_before.quote2" },
  { type: "text", translationKey: "instructions.baggagestorage_before.text2" }
],
  "gepackaufbewahrung-nach-dem-check-out": [
  { type: "text", translationKey: "instructions.baggagestorage_after.text1" },
  { type: "quote", translationKey: "instructions.baggagestorage_after.quote1" },
  { type: "quote", translationKey: "instructions.baggagestorage_after.quote2" },
  { type: "quote", translationKey: "instructions.baggagestorage_after.quote3" },
  { type: "text", translationKey: "instructions.baggagestorage_after.text2" }
],
"anleitung-zur-steuerung-der-heizung": [
  { type: "text", translationKey: "instructions.heating.text1" },
  { type: "quote", translationKey: "instructions.heating.quote1" },
  { type: "quote", translationKey: "instructions.heating.quote2" },
  { type: "quote", translationKey: "instructions.heating.quote3" },
  { type: "quote", translationKey: "instructions.heating.quote4" },
  { type: "quote", translationKey: "instructions.heating.quote5" },
  { type: "quote", translationKey: "instructions.heating.quote6" },
  { type: "quote", translationKey: "instructions.heating.quote7" },
  { type: "text", translationKey: "instructions.heating.text2" }
],
"anleitung-tv": [
  { type: "text", translationKey: "instructions.tv.text1" },
  { type: "text", translationKey: "instructions.tv.text2" }
],
  "mit-kindern-wien-entdecken": [
  { type: "text", translationKey: "instructions.kids.text1" },
  { type: "quote", translationKey: "instructions.kids.quote1", href: "https://www.viator.com/tours/Vienna/Vienna-Skip-the-Line-Schonbrunn-Palace-and-Gardens-w-Guide/d454-265552P73?pid=P00290902&mcid=42383&medium=link&campaign=schoenbrunn", linkTextKey: "instructions.kids.linktext1" },
  { type: "quote", translationKey: "instructions.kids.quote2" },
  { type: "quote", translationKey: "instructions.kids.quote3" },
  { type: "quote", translationKey: "instructions.kids.quote4", href: "https://www.viator.com/tours/Vienna/Danube-Tower-The-Top-of-Vienna/d454-75971P1?pid=P00290902&mcid=42383&medium=link&campaign=Donauturm", linkTextKey: "instructions.kids.linktext2" },
  { type: "quote", translationKey: "instructions.kids.quote5" },
  { type: "quote", translationKey: "instructions.kids.quote6" },
  { type: "text", translationKey: "instructions.kids.text2" }
],
};

export { instructionContent };

export default function AnleitungDetailPage() {
  const { t, langPrefix } = useI18n();
  const pathname = window.location.pathname;
  const slug = pathname.split("/").filter(Boolean).pop() || "";

  const instruction = instructions.find((i) => i.id === slug);
  const content = instructionContent[slug] || [];

  if (!instruction) {
    return (
      <div className="pt-32 text-center">
        <h1 className="text-2xl font-serif">{t({ de: "Anleitung nicht gefunden", en: "Guide not found" })}</h1>
        <Link to={`${langPrefix}/anleitungen`} className="text-primary hover:underline mt-4 inline-block">
          {t({ de: "Zurück zu Anleitungen", en: "Back to Instructions" })}
        </Link>
      </div>
    );
  }

  return (
    <div>
      {/* Hero Image */}
      <section className="relative h-[40vh] min-h-[300px]">
        <div className="absolute inset-0">
          <img src={instruction.image} alt={t(instruction.title)} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-foreground/40" />
        </div>
        <div className="absolute bottom-0 left-0 right-0 z-10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
            <span className="text-xs font-medium text-background/80 uppercase tracking-wider font-sans">
              {instruction.category === "apartments" ? "Apartments" : t({ de: "Standort & Umgebung", en: "Location & Area" })}
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-background mt-2">
              {t(instruction.title)}
            </h1>
          </div>
        </div>
      </section>

      {/* Back link */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <Link to={`${langPrefix}/anleitungen`} className="inline-flex items-center gap-2 text-sm text-primary hover:underline transition-smooth">
          <ArrowLeft className="w-4 h-4" />
          {t({ de: "Alle Anleitungen", en: "All Instructions" })}
        </Link>
      </div>

      {/* Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-6">
          {content.map((block, i) => {
            if (block.type === "image") {
              return (
                <div key={i} className="rounded-xl overflow-hidden shadow-card">
                  <img src={block.content as string} alt="" className="w-full h-auto" loading="lazy" />
                </div>
              );
            }
            if (block.type === "heading") {
              return (
                <h3 key={i} className="text-xl font-serif font-bold text-foreground mt-8">
                  {t(block.translationKey!)}
                </h3>
              );
            }
            if (block.type === "text") {
              return (
                <p key={i} className="text-foreground">
                  {t(block.translationKey!)}
                </p>
              );
            }
            if (block.type === "quote") {
              const translatedText = t(block.translationKey!);
              return (
                <blockquote key={i} className="bg-card border-l-4 border-primary rounded-r-xl p-6 shadow-card">
                  {translatedText.split("\n\n").map((p, j) => (
                    <p key={j} className={`text-foreground ${j > 0 ? "mt-3" : ""}`}>{p}</p>
                  ))}
                  {block.href && block.linkTextKey && (
                    <a
                      href={block.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-5 py-2 mt-4 text-sm font-medium text-primary-foreground bg-primary rounded-lg transition-smooth hover:opacity-90"
                    >
                      {t(block.linkTextKey)}
                    </a>
                  )}
                </blockquote>
              );
            }
            return null;
          })}
        </div>

        {/* PDF Downloads */}
        {instruction.pdf && (
          <div className="mt-12 bg-card rounded-2xl p-8 shadow-card">
            <h3 className="text-lg font-semibold text-foreground font-sans mb-2">
              {t({ de: "Download als PDF", en: "Download as PDF" })}
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              {t({ de: "Lade die vollständige Anleitung als PDF herunter und habe alle wichtigen Infos jederzeit griffbereit.", en: "Download the complete guide as a PDF and have all important information at your fingertips at any time." })}
            </p>
            <div className="flex flex-wrap gap-3">
              {instruction.pdf.de && (
                <a href={instruction.pdf.de} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-primary-foreground bg-primary rounded-lg transition-smooth hover:opacity-90">
                  📄 PDF Deutsch
                </a>
              )}
              {instruction.pdf.en && (
                <a href={instruction.pdf.en} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-primary-foreground bg-primary rounded-lg transition-smooth hover:opacity-90">
                  📄 PDF English
                </a>
              )}
            </div>
          </div>
        )}
      </article>

      {/* More Instructions */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-serif font-bold text-foreground">
            {t({ de: "Weitere Anleitungen", en: "More Instructions" })}
          </h2>
          <Link to={`${langPrefix}/anleitungen`} className="text-sm text-primary hover:underline transition-smooth">
            {t({ de: "Alle zeigen", en: "Show all" })}
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {instructions.filter((i) => i.id !== slug).slice(0, 3).map((inst) => (
            <Link
              key={inst.id}
              to={`${langPrefix}/anleitungen-post/${inst.id}`}
              className="group rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-smooth block"
            >
              <div className="aspect-video overflow-hidden">
                <img src={inst.image} alt={t(inst.title)} className="w-full h-full object-cover transition-smooth group-hover:scale-105" loading="lazy" />
              </div>
              <div className="p-4 bg-background">
                <span className="text-xs font-medium text-primary uppercase tracking-wider mb-1 block font-sans">
                  {inst.category === "apartments" ? "Apartments" : t({ de: "Standort & Umgebung", en: "Location & Area" })}
                </span>
                <h3 className="text-base font-semibold text-foreground font-sans">{t(inst.title)}</h3>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
