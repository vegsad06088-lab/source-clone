import { useI18n } from "@/lib/i18n";

export default function BookingConditionsContent() {
  const { t } = useI18n();

  return (
    <div>
      <h2 className="text-2xl font-serif font-bold mb-4">
        {t({ de: "Buchungsbedingungen", en: "Booking Conditions" })}
      </h2>

      <p className="text-muted-foreground text-sm leading-relaxed">
        {t({
          de: "Hier stehen deine Buchungsbedingungen. Mindestaufenthalt, Stornierungsrichtlinien, Check-in Zeiten usw.",
          en: "Here are your booking conditions. Minimum stay, cancellation policy, check-in times, etc."
        })}
      </p>
    </div>
  );
}
