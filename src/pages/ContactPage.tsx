import { useState } from "react";
import { Link } from "react-router-dom";
import { useI18n } from "@/lib/i18n";
import { Mail, Phone, MapPin } from "lucide-react";

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
            src="/images/652938d0b1ddde3e7ecc4cac_151351.avif"
            alt="Contact"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-foreground/50" />
        </div>
        <div className="relative z-10 text-center px-4 pt-24">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-background mb-4">
            {t("contact.hero.title")}
          </h1>
          <p className="text-lg text-background/90 max-w-2xl mx-auto">
            {t("contact.hero.subtitle")}
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
                  {t("contact.form.name")}
                </label>
                <input
                  type="text"
                  required
                  placeholder={t("contact.form.name_placeholder")}
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-smooth"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2 font-sans">
                  {t("contact.form.email")}
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
                  {t("contact.form.phone")}
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
                  {t("contact.form.subject")}
                </label>
                <input
                  type="text"
                  placeholder={t("contact.form.subject_placeholder")}
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-smooth"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-2 font-sans">
                {t("contact.form.message")}
              </label>
              <textarea
                rows={5}
                required
                placeholder={t("contact.form.message_placeholder")}
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
                {t("contact.form.privacy_agreement_part1")}
                <Link to={`${langPrefix}/datenschutz`} className="text-primary hover:underline">
                  {t("footer.privacy_policy")}
                </Link>
                {t("contact.form.privacy_agreement_part2")}
              </span>
            </label>
            <button
              type="submit"
              disabled={!agreed}
              className="w-full px-6 py-3.5 text-sm font-medium text-primary-foreground bg-primary rounded-lg shadow-card hover:shadow-card-hover transition-smooth hover:-translate-y-[1px] active:translate-y-[1px] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {t("contact.form.submit")}
            </button>
            {status === "success" && (
              <p className="text-sm text-green-600 text-center">
                {t("contact.success_message")}
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
              {t("contact.write_us")}
            </h3>
            <p className="text-sm text-primary group-hover:underline">info@ap-zur-quelle.at</p>
          </a>
          <a href="tel:+43676842287105" className="flex flex-col items-center gap-3 p-8 bg-card rounded-2xl shadow-card hover:shadow-card-hover transition-smooth text-center group">
            <Phone className="w-8 h-8 text-primary" />
            <h3 className="text-base font-semibold text-foreground font-sans">
              {t("contact.call_us")}
            </h3>
            <p className="text-sm text-primary group-hover:underline">+43 676 842 287 105</p>
          </a>
            <a
              href="https://www.google.com/maps/place/Apartments+zur+Quelle/@48.1735058,16.3894297,646m/data=!3m3!1e3!4b1!5s0x476da9e9bb558713:0x62207c3e1bf1362d!4m6!3m5!1s0x2ad883a0300fc9ed:0xed842bf85b14b5dc!8m2!3d48.1735058!4d16.3894297!16s%2Fg%2F11vc6dg9hv?entry=ttu"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-3 p-8 bg-card rounded-2xl shadow-card hover:shadow-card-hover transition-smooth text-center group"
            >
            <MapPin className="w-8 h-8 text-primary" />
            <h3 className="text-base font-semibold text-foreground font-sans">
              {t("contact.visit_us")}
            </h3>
            <p className="text-sm text-primary group-hover:underline">Absberggasse 6, 1100 Wien</p>
          </a>
        </div>
      </section>

      {/* Viator */}
      <section className="bg-card py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-serif font-bold text-foreground mb-3">
            {t("contact.recommendations_title")}
          </h2>
          <p className="text-muted-foreground mb-6">
            {t("contact.viator.subtitle")}
          </p>
          <a
            href="https://www.viator.com/Vienna/d454-ttd?localeSwitch=1&pid=P00290902&mcid=42383&medium=link"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-primary-foreground bg-primary rounded-lg transition-smooth hover:opacity-90"
          >
            {t("home.hero.cta_book")}
          </a>
        </div>
      </section>
    </div>
  );
}
