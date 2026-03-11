import { useI18n } from "@/lib/i18n";

export default function ImpressumPage() {
  const { t } = useI18n();

  return (
    <div className="pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-serif font-bold text-foreground mb-4">Impressum</h1>
        <p className="text-muted-foreground mb-8">
          {t({
            de: "Alle wichtigen rechtlichen Informationen und Kontaktdetails zu Apartments zur Quelle findest Du hier. Wir stehen für Transparenz und Klarheit.",
            en: "All important legal information and contact details for Apartments zur Quelle can be found here. We stand for transparency and clarity.",
          })}
        </p>

        <div className="space-y-8 text-sm text-muted-foreground leading-relaxed">
          <section>
            <h3 className="text-lg font-sans font-semibold text-foreground mb-3">{t({ de: "Kontakt", en: "Contact" })}</h3>
            <p className="mb-1">Apartments zur Quelle</p>
            <p className="mb-1">Christine Führer GmbH</p>
            <p className="mb-1">Absberggasse 6</p>
            <p className="mb-3">1100 Wien</p>
            <p className="mb-1">Tel.: <a href="tel:+43676842287105" className="text-primary hover:underline">+43 676 842 287 105</a></p>
            <p>E-Mail: <a href="mailto:info@ap-zur-quelle.at" className="text-primary hover:underline">info@ap-zur-quelle.at</a></p>
          </section>

          <section>
            <h3 className="text-lg font-sans font-semibold text-foreground mb-3">{t({ de: "Auskunft", en: "Information" })}</h3>
            <p className="mb-1">Christine Führer GmbH</p>
            <p className="mb-1">{t({ de: "Gastgewerbe in der Betriebsart Beherbergung von Gästen in Ferienwohnungen", en: "Hospitality industry in the operation of accommodation of guests in holiday apartments" })}</p>
            <p className="mb-1">UID-Nr: ATU67808903</p>
            <p className="mb-1">{t({ de: "Firmenbuchnummer", en: "Company register number" })}: 389718s</p>
            <p className="mb-1">{t({ de: "Firmenbuchgericht", en: "Company register court" })}: Handelsgericht Wien</p>
            <p className="mb-1">{t({ de: "Firmensitz", en: "Registered office" })}: Absberggasse 6, 1100 Wien, Austria</p>
            <p className="mb-1">{t({ de: "Mitglied bei", en: "Member of" })}: Wirtschaftskammer Wien</p>
            <p>{t({ de: "Berufsgruppe", en: "Professional group" })}: Gastgewerbe</p>
          </section>

          <section>
            <h3 className="text-lg font-sans font-semibold text-foreground mb-3">Design & {t({ de: "Programmierung", en: "Programming" })}</h3>
            <p>ap-zur-quelle Team</p>
            <p>E-Mail: <a href="mailto:info@ap-zur-quelle.at" className="text-primary hover:underline">info@ap-zur-quelle.at</a></p>
          </section>

          <section>
            <h3 className="text-lg font-sans font-semibold text-foreground mb-3">{t({ de: "Haftung und Datenschutz", en: "Liability and Data Protection" })}</h3>
            <h4 className="font-semibold text-foreground mb-2">{t({ de: "1. Inhalt", en: "1. Content" })}</h4>
            <p className="mb-4">{t({
              de: "Die Inhalte dieser Homepage dienen ausschließlich zur Information. Die einzelnen Texte und Inhalte wurden nach bestem Wissen und Gewissen erstellt. Da es sich in Teilbereichen auch um Ratschläge handelt, kann für die objektive Richtigkeit, sowie für die Vollständigkeit der veröffentlichten Informationen keinerlei Gewähr übernommen werden.",
              en: "The content of this homepage is for information purposes only. The individual texts and content were created to the best of our knowledge and belief. Since some areas also contain advice, no guarantee can be given for the objective correctness or completeness of the published information."
            })}</p>
            <h4 className="font-semibold text-foreground mb-2">{t({ de: "2. Datenschutz", en: "2. Data Protection" })}</h4>
            <p className="mb-4">{t({
              de: "Angaben zum Datenschutz entnehmen Sie bitte unserer",
              en: "For data protection information, please see our"
            })} <a href="/datenschutz" className="text-primary hover:underline">{t({ de: "Datenschutzerklärung", en: "Privacy Policy" })}</a>.</p>
            <h4 className="font-semibold text-foreground mb-2">{t({ de: "3. Externe Links", en: "3. External Links" })}</h4>
            <p>{t({
              de: "Wir übernehmen keine Verantwortung für den Inhalt extern verlinkter Seiten. Diese Inhalte wurden zum Zeitpunkt der Linksetzung sorgfältig geprüft, allerdings ist eine kontinuierliche Überwachung der verlinkten Seiten nicht durchführbar.",
              en: "We assume no responsibility for the content of externally linked pages. This content was carefully checked at the time of linking, however continuous monitoring of linked pages is not feasible."
            })}</p>
          </section>

          <section>
            <h3 className="text-lg font-sans font-semibold text-foreground mb-3">{t({ de: "Online-Streitbeilegung", en: "Online Dispute Resolution" })}</h3>
            <p>{t({
              de: "Verbraucher haben die Möglichkeit, Beschwerden an die Online-Streitbeilegungsplattform der EU zu richten:",
              en: "Consumers have the option of submitting complaints to the EU's online dispute resolution platform:"
            })} <a href="http://ec.europa.eu/odr" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">http://ec.europa.eu/odr</a></p>
          </section>
        </div>
      </div>
    </div>
  );
}
