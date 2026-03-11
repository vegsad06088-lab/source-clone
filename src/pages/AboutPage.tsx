import { useI18n } from "@/lib/i18n";
import { Link } from "react-router-dom";
import { faqs } from "@/lib/data";
import { useState } from "react";

const CDN = "https://cdn.prod.website-files.com/6515f2606ac654c52d9c4bfa";

export default function AboutPage() {
  const { t, langPrefix } = useI18n();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center">
        <div className="absolute inset-0">
          <img src={`${CDN}/652938d0b1ddde3e7ecc4cac_151351.avif`} alt="About" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-foreground/50" />
        </div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-background mb-4">
            {t({ de: "Unser Herzschlag", en: "Our Heartbeat" })}
          </h1>
          <p className="text-lg text-background/90 max-w-2xl mx-auto">
            {t({
              de: "Im Puls von Wien schlagen wir eine Brücke zwischen modernem Wohnkomfort und nachhaltiger Verantwortung. Begleite uns auf unserer Reise.",
              en: "In the pulse of Vienna, we bridge modern living comfort and sustainable responsibility. Join us on our journey.",
            })}
          </p>
        </div>
      </section>

      {/* Location */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-3xl font-serif font-bold text-foreground text-center mb-4">
          {t({ de: "Unser Standort in Wien", en: "Our Location in Vienna" })}
        </h2>
        <p className="text-center text-muted-foreground mb-12">
          {t({ de: "Wiener Charme trifft moderne Eleganz. Dein perfekter Start für Stadterkundungen.", en: "Viennese charm meets modern elegance. Your perfect starting point for city explorations." })}
        </p>
        <div className="max-w-2xl mx-auto text-center">
          <h3 className="text-xl font-serif font-semibold text-foreground mb-2">Apartments zur Quelle</h3>
          <p className="text-muted-foreground mb-2">Absberggasse 6</p>
          <p className="text-muted-foreground mb-4">1100 Wien, Österreich</p>
          <a
            href="https://maps.app.goo.gl/vhk8MZtAXAwTW5ks6"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-primary-foreground bg-primary rounded-lg transition-smooth hover:opacity-90"
          >
            {t({ de: "Karte öffnen", en: "Open Map" })}
          </a>
        </div>
      </section>

      {/* Viator */}
      <section className="bg-card py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-serif font-bold text-foreground mb-3">
            {t({ de: "Tipps für Deinen Aufenthalt in Wien.", en: "Tips for your stay in Vienna." })}
          </h2>
          <p className="text-muted-foreground mb-6">{t({ de: "Entdecke die besten Touren, Tickets und Highlights für Deine Reise", en: "Discover the best tours, tickets and highlights for your trip" })}</p>
          <a href="https://www.viator.com/Vienna/d454-ttd?localeSwitch=1&pid=P00290902&mcid=42383&medium=link" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-primary-foreground bg-primary rounded-lg transition-smooth hover:opacity-90">
            {t({ de: "Jetzt entdecken", en: "Discover now" })}
          </a>
        </div>
      </section>

      {/* Your Home */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-3xl font-serif font-bold text-foreground mb-6">
          {t({ de: "Dein Zuhause in Wien", en: "Your Home in Vienna" })}
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-8">
          {t({ de: "Tauche ein in das urbane Flair von Wien und genieße gleichzeitig den Komfort und die Privatsphäre unserer modernen Apartments. Jedes Zimmer ist stilvoll eingerichtet und spiegelt die vibrierende Energie dieser Stadt wider.", en: "Immerse yourself in the urban flair of Vienna while enjoying the comfort and privacy of our modern apartments. Every room is stylishly furnished and reflects the vibrant energy of this city." })}
        </p>
        <h2 className="text-3xl font-serif font-bold text-foreground mb-6">
          {t({ de: "Räume zum Wohlfühlen", en: "Rooms to Feel Good In" })}
        </h2>
        <p className="text-muted-foreground leading-relaxed">
          {t({ de: "Wir wissen, wie wichtig es ist, einen gemütlichen Rückzugsort zu haben, besonders wenn man unterwegs ist. Unsere Apartments sind darauf ausgerichtet, dir genau das zu bieten.", en: "We know how important it is to have a cozy retreat, especially when traveling. Our apartments are designed to offer you exactly that." })}
        </p>
      </section>

      {/* Photo Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          <img src={`${CDN}/653593603b0593b2e2e14b9a_Unbenannt-3.avif`} alt="" className="rounded-2xl shadow-card w-full h-48 object-cover col-span-2 md:col-span-2" loading="lazy" />
          <img src={`${CDN}/65359412284b0413bf6b772e_Unbenannt-5.avif`} alt="" className="rounded-2xl shadow-card w-full h-48 object-cover" loading="lazy" />
          <img src={`${CDN}/653594678dd7217452f8a07f_Unbenannt-6.avif`} alt="" className="rounded-2xl shadow-card w-full h-48 object-cover" loading="lazy" />
        </div>
      </section>

      {/* Why Guests Love Us */}
      <section className="bg-card py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif font-bold text-foreground text-center mb-12">
            {t({ de: "Warum Gäste uns lieben", en: "Why Guests Love Us" })}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { img: `${CDN}/652d4d541f3b9a2db2c8aff9_lage.avif`, title: { de: "Top Lage", en: "Top Location" }, desc: { de: "Mitten in Wien, alles in greifbarer Nähe.", en: "In the middle of Vienna, everything within reach." } },
              { img: `${CDN}/652d4e65582b48b236c38f15_persoenlichkeit.avif`, title: { de: "Persönlichkeit", en: "Personality" }, desc: { de: "Jeder Gast ist für uns einzigartig.", en: "Every guest is unique to us." } },
              { img: `${CDN}/652d4e65c9fcba3cb32f9734_service.avif`, title: { de: "Einzigartiger Service", en: "Unique Service" }, desc: { de: "Wir sind erst zufrieden, wenn Du es bist.", en: "We're not satisfied until you are." } },
              { img: `${CDN}/652d4e659191a5d05333e03b_detail.avif`, title: { de: "Liebe zum Detail", en: "Attention to Detail" }, desc: { de: "In jedem Raum spürst Du unsere Leidenschaft.", en: "In every room you feel our passion." } },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="aspect-square rounded-2xl overflow-hidden shadow-card mb-4">
                  <img src={item.img} alt={t(item.title)} className="w-full h-full object-cover" loading="lazy" />
                </div>
                <h3 className="text-lg font-semibold text-foreground font-sans mb-1">{t(item.title)}</h3>
                <p className="text-sm text-muted-foreground">{t(item.desc)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-3xl font-serif font-bold text-foreground text-center mb-12">
          {t({ de: "Häufige Fragen", en: "FAQ" })}
        </h2>
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div key={i} className="rounded-2xl shadow-card overflow-hidden">
              <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full text-left p-5 flex justify-between items-center bg-background hover:bg-card transition-smooth">
                <span className="text-base font-medium text-foreground font-sans">{t(faq.q)}</span>
                <svg className={`w-5 h-5 text-muted-foreground transition-transform ${openFaq === i ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </button>
              {openFaq === i && (
                <div className="px-5 pb-5 bg-background"><p className="text-sm text-muted-foreground">{t(faq.a)}</p></div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
