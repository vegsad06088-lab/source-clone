import { useI18n } from "@/lib/i18n";
import { Link } from "react-router-dom";

export default function BookingConditionsContent() {
  const { t, langPrefix } = useI18n();

  return (
    <div className="space-y-8 text-sm text-muted-foreground leading-relaxed">

      {/* Title */}
      <h1 className="text-3xl font-serif font-bold text-foreground mb-4">
        {t({
          de: "Buchungsbedingungen",
          en: "Booking Conditions",
          sq: "Kushtet e rezervimit",
          tr: "Rezervasyon Şartları",
          it: "Condizioni di prenotazione",
          fr: "Conditions de réservation",
          es: "Condiciones de reserva"
        })}
      </h1>

      {/* Intro */}
      <p>
        {t({
          de: "Bitte lesen Sie diese Buchungsbedingungen sorgfältig durch, bevor Sie eine Reservierung vornehmen.",
          en: "Please review these booking conditions carefully before making a reservation.",
          sq: "Ju lutemi lexoni me kujdes këto kushte rezervimi para se të bëni një prenotim.",
          tr: "Lütfen rezervasyon yapmadan önce bu rezervasyon şartlarını dikkatlice inceleyin.",
          it: "Si prega di leggere attentamente queste condizioni di prenotazione prima di effettuare una prenotazione.",
          fr: "Veuillez lire attentivement ces conditions de réservation avant de faire une réservation.",
          es: "Lea atentamente estas condiciones de reserva antes de realizar una reserva."
        })}
      </p>

      {/* 1. Cancellation Policy */}
      <section>
        <h3 className="text-lg font-sans font-semibold text-foreground mb-3">
          {t({
            de: "1. Stornierungsbedingungen",
            en: "1. Cancellation Policy",
            sq: "1. Politika e anulimit",
            tr: "1. İptal Politikası",
            it: "1. Politica di cancellazione",
            fr: "1. Politique d'annulation",
            es: "1. Política de cancelación"
          })}
        </h3>

        <p className="mb-2">
          {t({
            de: "Kostenlose Stornierung bis 7 Tage vor Anreise (14:00 Uhr).",
            en: "Free cancellation up to 7 days before arrival (14:00).",
            sq: "Anulim falas deri në 7 ditë para mbërritjes (14:00).",
            tr: "Varıştan 7 gün öncesine kadar ücretsiz iptal (14:00).",
            it: "Cancellazione gratuita fino a 7 giorni prima dell'arrivo (14:00).",
            fr: "Annulation gratuite jusqu'à 7 jours avant l'arrivée (14h00).",
            es: "Cancelación gratuita hasta 7 días antes de la llegada (14:00)."
          })}
        </p>

        <p>
          {t({
            de: "Ab 7 Tage vor Anreise beträgt die Stornogebühr 20 % des Buchungspreises.",
            en: "From 7 days before arrival, a cancellation fee of 20% of the booking price applies.",
            sq: "Nga 7 ditë para mbërritjes, aplikohet një tarifë anulimi prej 20% të çmimit të rezervimit.",
            tr: "Varıştan 7 gün önce itibarıyla rezervasyon ücretinin %20'si kadar iptal ücreti uygulanır.",
            it: "A partire da 7 giorni prima dell'arrivo si applica una penale del 20% del prezzo della prenotazione.",
            fr: "À partir de 7 jours avant l'arrivée, des frais d'annulation de 20 % du prix de la réservation s'appliquent.",
            es: "A partir de 7 días antes de la llegada, se aplica una tarifa de cancelación del 20% del precio de la reserva."
          })}
        </p>
      </section>

      {/* 2. Payment Methods */}
      <section>
        <h3 className="text-lg font-sans font-semibold text-foreground mb-3">
          {t({
            de: "2. Zahlungsmethoden",
            en: "2. Payment Methods",
            sq: "2. Metodat e pagesës",
            tr: "2. Ödeme Yöntemleri",
            it: "2. Metodi di pagamento",
            fr: "2. Méthodes de paiement",
            es: "2. Métodos de pago"
          })}
        </h3>

        <p>
          {t({
            de: "Zahlungen sind per Stripe oder PayPal möglich.",
            en: "Payments can be made via Stripe or PayPal.",
            sq: "Pagesat mund të bëhen përmes Stripe ose PayPal.",
            tr: "Ödemeler Stripe veya PayPal üzerinden yapılabilir.",
            it: "I pagamenti possono essere effettuati tramite Stripe o PayPal.",
            fr: "Les paiements peuvent être effectués via Stripe ou PayPal.",
            es: "Los pagos pueden realizarse a través de Stripe o PayPal."
          })}
        </p>
      </section>

      {/* 3. Deposit Rules */}
      <section>
        <h3 className="text-lg font-sans font-semibold text-foreground mb-3">
          {t({
            de: "3. Anzahlungs- und Zahlungsregeln",
            en: "3. Deposit & Payment Rules",
            sq: "3. Rregullat e parapagimit dhe pagesës",
            tr: "3. Depozito ve ödeme kuralları",
            it: "3. Regole di deposito e pagamento",
            fr: "3. Règles de dépôt et de paiement",
            es: "3. Normas de depósito y pago"
          })}
        </h3>

        <p className="mb-2">
          {t({
            de: "20 % Anzahlung bei Buchung.",
            en: "20% deposit at the time of booking.",
            sq: "20% parapagim në momentin e rezervimit.",
            tr: "Rezervasyon sırasında %20 depozito alınır.",
            it: "Deposito del 20% al momento della prenotazione.",
            fr: "Dépôt de 20 % au moment de la réservation.",
            es: "Depósito del 20% al momento de la reserva."
          })}
        </p>

        <p>
          {t({
            de: "80 % Restzahlung spätestens 7 Tage vor Anreise.",
            en: "80% remaining balance due no later than 7 days before arrival.",
            sq: "80% e shumës së mbetur duhet të paguhet jo më vonë se 7 ditë para mbërritjes.",
            tr: "Kalan %80, varıştan en geç 7 gün önce ödenmelidir.",
            it: "Il restante 80% deve essere pagato entro 7 giorni prima dell'arrivo.",
            fr: "Les 80 % restants doivent être payés au plus tard 7 jours avant l'arrivée.",
            es: "El 80% restante debe pagarse como máximo 7 días antes de la llegada."
          })}
        </p>
      </section>

      {/* 4. Cleaning Fee */}
      <section>
        <h3 className="text-lg font-sans font-semibold text-foreground mb-3">
          {t({
            de: "4. Reinigungsgebühr",
            en: "4. Cleaning Fee",
            sq: "4. Tarifa e pastrimit",
            tr: "4. Temizlik ücreti",
            it: "4. Tariffa di pulizia",
            fr: "4. Frais de ménage",
            es: "4. Tarifa de limpieza"
          })}
        </h3>

        <p>
          {t({
            de: "Die Reinigungsgebühr ist im Gesamtpreis enthalten.",
            en: "The cleaning fee is included in the total price.",
            sq: "Tarifa e pastrimit është e përfshirë në çmimin total.",
            tr: "Temizlik ücreti toplam fiyata dahildir.",
            it: "La tariffa di pulizia è inclusa nel prezzo totale.",
            fr: "Les frais de ménage sont inclus dans le prix total.",
            es: "La tarifa de limpieza está incluida en el precio total."
          })}
        </p>
      </section>

      {/* 5. City Tax */}
      <section>
        <h3 className="text-lg font-sans font-semibold text-foreground mb-3">
          {t({
            de: "5. Ortstaxe",
            en: "5. City Tax",
            sq: "5. Taksa e qytetit",
            tr: "5. Şehir vergisi",
            it: "5. Tassa di soggiorno",
            fr: "5. Taxe de séjour",
            es: "5. Impuesto municipal"
          })}
        </h3>

        <p>
          {t({
            de: "Die Ortstaxe ist im Gesamtpreis enthalten.",
            en: "The city tax is included in the total price.",
            sq: "Taksa e qytetit është e përfshirë në çmimin total.",
            tr: "Şehir vergisi toplam fiyata dahildir.",
            it: "La tassa di soggiorno è inclusa nel prezzo totale.",
            fr: "La taxe de séjour est incluse dans le prix total.",
            es: "El impuesto municipal está incluido en el precio total."
          })}
        </p>
      </section>

      {/* 6. Check-in/out */}
      <section>
        <h3 className="text-lg font-sans font-semibold text-foreground mb-3">
          {t({
            de: "6. Check-in & Check-out",
            en: "6. Check-in & Check-out",
            sq: "6. Check-in & Check-out",
            tr: "6. Giriş & Çıkış",
            it: "6. Check-in & Check-out",
            fr: "6. Arrivée & Départ",
            es: "6. Check-in & Check-out"
          })}
        </h3>

        <p className="mb-1">
          {t({
            de: "Check-in: ab 14:00 Uhr",
            en: "Check-in: after 14:00",
            sq: "Check-in: pas orës 14:00",
            tr: "Giriş: 14:00 sonrası",
            it: "Check-in: dopo le 14:00",
            fr: "Arrivée : après 14h00",
            es: "Check-in: después de las 14:00"
          })}
        </p>

        <p className="mb-1">
          {t({
            de: "Check-out: bis 10:00 Uhr",
            en: "Check-out: before 10:00",
            sq: "Check-out: para orës 10:00",
            tr: "Çıkış: 10:00'dan önce",
            it: "Check-out: entro le 10:00",
            fr: "Départ : avant 10h00",
            es: "Check-out: antes de las 10:00"
          })}
        </p>

        <p>
          {t({
            de: "Self Check-in über Schlüsselsafe (Lockbox).",
            en: "Self check-in via lockbox.",
            sq: "Self check-in përmes kutisë së çelësave.",
            tr: "Anahtar kutusu ile self check-in.",
            it: "Self check-in tramite cassetta di sicurezza.",
            fr: "Self check-in via boîte à clés.",
            es: "Self check-in mediante caja de llaves."
          })}
        </p>
      </section>

      {/* 7. AGB Link */}
      <section>
        <h3 className="text-lg font-sans font-semibold text-foreground mb-3">
          {t({
            de: "7. Weitere Informationen",
            en: "7. Additional Information",
            sq: "7. Informacione shtesë",
            tr: "7. Ek bilgiler",
            it: "7. Informazioni aggiuntive",
            fr: "7. Informations supplémentaires",
            es: "7. Información adicional"
          })}
        </h3>

        <p>
          {t({
            de: "Die vollständigen rechtlichen Bedingungen finden Sie in unseren",
            en: "For full legal details, please refer to our",
            sq: "Për detaje të plota ligjore, ju lutemi referojuni",
            tr: "Tüm yasal detaylar için lütfen bakınız:",
            it: "Per tutti i dettagli legali, consultare le nostre",
            fr: "Pour tous les détails juridiques, veuillez consulter nos",
            es: "Para todos los detalles legales, consulte nuestros"
          })}{" "}
          <Link to={`${langPrefix}/agb`} className="text-primary hover:underline">
            {t({
              de: "AGB",
              en: "Terms & Conditions",
              sq: "Kushtet",
              tr: "Şartlar",
              it: "Termini",
              fr: "Conditions générales",
              es: "Términos y condiciones"
            })}
          </Link>
          .
        </p>
      </section>
    </div>
  );
}
