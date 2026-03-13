import { useState } from "react";
import { useI18n } from "@/lib/i18n";
import { faqs } from "@/lib/data";

export default function FAQSection() {
  const { t } = useI18n();
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground text-center mb-4">
        {t("faq.section.title")}
      </h2>

      <p className="text-center text-muted-foreground mb-12">
        {t("faq.section.subtitle")}
      </p>

      <div className="space-y-3">
        {faqs.map((faq, i) => (
          <div key={i} className="rounded-2xl shadow-card overflow-hidden">
            <button
              onClick={() => setOpen(open === i ? null : i)}
              className="w-full text-left p-5 flex justify-between items-center bg-background hover:bg-card transition-smooth"
            >
              <span className="text-base font-medium text-foreground font-sans">
                {t(faq.qKey)}
              </span>

              <svg
                className={`w-5 h-5 text-muted-foreground transition-transform ${
                  open === i ? "rotate-180" : ""
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {open === i && (
              <div className="px-5 pb-5 bg-background">
                <p className="text-sm text-muted-foreground">{t(faq.aKey)}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
