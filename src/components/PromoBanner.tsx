import { useState } from "react";
import { useI18n } from "@/lib/i18n";
import { X } from "lucide-react";
import offersConfig from "@/config/offers.json";

export default function PromoBanner() {
  const { t, lang } = useI18n();
  const [visible, setVisible] = useState(true);

  // Check if promo is enabled and has required config
  if (!visible || !offersConfig.promo.enabled || !offersConfig.promo.percentage || !offersConfig.promo.nights) {
    return null;
  }

  // Construct promo message dynamically
  const promoBannerTexts: Record<string, string> = {
    de: `Mehr bleiben, weniger zahlen! Bis zu ${offersConfig.promo.percentage}% sparen ab ${offersConfig.promo.nights} Nächten!`,
    en: `Stay more, pay less! Save up to ${offersConfig.promo.percentage}% if you stay ${offersConfig.promo.nights} nights or more!`,
    sq: `Qëndroni më shumë, paguani më pak! Kurseni deri ${offersConfig.promo.percentage}% për qëndrime ${offersConfig.promo.nights} netësh ose më shumë!`,
    ru: `Живите дольше, платьте меньше! Экономьте до ${offersConfig.promo.percentage}% при проживании ${offersConfig.promo.nights} ночей или дольше!`,
  };

  const bannerText = promoBannerTexts[lang] || promoBannerTexts.de;

  return (
    <div className="bg-primary text-primary-foreground text-center py-3 px-4 text-sm font-medium relative">
      {bannerText}
      <button 
        onClick={() => setVisible(false)} 
        className="absolute right-4 top-1/2 -translate-y-1/2 text-primary-foreground/80 hover:text-primary-foreground"
        aria-label="Close promo banner"
      >
        <X size={18} />
      </button>
    </div>
  );
}
