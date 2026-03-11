import { useState } from "react";
import { useI18n } from "@/lib/i18n";
import { X } from "lucide-react";

export default function PromoBanner() {
  const { t } = useI18n();
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="bg-primary text-primary-foreground text-center py-3 px-4 text-sm font-medium relative">
      {t({
        de: "Mehr bleiben, weniger zahlen! Bis zu 20% sparen ab 4 Nächten!",
        en: "Stay more, pay less! Save up to 20% if you stay 4 nights or more!",
      })}
      <button onClick={() => setVisible(false)} className="absolute right-4 top-1/2 -translate-y-1/2 text-primary-foreground/80 hover:text-primary-foreground">
        <X size={18} />
      </button>
    </div>
  );
}
