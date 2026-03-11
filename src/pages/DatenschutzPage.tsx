import { useI18n } from "@/lib/i18n";

export default function DatenschutzPage() {
  const { t } = useI18n();

  return (
    <div className="pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-serif font-bold text-foreground mb-4">
          {t({ de: "Datenschutzerklärung", en: "Privacy Policy" })}
        </h1>
        <p className="text-muted-foreground mb-8">
          {t({ de: "Unser Engagement für Ihre Privatsphäre und Datensicherheit", en: "Our commitment to your privacy and data security" })}
        </p>

        <div className="prose prose-slate max-w-none text-muted-foreground text-sm leading-relaxed space-y-6">
          <section>
            <h2 className="text-xl font-serif font-bold text-foreground">{t({ de: "Präambel", en: "Preamble" })}</h2>
            <p>{t({
              de: "Mit der folgenden Datenschutzerklärung möchten wir Sie darüber aufklären, welche Arten Ihrer personenbezogenen Daten (nachfolgend auch kurz als \"Daten\" bezeichnet) wir zu welchen Zwecken und in welchem Umfang verarbeiten. Die Datenschutzerklärung gilt für alle von uns durchgeführten Verarbeitungen personenbezogener Daten, sowohl im Rahmen der Erbringung unserer Leistungen als auch insbesondere auf unseren Webseiten, in mobilen Applikationen sowie innerhalb externer Onlinepräsenzen, wie z. B. unserer Social-Media-Profile.",
              en: "With the following privacy policy, we would like to inform you about the types of personal data (hereinafter also referred to as \"data\") we process, for what purposes and to what extent. The privacy policy applies to all processing of personal data carried out by us, both in the context of providing our services and in particular on our websites, mobile applications and external online presences."
            })}</p>
            <p>{t({ de: "Stand: März 2026", en: "Last updated: March 2026" })}</p>
          </section>

          <section>
            <h2 className="text-xl font-serif font-bold text-foreground">{t({ de: "Verantwortlicher", en: "Controller" })}</h2>
            <p>Christine Führer GmbH<br />Absberggasse 6<br />1100 Wien - AT</p>
            <p>E-Mail: <a href="mailto:info@ap-zur-quelle.at" className="text-primary hover:underline">info@ap-zur-quelle.at</a></p>
            <p>Impressum: <a href="/impressum" className="text-primary hover:underline">ap-zur-quelle.at/impressum</a></p>
          </section>

          <section>
            <h2 className="text-xl font-serif font-bold text-foreground">{t({ de: "Übersicht der Verarbeitungen", en: "Overview of Processing" })}</h2>
            <h3 className="text-lg font-sans font-semibold text-foreground">{t({ de: "Arten der verarbeiteten Daten", en: "Types of Data Processed" })}</h3>
            <ul className="list-disc pl-5">
              <li>{t({ de: "Bestandsdaten", en: "Master data" })}</li>
              <li>{t({ de: "Kontaktdaten", en: "Contact data" })}</li>
              <li>{t({ de: "Inhaltsdaten", en: "Content data" })}</li>
              <li>{t({ de: "Nutzungsdaten", en: "Usage data" })}</li>
              <li>{t({ de: "Meta-, Kommunikations- und Verfahrensdaten", en: "Meta, communication and process data" })}</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-serif font-bold text-foreground">{t({ de: "Einsatz von Cookies", en: "Use of Cookies" })}</h2>
            <p>{t({
              de: "Cookies sind kleine Textdateien bzw. sonstige Speichervermerke, die Informationen auf Endgeräten speichern und Informationen aus den Endgeräten auslesen. Wir setzen Cookies ein, um die grundlegende Funktionsfähigkeit unserer Website zu gewährleisten (notwendige Cookies), sowie optional Analyse- und Marketing-Cookies. Sie können Ihre Einwilligung jederzeit über unseren Cookie-Banner verwalten.",
              en: "Cookies are small text files or other storage notes that store information on end devices and read information from end devices. We use cookies to ensure the basic functionality of our website (necessary cookies), as well as optional analytics and marketing cookies. You can manage your consent at any time via our cookie banner."
            })}</p>
          </section>

          <section>
            <h2 className="text-xl font-serif font-bold text-foreground">{t({ de: "Buchungsverwaltung über Smoobu", en: "Booking Management via Smoobu" })}</h2>
            <p>{t({
              de: "Zur Abwicklung von Buchungen nutzen wir die Software Smoobu (Smoobu GmbH, Wichertstr. 16, 10439 Berlin). Wenn Sie eine Buchung vornehmen, werden Ihre Daten (Name, Kontaktdaten, Buchungsdaten, Zahlungsinformationen) an Smoobu weitergegeben. Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO (Vertragserfüllung). Weitere Informationen finden Sie in der Datenschutzerklärung von Smoobu unter https://www.smoobu.com/de/datenschutz/.",
              en: "For booking management, we use the software Smoobu (Smoobu GmbH, Wichertstr. 16, 10439 Berlin, Germany). When you make a booking, your data (name, contact details, booking data, payment information) will be shared with Smoobu. Processing is based on Art. 6(1)(b) GDPR (contract fulfillment). More information can be found in Smoobu's privacy policy at https://www.smoobu.com/en/privacy/."
            })}</p>
          </section>

          <section>
            <h2 className="text-xl font-serif font-bold text-foreground">{t({ de: "Hosting", en: "Hosting" })}</h2>
            <p>{t({
              de: "Diese Website wird gehostet von Lovable / Vercel. Die Hosting-Dienste dienen der Bereitstellung der folgenden Leistungen: Infrastruktur- und Plattformdienstleistungen, Rechenkapazität, Speicherplatz und Datenbankdienste. Wir haben einen Auftragsverarbeitungsvertrag (AVV) mit dem Hosting-Anbieter abgeschlossen.",
              en: "This website is hosted by Lovable / Vercel. The hosting services serve to provide the following: infrastructure and platform services, computing capacity, storage space and database services. We have concluded a data processing agreement (DPA) with the hosting provider."
            })}</p>
          </section>

          <section>
            <h2 className="text-xl font-serif font-bold text-foreground">{t({ de: "Rechte der betroffenen Personen", en: "Rights of Data Subjects" })}</h2>
            <p>{t({
              de: "Ihnen stehen als Betroffene nach der DSGVO verschiedene Rechte zu: Auskunftsrecht (Art. 15 DSGVO), Recht auf Berichtigung (Art. 16 DSGVO), Recht auf Löschung (Art. 17 DSGVO), Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO), Recht auf Datenübertragbarkeit (Art. 20 DSGVO), Widerspruchsrecht (Art. 21 DSGVO). Sie haben außerdem das Recht, sich bei einer Datenschutz-Aufsichtsbehörde über die Verarbeitung Ihrer personenbezogenen Daten durch uns zu beschweren.",
              en: "As a data subject, you have various rights under the GDPR: Right of access (Art. 15), Right to rectification (Art. 16), Right to erasure (Art. 17), Right to restriction of processing (Art. 18), Right to data portability (Art. 20), Right to object (Art. 21). You also have the right to lodge a complaint with a data protection supervisory authority."
            })}</p>
          </section>

          <section>
            <h2 className="text-xl font-serif font-bold text-foreground">{t({ de: "Nationale Datenschutzregelungen in Österreich", en: "National Data Protection Regulations in Austria" })}</h2>
            <p>{t({
              de: "Zusätzlich zu den Datenschutzregelungen der DSGVO gelten nationale Regelungen zum Datenschutz in Österreich. Hierzu gehört insbesondere das Bundesgesetz zum Schutz natürlicher Personen bei der Verarbeitung personenbezogener Daten (Datenschutzgesetz – DSG).",
              en: "In addition to the GDPR, national data protection regulations apply in Austria. This includes in particular the Federal Act on the Protection of Natural Persons with regard to the Processing of Personal Data (Data Protection Act – DSG)."
            })}</p>
          </section>

          <section>
            <h2 className="text-xl font-serif font-bold text-foreground">{t({ de: "Kontakt", en: "Contact" })}</h2>
            <p>{t({
              de: "Wenn Sie Fragen zum Datenschutz haben, kontaktieren Sie uns bitte unter:",
              en: "If you have questions about data protection, please contact us at:"
            })}</p>
            <p>Christine Führer GmbH<br />Absberggasse 6, 1100 Wien<br />E-Mail: <a href="mailto:info@ap-zur-quelle.at" className="text-primary hover:underline">info@ap-zur-quelle.at</a></p>
          </section>
        </div>
      </div>
    </div>
  );
}
