import { useState } from "react";
import { Link } from "react-router-dom";
import { useI18n } from "@/lib/i18n";
import { Mail, Phone, MapPin } from "lucide-react";

const CDN = "https://cdn.prod.website-files.com/6515f2606ac654c52d9c4bfa";

export default function ContactPage() {
  const { t, langPrefix } = useI18n();
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
  const [agreed, setAgreed] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!agreed) return;
    // mailto fallback
    const mailBody = `Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0APhone: ${formData.phone}%0D%0A%0D%0A${formData.message}`;
    window.location.href = `mailto:info@ap-zur-quelle.at?subject=${encodeURIComponent(formData.subject)}&body=${mailBody}`;
    setStatus("success");
  };

  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <img
            src={`${CDN}/652938d0b1ddde3e7ecc4cac_151351.avif`}
            alt="Contact"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-foreground/50" />
        </div>
        <div className="relative z-10 text-center px-4 pt-24">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-background mb-4">
            {t({ de: "Kontaktiere uns", en: "Contact us" })}
          </h1>
          <p className="text-lg text-background/90 max-w-2xl mx-auto">
            {t({
              de: "Für Fragen, Buchungen oder spezielle Wünsche - wir sind hier, um Dir zu helfen!",
              en: "For questions, bookings, or special requests — we're here to help!",
            })}
          </p>
        </div>
      </section>

      {/* Contact Form */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 -mt-12 relative z-20">
        <div className="bg-background rounded-2xl shadow-elevated p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2 font-sans">
                  {t({ de: "Name", en: "Name" })}
                </label>
                <input
                  type="text"
                  required
                  placeholder={t({ de: "Max Mustermann", en: "John Doe" })}
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-smooth"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2 font-sans">
                  {t({ de: "Email Adresse", en: "Email address" })}
                </label>
                <input
                  type="email"
                  required
                  placeholder="max@email.at"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-smooth"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2 font-sans">
                  {t({ de: "Telefon", en: "Phone" })}
                </label>
                <input
                  type="tel"
                  placeholder="+43 123 456 789"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-smooth"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2 font-sans">
                  {t({ de: "Betreff", en: "Subject" })}
                </label>
                <input
                  type="text"
                  placeholder={t({ de: "Zimmeranfrage", en: "Room inquiry" })}
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-smooth"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-2 font-sans">
                {t({ de: "Deine Nachricht", en: "Your message" })}
              </label>
              <textarea
                rows={5}
                required
                placeholder={t({
                  de: "Hallo, ich interessiere mich für ein Apartment vom 3. bis 10. September. Gibt es verfügbare Zimmer?",
                  en: "Hello, I'm interested in an apartment from September 3-10. Are there available rooms?",
                })}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-smooth resize-none"
              />
            </div>
            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={agreed}
                onChange={(e) => setAgreed(e.target.checked)}
                className="mt-1 w-4 h-4 rounded border-border text-primary focus:ring-primary/50"
              />
              <span className="text-sm text-muted-foreground">
                {t({ de: "Ich habe die ", en: "I have read the " })}
                <Link to={`${langPrefix}/datenschutz`} className="text-primary hover:underline">
                  {t({ de: "Datenschutzerklärung", en: "Privacy Policy" })}
                </Link>
                {t({ de: " zur Kenntnis genommen", en: " and agree" })}
              </span>
            </label>
            <button
              type="submit"
              disabled={!agreed}
              className="w-full px-6 py-3.5 text-sm font-medium text-primary-foreground bg-primary rounded-lg shadow-card hover:shadow-card-hover transition-smooth hover:-translate-y-[1px] active:translate-y-[1px] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {t({ de: "Nachricht senden", en: "Send message" })}
            </button>
            {status === "success" && (
              <p className="text-sm text-green-600 text-center">
                {t({ de: "Erfolgreich gesendet! Wir werden uns schnellstmöglich bei Dir melden.", en: "Sent successfully! We will get back to you as soon as possible." })}
              </p>
            )}
          </form>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <a href="mailto:info@ap-zur-quelle.at" className="flex flex-col items-center gap-3 p-8 bg-card rounded-2xl shadow-card hover:shadow-card-hover transition-smooth text-center group">
            <Mail className="w-8 h-8 text-primary" />
            <h3 className="text-base font-semibold text-foreground font-sans">
              {t({ de: "Schreib uns!", en: "Write to us!" })}
            </h3>
            <p className="text-sm text-primary group-hover:underline">info@ap-zur-quelle.at</p>
          </a>
          <a href="tel:+43676842287105" className="flex flex-col items-center gap-3 p-8 bg-card rounded-2xl shadow-card hover:shadow-card-hover transition-smooth text-center group">
            <Phone className="w-8 h-8 text-primary" />
            <h3 className="text-base font-semibold text-foreground font-sans">
              {t({ de: "Ruf uns an!", en: "Give us a call!" })}
            </h3>
            <p className="text-sm text-primary group-hover:underline">+43 676 842 287 105</p>
          </a>
          <a href="https://maps.app.goo.gl/xGRYJcKUyFY2gndG9" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-3 p-8 bg-card rounded-2xl shadow-card hover:shadow-card-hover transition-smooth text-center group">
            <MapPin className="w-8 h-8 text-primary" />
            <h3 className="text-base font-semibold text-foreground font-sans">
              {t({ de: "Besuche uns!", en: "Come visit us!" })}
            </h3>
            <p className="text-sm text-primary group-hover:underline">Absberggasse 6, 1100 Wien</p>
          </a>
        </div>
      </section>

      {/* Viator */}
      <section className="bg-card py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-serif font-bold text-foreground mb-3">
            {t({ de: "Unsere Empfehlungen für Deinen Aufenthalt in Wien.", en: "Our recommendations for your stay in Vienna." })}
          </h2>
          <p className="text-muted-foreground mb-6">
            {t({ de: "Entdecke die besten Touren, Tickets und Highlights für Deine Reise", en: "Discover the best tours, tickets and highlights for your trip" })}
          </p>
          <a
            href="https://www.viator.com/Vienna/d454-ttd?localeSwitch=1&pid=P00290902&mcid=42383&medium=link"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-primary-foreground bg-primary rounded-lg transition-smooth hover:opacity-90"
          >
            {t({ de: "Jetzt entdecken", en: "Discover now" })}
          </a>
        </div>
      </section>
    </div>
  );
}
