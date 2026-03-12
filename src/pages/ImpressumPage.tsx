import { useI18n } from "@/lib/i18n";

export default function ImpressumPage() {
  const { t } = useI18n();

  return (
  <div className="pt-32 pb-20">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-serif font-bold text-foreground mb-4">Impressum</h1>
      <p className="text-muted-foreground mb-8">
        {t("en.impressum.intro")}
      </p>

      <div className="space-y-8 text-sm text-muted-foreground leading-relaxed">
        {/* Kontakt */}
        <section>
          <h3 className="text-lg font-sans font-semibold text-foreground mb-3">
            {t("en.impressum.contact.title")}
          </h3>
          <p className="mb-1">Apartments zur Quelle</p>
          <p className="mb-1">Christine Führer GmbH</p>
          <p className="mb-1">Absberggasse 6</p>
          <p className="mb-3">1100 Wien, Österreich</p>
          <p className="mb-1">
            Tel.:{" "}
            <a href="tel:+43676842287105" className="text-primary hover:underline">
              +43 676 842 287 105
            </a>
          </p>
          <p>
            E-Mail:{" "}
            <a href="mailto:info@ap-zur-quelle.at" className="text-primary hover:underline">
              info@ap-zur-quelle.at
            </a>
          </p>
        </section>

        {/* Auskunft / Unternehmensdaten */}
        <section>
          <h3 className="text-lg font-sans font-semibold text-foreground mb-3">
            {t("en.impressum.info.title")}
          </h3>
          <p className="mb-1">Christine Führer GmbH</p>
          <p className="mb-1">
            {t("en.impressum.info.management")}
          </p>
          <p className="mb-1">
            {t("en.impressum.info.businessPurpose")}
          </p>
          <p className="mb-1">UID-Nr: ATU67808903</p>
          <p className="mb-1">
            {t("en.impressum.info.registrationNumber")}: 389718s
          </p>
          <p className="mb-1">
            {t("en.impressum.info.registrationCourt")}: Handelsgericht Wien
          </p>
          <p className="mb-1">
            {t("en.impressum.info.registeredOffice")}: Absberggasse 6, 1100 Wien, Austria
          </p>
          <p className="mb-1">
            {t("en.impressum.info.memberOf")}: Wirtschaftskammer Wien
          </p>
          <p className="mb-1">
            {t("en.impressum.info.professionalGroup")}: Gastgewerbe
          </p>
          <p>
            {t("en.impressum.info.mediaOwner")}
          </p>
        </section>

        {/* Design & Programmierung */}
        <section>
          <h3 className="text-lg font-sans font-semibold text-foreground mb-3">
            Design & {t("en.impressum.design")}
          </h3>
          <p>ap-zur-quelle Team</p>
          <p>
            E-Mail:{" "}
            <a href="mailto:info@ap-zur-quelle.at" className="text-primary hover:underline">
              info@ap-zur-quelle.at
            </a>
          </p>
        </section>

        {/* Haftung und Datenschutz */}
        <section>
          <h3 className="text-lg font-sans font-semibold text-foreground mb-3">
            {t("en.impressum.liability.title")}
          </h3>
          <h4 className="font-semibold text-foreground mb-2">
            {t("en.impressum.section1")}
          </h4>
          <p className="mb-4">
            {t("en.impressum.section1.text")}
          </p>
          <h4 className="font-semibold text-foreground mb-2">
            {t("en.impressum.section2")}
          </h4>
          <p className="mb-4">
            {t("en.impressum.section2.text")}{" "}
            <a href="/datenschutz" className="text-primary hover:underline">
              {t("en.impressum.section2.link")}
            </a>
            .
          </p>
          <h4 className="font-semibold text-foreground mb-2">
            {t("en.impressum.section3")}
          </h4>
          <p>
            {t("en.impressum.section3.text")}
          </p>
        </section>

        {/* Online-Streitbeilegung */}
        <section>
          <h3 className="text-lg font-sans font-semibold text-foreground mb-3">
            {t("en.impressum.odr.title")}
          </h3>
          <p>
            {t("en.impressum.odr.text")}{" "}
            <a
              href="http://ec.europa.eu/odr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              http://ec.europa.eu/odr
            </a>
          </p>
        </section>
      </div>
    </div>
  </div>
);

}
