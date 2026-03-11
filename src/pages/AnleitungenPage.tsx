import { useI18n } from "@/lib/i18n";
import { instructions } from "@/lib/data";
import { Link } from "react-router-dom";

export default function AnleitungenPage() {
  const { t, lang, langPrefix } = useI18n();

  return (
    <div>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-foreground mb-4">
            {t({ de: "Anleitungen für Deinen Aufenthalt", en: "Instructions for Your Stay" })}
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t({ de: "Alles, was Du für einen entspannten Aufenthalt wissen musst.", en: "Everything you need to know for a relaxed stay." })}
          </p>
        </div>
      </section>

      {/* Viator */}
      <section className="bg-primary text-primary-foreground py-10">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-xl font-serif font-bold mb-2">
            {t({ de: "Tipps für Deinen Aufenthalt in Wien.", en: "Tips for your stay in Vienna." })}
          </h2>
          <p className="text-primary-foreground/80 mb-4 text-sm">{t({ de: "Entdecke die besten Touren, Tickets und Highlights", en: "Discover the best tours, tickets and highlights" })}</p>
          <a href="https://www.viator.com/Vienna/d454-ttd?localeSwitch=1&pid=P00290902&mcid=42383&medium=link" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-6 py-2.5 text-sm font-medium bg-background text-foreground rounded-lg transition-smooth hover:opacity-90">
            {t({ de: "Jetzt entdecken", en: "Discover now" })}
          </a>
        </div>
      </section>

      {/* Instructions Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-2xl font-serif font-bold text-foreground mb-8">
          {t({ de: "Hier findest Du alles was Du wissen musst.", en: "Here you'll find everything you need to know." })}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {instructions.map((inst) => (
            <div key={inst.id} className="group rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-smooth">
              <div className="aspect-video overflow-hidden">
                <img src={inst.image} alt={t(inst.title)} className="w-full h-full object-cover transition-smooth group-hover:scale-105" loading="lazy" />
              </div>
              <div className="p-6 bg-background">
                <span className="text-xs font-medium text-primary uppercase tracking-wider mb-2 block font-sans">
                  {inst.category === "apartments" ? "Apartments" : t({ de: "Standort & Umgebung", en: "Location & Area" })}
                </span>
                <h3 className="text-lg font-semibold text-foreground mb-2 font-sans">{t(inst.title)}</h3>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{t(inst.description)}</p>
                {inst.pdf && (
                  <div className="flex flex-wrap gap-2">
                    {inst.pdf.de && (
                      <a href={inst.pdf.de} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-sm text-primary font-medium hover:underline transition-smooth">
                        📄 PDF (DE)
                      </a>
                    )}
                    {inst.pdf.en && (
                      <a href={inst.pdf.en} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-sm text-primary font-medium hover:underline transition-smooth">
                        📄 PDF (EN)
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
