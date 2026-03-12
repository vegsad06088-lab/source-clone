import { useI18n } from "@/lib/i18n";

export default function CookiePolicy() {
  const { t, langPrefix } = useI18n();

  return (
    <div className="pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-serif font-bold text-foreground mb-4">
          {t({ de: "Cookie-Richtlinie", en: "Cookie Policy" })}
        </h1>

        <p className="text-muted-foreground mb-8">
          {t({
            de: "In dieser Cookie-Richtlinie erklären wir, welche Arten von Cookies wir verwenden, zu welchen Zwecken und welche Wahlmöglichkeiten du hast.",
            en: "In this cookie policy we explain which types of cookies we use, for what purposes, and what choices you have.",
          })}
        </p>

        <div className="space-y-8 text-sm text-muted-foreground leading-relaxed">
          {/* 1. Was sind Cookies */}
          <section>
            <h2 className="text-lg font-sans font-semibold text-foreground mb-2">
              {t({ de: "1. Was sind Cookies?", en: "1. What are cookies?" })}
            </h2>
            <p>
              {t({
                de: "Cookies sind kleine Textdateien, die auf deinem Gerät gespeichert werden, wenn du unsere Website besuchst. Sie helfen uns, die Website funktionsfähig zu machen, sie zu verbessern und dir ein besseres Nutzungserlebnis zu bieten.",
                en: "Cookies are small text files stored on your device when you visit our website. They help us keep the site functional, improve it, and provide you with a better user experience.",
              })}
            </p>
          </section>

          {/* 2. Welche Cookies wir verwenden */}
          <section>
            <h2 className="text-lg font-sans font-semibold text-foreground mb-2">
              {t({ de: "2. Welche Cookies verwenden wir?", en: "2. Which cookies do we use?" })}
            </h2>

            <h3 className="font-semibold text-foreground mb-1">
              {t({ de: "a) Notwendige Cookies", en: "a) Essential cookies" })}
            </h3>
            <p className="mb-3">
              {t({
                de: "Diese Cookies sind für den Betrieb der Website unbedingt erforderlich. Ohne sie würde die Seite nicht korrekt funktionieren. Dazu gehören z.B. Sicherheitsfunktionen, Sprachauswahl oder das Laden grundlegender Inhalte.",
                en: "These cookies are strictly necessary for the operation of the website. Without them, the site would not function properly. This includes, for example, security features, language selection, or loading basic content.",
              })}
            </p>

            <h3 className="font-semibold text-foreground mb-1">
              {t({ de: "b) Analyse-Cookies", en: "b) Analytics cookies" })}
            </h3>
            <p className="mb-3">
              {t({
                de: "Diese Cookies helfen uns zu verstehen, wie Besucher unsere Website nutzen (z.B. welche Seiten am häufigsten besucht werden). Die gesammelten Daten werden anonym ausgewertet und dienen ausschließlich der Verbesserung unseres Angebots.",
                en: "These cookies help us understand how visitors use our website (e.g. which pages are visited most often). The collected data is evaluated anonymously and used solely to improve our services.",
              })}
            </p>

            <h3 className="font-semibold text-foreground mb-1">
              {t({ de: "c) Marketing-Cookies", en: "c) Marketing cookies" })}
            </h3>
            <p className="mb-3">
              {t({
                de: "Marketing-Cookies werden verwendet, um dir relevante Inhalte und Angebote anzuzeigen, z.B. über Partnerplattformen. Diese Cookies können von Drittanbietern gesetzt werden.",
                en: "Marketing cookies are used to show you relevant content and offers, for example via partner platforms. These cookies may be set by third parties.",
              })}
            </p>

            <h3 className="font-semibold text-foreground mb-1">
              {t({ de: "d) Drittanbieter-Cookies (z.B. Smoobu)", en: "d) Third-party cookies (e.g. Smoobu)" })}
            </h3>
            <p>
              {t({
                de: "Für unsere Buchungsfunktionen nutzen wir externe Dienste (z.B. Smoobu). Diese Anbieter können eigene Cookies setzen, um Buchungsprozesse, Verfügbarkeiten und technische Funktionen bereitzustellen. Details findest du in den Datenschutzbestimmungen des jeweiligen Anbieters.",
                en: "For our booking functions we use external services (e.g. Smoobu). These providers may set their own cookies to provide booking processes, availability and technical functions. For details, please refer to the privacy policies of the respective providers.",
              })}
            </p>
          </section>

          {/* 3. Rechtsgrundlage */}
          <section>
            <h2 className="text-lg font-sans font-semibold text-foreground mb-2">
              {t({ de: "3. Rechtsgrundlage", en: "3. Legal basis" })}
            </h2>
            <p>
              {t({
                de: "Die Verwendung notwendiger Cookies erfolgt auf Grundlage unseres berechtigten Interesses an einem sicheren und funktionsfähigen Betrieb der Website (Art. 6 Abs. 1 lit. f DSGVO). Die Verwendung von Analyse- und Marketing-Cookies erfolgt ausschließlich auf Grundlage deiner Einwilligung (Art. 6 Abs. 1 lit. a DSGVO), die du über unser Cookie-Banner erteilen oder verweigern kannst.",
                en: "The use of essential cookies is based on our legitimate interest in a secure and functional operation of the website (Art. 6(1)(f) GDPR). The use of analytics and marketing cookies is based solely on your consent (Art. 6(1)(a) GDPR), which you can give or refuse via our cookie banner.",
              })}
            </p>
          </section>

          {/* 4. Cookie-Einstellungen ändern */}
          <section>
            <h2 className="text-lg font-sans font-semibold text-foreground mb-2">
              {t({ de: "4. Cookie-Einstellungen ändern", en: "4. Change cookie settings" })}
            </h2>
            <p className="mb-3">
              {t({
                de: "Du kannst deine Cookie-Einstellungen jederzeit über das Cookie-Banner am unteren Bildschirmrand anpassen, sofern es eingeblendet ist. Falls das Banner nicht sichtbar ist, kannst du die in deinem Browser gespeicherten Cookies löschen. Beim nächsten Besuch unserer Website wirst du erneut nach deiner Einwilligung gefragt.",
                en: "You can adjust your cookie settings at any time via the cookie banner at the bottom of the screen, if it is displayed. If the banner is not visible, you can delete the cookies stored in your browser. On your next visit to our website, you will be asked for your consent again.",
              })}
            </p>
          </section>

          {/* 5. Kontakt */}
          <section>
            <h2 className="text-lg font-sans font-semibold text-foreground mb-2">
              {t({ de: "5. Kontakt", en: "5. Contact" })}
            </h2>
            <p className="mb-1">
              Apartments zur Quelle<br />
              Christine Führer GmbH<br />
              Absberggasse 6, 1100 Wien, Österreich
            </p>
            <p>
              E-Mail:{" "}
              <a href="mailto:info@ap-zur-quelle.at" className="text-primary hover:underline">
                info@ap-zur-quelle.at
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
