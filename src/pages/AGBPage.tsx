import { useI18n } from "@/lib/i18n";

export default function AGBPage() {
  const { t } = useI18n();

  return (
    <div className="pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-serif font-bold text-foreground mb-4">
          {t({ de: "Allgemeine Geschäftsbedingungen (AGB)", en: "Terms & Conditions" })}
        </h1>
        <p className="text-muted-foreground mb-8">
          {t({
            de: "Diese Allgemeinen Geschäftsbedingungen gelten für alle Buchungen und Aufenthalte in den Apartments zur Quelle.",
            en: "These Terms & Conditions apply to all bookings and stays at Apartments zur Quelle.",
          })}
        </p>

        <div className="space-y-8 text-sm text-muted-foreground leading-relaxed">
          {/* 1. Geltungsbereich / Scope */}
          <section>
            <h3 className="text-lg font-sans font-semibold text-foreground mb-3">
              {t({ de: "1. Geltungsbereich", en: "1. Scope" })}
            </h3>
            <p>
              {t({
                de: "Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für alle Buchungen, Aufenthalte und Leistungen im Zusammenhang mit den Ferienwohnungen Apartments zur Quelle. Mit Abschluss der Buchung akzeptiert der Gast diese AGB.",
                en: "These Terms & Conditions apply to all bookings, stays, and services related to the holiday apartments Apartments zur Quelle. By completing a booking, the guest accepts these terms.",
              })}
            </p>
          </section>

          {/* 2. Buchung & Zahlung / Booking & Payment */}
          <section>
            <h3 className="text-lg font-sans font-semibold text-foreground mb-3">
              {t({ de: "2. Buchung & Zahlung", en: "2. Booking & Payment" })}
            </h3>
            <p className="mb-2">
              {t({
                de: "Eine Buchung ist verbindlich, sobald der Gast den Buchungsvorgang abschließt und eine Bestätigung erhält.",
                en: "A booking becomes binding once the guest completes the booking process and receives confirmation.",
              })}
            </p>
            <p>
              {t({
                de: "Die Zahlung erfolgt in zwei Schritten: 20 % Anzahlung bei Buchung (über Stripe oder PayPal) und 80 % Restzahlung spätestens 7 Tage vor Anreise. Geht die Restzahlung nicht rechtzeitig ein, behalten wir uns das Recht vor, die Buchung zu stornieren.",
                en: "Payment is made in two steps: a 20% deposit at the time of booking (via Stripe or PayPal) and the remaining 80% no later than 7 days before arrival. If the remaining balance is not paid on time, we reserve the right to cancel the booking.",
              })}
            </p>
          </section>

          {/* 3. Stornierungsbedingungen / Cancellation Policy */}
          <section>
            <h3 className="text-lg font-sans font-semibold text-foreground mb-3">
              {t({ de: "3. Stornierungsbedingungen", en: "3. Cancellation Policy" })}
            </h3>
            <p className="mb-2">
              {t({
                de: "Bis 7 Tage vor Anreise (14:00 Uhr) wird die Anzahlung zu 100 % zurückerstattet.",
                en: "Up to 7 days before arrival (14:00), the deposit is refunded 100%.",
              })}
            </p>
            <p className="mb-2">
              {t({
                de: "Ab 7 Tage vor Anreise (14:00 Uhr) beträgt die Stornogebühr 20 % des Buchungspreises (entspricht der Anzahlung). Die Anzahlung wird in diesem Fall nicht zurückerstattet.",
                en: "From 7 days before arrival (14:00), a cancellation fee of 20% of the booking price applies (equal to the deposit). The deposit is non-refundable in this case.",
              })}
            </p>
            <p>
              {t({
                de: "Bei Nichtanreise ohne Stornierung (No-Show) wird der gesamte Betrag fällig.",
                en: "In case of no-show without cancellation, the full amount is due.",
              })}
            </p>
          </section>

          {/* 4. Check-in & Check-out */}
          <section>
            <h3 className="text-lg font-sans font-semibold text-foreground mb-3">
              {t({ de: "4. Check-in & Check-out", en: "4. Check-in & Check-out" })}
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
                de: "Der Zugang erfolgt per Self Check-in über einen Schlüsselsafe (Lockbox). Der Zugangscode wird vor der Anreise bereitgestellt.",
                en: "Access is via self check-in using a lockbox. The access code will be provided before arrival.",
              })}
            </p>
          </section>

          {/* 5. Hausordnung / House Rules */}
          <section>
            <h3 className="text-lg font-sans font-semibold text-foreground mb-3">
              {t({ de: "5. Hausordnung", en: "5. House Rules" })}
            </h3>
            <p className="mb-2">
              {t({
                de: "Während des Aufenthalts gilt: maximal 2 Gäste, Rauchen ist verboten, keine Haustiere, keine Partys oder Events, Ruhezeiten von 22:00–07:00, die Wohnung ist mit Sorgfalt zu behandeln und es sind keine nicht angemeldeten Besucher erlaubt.",
                en: "During the stay: maximum 2 guests, no smoking, no pets, no parties or events, quiet hours from 22:00–07:00, the apartment must be treated with care, and no unregistered visitors are allowed.",
              })}
            </p>
            <p>
              {t({
                de: "Vor der Abreise: benutzte Handtücher sammeln, Licht und Geräte ausschalten, benutztes Geschirr abspülen, Schlüssel in die Lockbox zurücklegen und den Gastgeber über den Check-out informieren.",
                en: "Before departure: gather used towels, switch off lights and appliances, rinse used dishes, return keys to the lockbox, and inform the host about checkout.",
              })}
            </p>
          </section>

          {/* 6. Schäden & Haftung / Damages & Liability */}
          <section>
            <h3 className="text-lg font-sans font-semibold text-foreground mb-3">
              {t({ de: "6. Schäden & Haftung", en: "6. Damages & Liability" })}
            </h3>
            <p className="mb-2">
              {t({
                de: "Der Gast haftet für alle Schäden, die während des Aufenthalts durch ihn oder seine Mitreisenden entstehen. Beschädigungen sind unverzüglich zu melden.",
                en: "The guest is liable for any damage caused during the stay by them or their companions. Damages must be reported immediately.",
              })}
            </p>
            <p>
              {t({
                de: "Der Gastgeber haftet nicht für den Verlust von Wertgegenständen, persönliche Gegenstände des Gastes oder Ausfälle durch höhere Gewalt (z. B. Strom, Internet).",
                en: "The host is not liable for loss of valuables, personal belongings of the guest, or interruptions caused by force majeure (e.g. power, internet).",
              })}
            </p>
          </section>

          {/* 7. Sicherheit / Safety */}
          <section>
            <h3 className="text-lg font-sans font-semibold text-foreground mb-3">
              {t({ de: "7. Sicherheit", en: "7. Safety" })}
            </h3>
            <p>
              {t({
                de: "Die Wohnung ist mit Rauchmelder und Kohlenmonoxidmelder ausgestattet. Sicherheitsanweisungen sind zu beachten.",
                en: "The apartment is equipped with a smoke alarm and a carbon monoxide alarm. Safety instructions must be followed.",
              })}
            </p>
          </section>

          {/* 8. Datenschutz / Privacy */}
          <section>
            <h3 className="text-lg font-sans font-semibold text-foreground mb-3">
              {t({ de: "8. Datenschutz", en: "8. Privacy" })}
            </h3>
            <p>
              {t({
                de: "Informationen zum Datenschutz finden Sie in unserer Datenschutzerklärung.",
                en: "For data protection information, please see our Privacy Policy.",
              })}{" "}
              <a href="/datenschutz" className="text-primary hover:underline">
                {t({ de: "Datenschutzerklärung", en: "Privacy Policy" })}
              </a>
              .
            </p>
          </section>

          {/* 9. Gerichtsstand / Jurisdiction */}
          <section>
            <h3 className="text-lg font-sans font-semibold text-foreground mb-3">
              {t({ de: "9. Gerichtsstand", en: "9. Jurisdiction" })}
            </h3>
            <p>
              {t({
                de: "Es gilt ausschließlich österreichisches Recht. Gerichtsstand ist Wien.",
                en: "Exclusively Austrian law applies. Place of jurisdiction is Vienna.",
              })}
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
