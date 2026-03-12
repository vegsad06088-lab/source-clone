import { useI18n } from "@/lib/i18n";

export default function BookingConditionsContent() {
  const { t } = useI18n();

  return (
    <div className="h-full overflow-y-auto pr-2">
      <h2 className="text-2xl font-serif font-bold mb-4">
        {t({
          de: "Buchungsbedingungen",
          en: "Booking Conditions",
          sq: "Kushtet e rezervimit",
          tr: "Rezervasyon Şartları",
          it: "Condizioni di prenotazione",
          fr: "Conditions de réservation",
          es: "Condiciones de reserva"
        })}
      </h2>

      <p className="text-muted-foreground text-sm leading-relaxed mb-4">
        {t({
          de: "Hier stehen deine Buchungsbedingungen. Du kannst beliebig viele Sprachen hinzufügen.",
          en: "Here are your booking conditions. You can add as many languages as you want.",
          sq: "Këtu janë kushtet e rezervimit. Mund të shtosh sa gjuhë të duash.",
          tr: "Burada rezervasyon şartlarınız yer alır. İstediğiniz kadar dil ekleyebilirsiniz.",
          it: "Qui ci sono le condizioni di prenotazione. Puoi aggiungere tutte le lingue che vuoi.",
          fr: "Voici vos conditions de réservation. Vous pouvez ajouter autant de langues que vous voulez.",
          es: "Aquí están sus condiciones de reserva. Puede añadir tantos idiomas como desee."
        })}
      </p>

      <p className="text-muted-foreground text-sm leading-relaxed">
        {t({
          de: "Füge hier deinen echten Text ein.",
          en: "Insert your real text here.",
          sq: "Vendos tekstin tënd këtu.",
          tr: "Gerçek metninizi buraya ekleyin.",
          it: "Inserisci qui il tuo testo reale.",
          fr: "Insérez votre texte réel ici.",
          es: "Inserte su texto real aquí."
        })}
      </p>
    </div>
  );
}
