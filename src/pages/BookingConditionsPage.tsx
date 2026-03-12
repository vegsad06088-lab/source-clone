import { useI18n } from "@/lib/i18n";
import { Link } from "react-router-dom";

export default function BookingConditionsPage() {
  const { t, lang, langPrefix } = useI18n();

  return (
    <div className="pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-serif font-bold text-foreground mb-4">
          {t({
            de: "Buchungsbedingungen",
            en: "Booking Conditions",
          })}
        </h1>

        <p className="text-muted-foreground mb-8">
          {t({
            de: "Bitte lesen Sie diese Buchungsbedingungen sorgfältig durch, bevor Sie eine Reservierung vornehmen.",
            en: "Please review these booking conditions carefully before making a reservation.",
          })}
        </p>

        <div className="space-y-8 text-sm text-muted-foreground leading-relaxed">

          {/* Cancellation Policy */}
          <section>
            <h3 className="text-lg font-sans font-semibold text-foreground mb-3">
              {t({
                de: "1. Stornierungsbedingungen",
                en: "1. Cancellation Policy",
              })}
            </h3>
            <p className="mb-2">
              {t({
                de: "Kostenlose Stornierung bis 7 Tage vor Anreise (14:00 Uhr).",
                en: "Free cancellation up to 7 days before arrival (14:00).",
              })}
            </p>
            <p>
              {t({
                de: "Ab 7 Tage vor Anreise beträgt die Stornogebühr 20 % des Buchungspreises.",
                en: "From 7 days before arrival, a cancellation fee of 20% of the booking price applies.",
              })}
            </p>
          </section>

          {/* Payment Methods */}
          <section>
            <h3 className="text-lg font-sans font-semibold text-foreground mb-3">
              {t({
                de: "2. Zahlungsmethoden",
                en: "2. Payment Methods",
              })}
            </h3>
            <p>
              {t({
                de: "Zahlungen sind per Stripe oder PayPal möglich.",
                en: "Payments can be made via Stripe or PayPal.",
              })}
            </p>
          </section>

          {/* Deposit Rules */}
          <section>
            <h3 className="text-lg font-sans font-semibold text-foreground mb-3">
              {t({
                de: "3. Anzahlungs- und Zahlungsregeln",
                en: "3. Deposit & Payment Rules",
              })}
            </h3>
            <p className="mb-2">
              {t({
                de: "20 % Anzahlung bei Buchung.",
                en: "20% deposit at the time of booking.",
              })}
            </p>
            <p>
              {t({
                de: "80 % Restzahlung spätestens 7 Tage vor Anreise.",
                en: "80% remaining balance due no later than 7 days before arrival.",
              })}
            </p>
          </section>

          {/* Cleaning Fee */}
          <section>
            <h3 className="text-lg font-sans font-semibold text-foreground mb-3">
              {t({
                de: "4. Reinigungsgebühr",
                en: "4. Cleaning Fee",
              })}
            </h3>
            <p>
              {t({
                de: "Die Reinigungsgebühr ist im Gesamtpreis enthalten.",
                en: "The cleaning fee is included in the total price.",
              })}
            </p>
          </section>

          {/* City Tax */}
          <section>
            <h3 className="text-lg font-sans font-semibold text-foreground mb-3">
              {t({
                de: "5. Ortstaxe",
                en: "5. City Tax",
              })}
            </h3>
            <p>
              {t({
                de: "Die Ortstaxe ist im Gesamtpreis enthalten.",
                en: "The city tax is included in the total price.",
              })}
            </p>
          </section>

          {/* Check-in/out */}
          <section>
            <h3 className="text-lg font-sans font-semibold text-foreground mb-3">
              {t({
                de: "6. Check-in & Check-out",
                en: "6. Check-in & Check-out",
              })}
            </h3>
            <p className="mb-1">
              {t({
                de: "Check-in: ab 14:00 Uhr",
                en: "Check-in: after 14:00",
              })}
            </p>
            <p className="mb-1">
              {t({
                de: "Check-out: bis 10:00 Uhr",
                en: "Check-out: before 10:00",
              })}
            </p>
            <p>
              {t({
                de: "Self Check-in über Schlüsselsafe (Lockbox).",
                en: "Self check-in via lockbox.",
              })}
            </p>
          </section>

          {/* Link to AGB */}
          <section>
            <h3 className="text-lg font-sans font-semibold text-foreground mb-3">
              {t({
                de: "7. Weitere Informationen",
                en: "7. Additional Information",
              })}
            </h3>
            <p>
              {t({
                de: "Die vollständigen rechtlichen Bedingungen finden Sie in unseren",
                en: "For full legal details, please refer to our",
              })}{" "}
              <Link
                to={`${langPrefix}/agb`}
                className="text-primary hover:underline"
              >
                {t({ de: "AGB", en: "Terms & Conditions" })}
              </Link>
              .
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
