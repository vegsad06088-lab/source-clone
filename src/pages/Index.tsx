import { Link } from "react-router-dom";
import { useI18n } from "@/lib/i18n";
import { apartments, features, reviews } from "@/lib/data";
import ApartmentCard from "@/components/ApartmentCard";
import PromoBanner from "@/components/PromoBanner";
import FAQSection from "@/components/FAQSection";
import { useEffect } from "react";

export default function HomePage() {
  const { t, langPrefix } = useI18n();

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://login.smoobu.com/js/Settings/BookingToolIframe.js";
    script.async = true;

    script.onload = () => {
      if (window.BookingToolIframe) {
        window.BookingToolIframe.initialize({
          url: "https://login.smoobu.com/en/booking-tool/iframe/1656615?newTabAfterSearch=true",
          baseUrl: "https://login.smoobu.com",
          target: "#apartmentIframeAll",
        });
      }
    };

    document.body.appendChild(script);
  }, []);

  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center">
        <div className="absolute inset-0">
          <img
            src="/images/652938d0b1ddde3e7ecc4cac_151351.avif"
            alt="Apartments zur Quelle"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-foreground/40" />
        </div>

        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-background mb-6">
            {t({
              de: "Modernes Wohnen im Herzen Wiens",
              en: "Modern living in the heart of Vienna",
            })}
          </h1>

          <p className="text-lg sm:text-xl text-background/90 mb-8 max-w-2xl mx-auto">
            {t({
              de: "Entdecke neu definierten Komfort in unseren nachhaltigen Apartments – Dein urbanes, stilvolles Zuhause für jeden Aufenthalt in Wien!",
              en: "Discover newly defined comfort in our sustainable apartments — your urban, stylish home for every stay in Vienna!",
            })}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to={`${langPrefix}/apartments`}
              className="inline-flex items-center justify-center px-8 py-3.5 text-base font-medium text-primary-foreground bg-primary rounded-lg shadow-card hover:shadow-card-hover transition-smooth hover:-translate-y-[1px]"
            >
              {t({ de: "Jetzt buchen!", en: "Book now!" })}
            </Link>

            <Link
              to={`${langPrefix}/about`}
              className="inline-flex items-center justify-center px-8 py-3.5 text-base font-medium text-background bg-background/20 backdrop-blur-sm border border-background/30 rounded-lg transition-smooth hover:bg-background/30"
            >
              {t({ de: "Über uns", en: "About us" })}
            </Link>
          </div>
        </div>
      </section>

      {/* Booking Widget */}
      <section className="bg-card py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground text-center mb-4">
            {t({
              de: "Finde Dein perfektes Apartment",
              en: "Find your perfect apartment",
            })}
          </h2>

          <p className="text-center text-muted-foreground mb-4 max-w-2xl mx-auto">
            {t({
              de: "Wähle Dein Reisedatum und finde verfügbare Apartments.",
              en: "Choose your travel dates and find available apartments.",
            })}
          </p>

          <p className="text-center text-sm text-yellow-600 font-medium mb-6">
            {t({
              de: "Hinweis: Der Mindestaufenthalt beträgt 2 Nächte.",
              en: "Note: Minimum stay is 2 nights.",
            })}
          </p>

          <p className="text-center mb-6">
            <Link
              to={`${langPrefix}/booking-conditions`}
              className="text-primary underline hover:text-primary/80 transition-smooth"
            >
              {t({
                de: "Buchungsbedingungen anzeigen",
                en: "View Booking Conditions",
              })}
            </Link>
          </p>

          <div className="bg-background rounded-2xl shadow-card overflow-hidden">
            <div id="apartmentIframeAll" style={{ minHeight: "400px" }} />
          </div>
        </div>
      </section>

      <PromoBanner />

      {/* Apartments */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground text-center mb-12">
          {t({
            de: "Entdecke unsere Apartments",
            en: "Discover our apartments",
          })}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {apartments.map((apt) => (
            <ApartmentCard key={apt.id} {...apt} />
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground text-center mb-4">
          {t({
            de: "Genieße Top-Ausstattung in jedem Raum",
            en: "Enjoy top amenities in every room",
          })}
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          {t({
            de: "Erlebe den Komfort moderner und durchdachter Features, designed für Deinen perfekten Aufenthalt.",
            en: "Experience the comfort of modern and thoughtful features, designed for your perfect stay.",
          })}
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {features.map((f, i) => (
            <div key={i} className="text-center group">
              <div className="flex items-center justify-center mb-3">
                <img
                  src={f.image}
                  alt={t(f.title)}
                  className="w-10 h-10 sm:w-12 sm:h-12 object-contain transition-transform duration-300 group-hover:scale-110"
                  loading="lazy"
                />
              </div>

              <h3 className="text-sm font-semibold text-foreground font-sans">
                {t(f.title)}
              </h3>

              <p className="text-xs text-muted-foreground mt-1">
                {t(f.desc)}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Sustainability CTA */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
            {t({
              de: "Nachhaltig Wohnen, stilvoller Aufenthalt.",
              en: "Sustainable living, stylish stay.",
            })}
          </h2>

          <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            {t({
              de: "Erlebe Komfort mit Verantwortungsbewusstsein. Unsere Apartments setzen auf erneuerbare Energien und nachhaltige Praktiken.",
              en: "Experience comfort with responsibility. Our apartments rely on renewable energy and sustainable practices.",
            })}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to={`${langPrefix}/apartments`}
              className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium bg-background text-foreground rounded-lg transition-smooth hover:opacity-90"
            >
              {t({ de: "Apartments entdecken", en: "Discover apartments" })}
            </Link>

            <Link
              to={`${langPrefix}/about`}
              className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-primary-foreground border border-primary-foreground/30 rounded-lg transition-smooth hover:bg-primary-foreground/10"
            >
              {t({ de: "Über uns", en: "About us" })}
            </Link>
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground text-center mb-4">
          {t({
            de: "Warum Dein Aufenthalt bei uns besonders ist.",
            en: "Why your stay with us is special.",
          })}
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
          {t({
            de: "Erlebe echte Gastfreundschaft! Genieße individuellen Komfort und herzlichen Service in unseren nachhaltigen Apartments in Wien.",
            en: "Experience true hospitality! Enjoy individual comfort and warm service in our sustainable apartments in Vienna.",
          })}
        </p>

        <p className="text-center text-muted-foreground max-w-3xl mx-auto">
          {t({
            de: "Bei uns lebst Du grün! Mit Erdwärme und zukünftiger Solarenergie bieten wir Dir einen Aufenthalt, der nicht nur gemütlich, sondern auch umweltfreundlich ist.",
            en: "Live green with us! With geothermal energy and future solar power, we offer you a stay that is not only cozy but also environmentally friendly.",
          })}
        </p>
      </section>

      {/* Reviews */}
      <section className="bg-card py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground text-center mb-4">
            {t({
              de: "Stimmen unserer Gäste",
              en: "What our guests say",
            })}
          </h2>

          <p className="text-center text-muted-foreground mb-12">
            {t({
              de: "Entdecke, warum Besucher aus aller Welt unsere Apartments lieben!",
              en: "Discover why visitors from around the world love our apartments!",
            })}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((r, i) => (
              <div key={i} className="bg-background p-6 rounded-2xl shadow-card">
                <h3 className="text-lg font-semibold text-foreground mb-3 font-sans">
                  "{t(r.text)}"
                </h3>

                <p className="text-sm text-muted-foreground mb-4">
                  {t(r.quote)}
                </p>

                <div>
                  <p className="text-sm font-medium text-foreground">
                    {r.name}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {t(r.location)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQSection />

      {/* Final CTA */}
      <section className="max-w-4xl mx-auto px-4 py-20 text-center">
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to={`${langPrefix}/apartments`}
            className="inline-flex items-center justify-center px-8 py-3.5 text-base font-medium text-primary-foreground bg-primary rounded-lg shadow-card hover:shadow-card-hover transition-smooth"
          >
            {t({ de: "Jetzt buchen!", en: "Book now!" })}
          </Link>

          <Link
            to={`${langPrefix}/about`}
            className="inline-flex items-center justify-center px-8 py-3.5 text-base font-medium text-foreground bg-muted rounded-lg transition-smooth hover:bg-muted/80"
          >
            {t({ de: "Über uns", en: "About us" })}
          </Link>
        </div>
      </section>
    </div>
  );
}
