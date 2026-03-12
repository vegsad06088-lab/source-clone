import { useI18n } from "@/lib/i18n";

export default function CookiePolicy() {
  const { t } = useI18n();

  return (
    <div className="pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-serif font-bold text-foreground mb-4">
          {t({ de: "Cookie-Richtlinie", en: "Cookie Policy" })}
        </h1>

        <p className="text-muted-foreground mb-8">
          {t({
            de: "Hier erklären wir, welche Cookies wir verwenden, warum wir sie einsetzen und wie du deine Einstellungen verwalten kannst.",
            en: "Here we explain which cookies we use, why we use them, and how you can manage your settings.",
          })}
        </p>

        <div className="space-y-8 text-sm text-muted-foreground leading-relaxed">

          {/* 1. What are cookies */}
          <section>
            <h2 className="text-lg font-sans font-semibold text-foreground mb-2">
              {t({ de: "1. Was sind Cookies?", en: "1. What are cookies?" })}
            </h2>
            <p>
              {t({
                de: "Cookies sind kleine Textdateien, die auf deinem Gerät gespeichert werden. Sie helfen uns, die Website funktionsfähig zu halten und dein Nutzungserlebnis zu verbessern.",
                en: "Cookies are small text files stored on your device. They help us keep the website functional and improve your user experience.",
              })}
            </p>
          </section>

          {/* 2. Types of cookies */}
          <section>
            <h2 className="text-lg font-sans font-semibold text-foreground mb-2">
              {t({ de: "2. Welche Cookies verwenden wir?", en: "2. Which cookies do we use?" })}
            </h2>

            <h3 className="font-semibold text-foreground mb-1">
              {t({ de: "a) Notwendige Cookies", en: "a) Essential cookies" })}
            </h3>
            <p className="mb-3">
              {t({
                de: "Diese Cookies sind technisch erforderlich, damit die Website funktioniert. Sie können nicht deaktiviert werden.",
                en: "These cookies are technically required for the website to function. They cannot be disabled.",
              })}
            </p>

            <h3 className="font-semibold text-foreground mb-1">
              {t({ de: "b) Analyse-Cookies", en: "b) Analytics cookies" })}
            </h3>
            <p className="mb-3">
              {t({
                de: "Diese Cookies helfen uns zu verstehen, wie Besucher unsere Website nutzen. Die Daten werden anonym ausgewertet.",
                en: "These cookies help us understand how visitors use our website. The data is evaluated anonymously.",
              })}
            </p>

            <h3 className="font-semibold text-foreground mb-1">
              {t({ de: "c) Marketing-Cookies", en: "c) Marketing cookies" })}
            </h3>
            <p className="mb-3">
              {t({
                de: "Marketing-Cookies ermöglichen es uns, dir relevante Inhalte und Angebote anzuzeigen. Diese können von Drittanbietern gesetzt werden.",
                en: "Marketing cookies allow us to show you relevant content and offers. These may be set by third parties.",
              })}
            </p>

            <h3 className="font-semibold text-foreground mb-1">
              {t({ de: "d) Drittanbieter-Cookies (z.B. Smoobu)", en: "d) Third-party cookies (e.g. Smoobu)" })}
            </h3>
            <p>
              {t({
                de: "Für unsere Buchungsfunktionen nutzen wir externe Dienste wie Smoobu. Diese Anbieter können eigene Cookies setzen.",
                en: "For our booking functions we use external services such as Smoobu. These providers may set their own cookies.",
              })}
            </p>
          </section>

          {/* 3. Legal basis */}
          <section>
            <h2 className="text-lg font-sans font-semibold text-foreground mb-2">
              {t({ de: "3. Rechtsgrundlage", en: "3. Legal basis" })}
            </h2>
            <p>
              {t({
                de: "Notwendige Cookies basieren auf unserem berechtigten Interesse (Art. 6 Abs. 1 lit. f DSGVO). Analyse- und Marketing-Cookies verwenden wir nur mit deiner Einwilligung (Art. 6 Abs. 1 lit. a DSGVO).",
                en: "Essential cookies are based on our legitimate interest (Art. 6(1)(f) GDPR). Analytics and marketing cookies are used only with your consent (Art. 6(1)(a) GDPR).",
              })}
            </p>
          </section>

          {/* 4. Change settings */}
          <section>
            <h2 className="text-lg font-sans font-semibold text-foreground mb-2">
              {t({ de: "4. Cookie-Einstellungen ändern", en: "4. Change cookie settings" })}
            </h2>
            <p>
              {t({
                de: "Du kannst deine Cookie-Einstellungen jederzeit über das Cookie-Banner anpassen. Wenn es nicht sichtbar ist, lösche die Cookies in deinem Browser, um die Auswahl erneut angezeigt zu bekommen.",
                en: "You can adjust your cookie settings at any time via the cookie banner. If it is not visible, delete the cookies in your browser to see the selection again.",
              })}
            </p>
          </section>

          {/* 5. Contact */}
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
