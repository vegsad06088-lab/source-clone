import { Link } from "react-router-dom";
import { useI18n } from "@/lib/i18n";
import { apartments, amenities } from "@/lib/data";
import { useState } from "react";
import Lightbox from "@/components/Lightbox";

// Swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export default function ApartmentDetailPage() {
  const { t, langPrefix } = useI18n();
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [expanded, setExpanded] = useState(false);
  const [bookingOpen, setBookingOpen] = useState(false);
  const [conditionsOpen, setConditionsOpen] = useState(false);


  const location = window.location.pathname;
  const slug = location.split("/").filter(Boolean).pop() || "";

  const apartment = apartments.find((a) => a.id === slug);

  if (!apartment) {
    return (
      <div className="pt-32 text-center">
        <h1 className="text-2xl font-serif">Apartment not found</h1>
        <Link
          to={`${langPrefix}/apartments`}
          className="text-primary hover:underline mt-4 inline-block"
        >
          {t({ de: "Zurück zu Apartments", en: "Back to Apartments" })}
        </Link>
      </div>
    );
  }

  // Load Smoobu widget dynamically
  const openBookingWidget = () => {
    setBookingOpen(true);

    setTimeout(() => {
      const script = document.createElement("script");
      script.src = "https://login.smoobu.com/js/Settings/BookingToolIframe.js";
      script.onload = () => {
        // @ts-ignore
        BookingToolIframe.initialize({
          url: "https://login.smoobu.com/en/booking-tool/iframe/1656615",
          baseUrl: "https://login.smoobu.com",
          target: "#apartmentIframeAll",
        });
      };
      document.body.appendChild(script);
    }, 50);
  };

  return (
    <div>
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[500px]">
        <div className="absolute inset-0">
          <img
            src={apartment.heroImage}
            alt={apartment.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/20 to-transparent" />
        </div>
        <div className="absolute bottom-0 left-0 right-0 z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
            <div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-background mb-3">
                {apartment.name}
              </h1>
              <p className="text-background/80 max-w-lg text-sm sm:text-base">
                {t(apartment.description)}
              </p>
            </div>

            {/* Booking Card */}
            <div className="bg-background rounded-2xl shadow-elevated p-6 min-w-[280px] lg:min-w-[320px]">
              <h3 className="text-lg font-semibold text-foreground font-sans">
                {apartment.name}
              </h3>
              <p className="text-sm text-muted-foreground mb-3">
                {apartment.persons} {t({ de: "Personen", en: "Persons" })}
              </p>
              <div className="border-t border-border pt-3 mb-4">
                <p className="text-sm text-muted-foreground">
                  {t({ de: "Ab", en: "From" })}
                </p>
                <p className="text-2xl font-bold text-foreground">
                  € {apartment.price}.00 EUR{" "}
                  <span className="text-sm font-normal text-muted-foreground">
                    /{t({ de: "Nacht", en: "Night" })}
                  </span>
                </p>
              </div>

              {/* NEW: Open booking modal */}
              <button
                onClick={openBookingWidget}
                className="w-full inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-primary-foreground bg-primary rounded-lg shadow-card hover:shadow-card-hover transition-smooth hover:-translate-y-[1px] active:translate-y-[1px] active:scale-[0.98]"
              >
                {t({ de: "Jetzt buchen!", en: "Book now!" })}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Info */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-wrap gap-3">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-card rounded-lg text-sm text-foreground shadow-card">
            👤 {apartment.persons} {t({ de: "Person", en: "Person" })}
          </span>
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-card rounded-lg text-sm text-foreground shadow-card">
            🛏️ {t(apartment.beds)}
          </span>
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-card rounded-lg text-sm text-foreground shadow-card">
            🏠 {t(apartment.rooms)}
          </span>
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-card rounded-lg text-sm text-foreground shadow-card">
            📐 {apartment.size}
          </span>
        </div>
      </section>

      {/* Description */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-6">
          {t(apartment.sectionTitle)}
        </h2>
        <div className="prose prose-slate max-w-none">
          {t(apartment.longDescription)
            .split("\n\n")
            .map((p, i) => (
              <p
                key={i}
                className="text-muted-foreground leading-relaxed mb-4"
              >
                {p}
              </p>
            ))}
        </div>
      </section>

      {/* Amenities */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-8">
          {t({ de: "Ausstattung", en: "Amenities" })}
        </h2>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
          {amenities.map((a, i) => (
            <div
              key={i}
              className="flex flex-col items-center gap-2 p-4 bg-card rounded-xl shadow-card text-center"
            >
              <span className="text-2xl">{a.icon}</span>
              <span className="text-xs font-medium text-foreground">
                {t(a.label)}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Gallery */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-8">
          {t({ de: "Galerie", en: "Gallery" })}
        </h2>

        {/* Expand / Collapse Button */}
        <button
          onClick={() => setExpanded(!expanded)}
          className="flex items-center gap-2 text-primary font-medium mb-6"
        >
          {expanded
            ? t({ de: "▲ Weniger anzeigen", en: "▲ Show less" })
            : t({ de: "▼ Alle Bilder anzeigen", en: "▼ Show all images" })}
        </button>

        {/* Collapsed: Swiper Carousel */}
        {!expanded && (
          <Swiper
            modules={[Navigation]}
            navigation
            spaceBetween={16}
            slidesPerView={1.2}
            breakpoints={{
              640: { slidesPerView: 2.2 },
              1024: { slidesPerView: 3.2 },
            }}
            className="w-full"
          >
            {apartment.gallery.map((img, i) => (
              <SwiperSlide key={i}>
                <div
                  className="aspect-[4/3] rounded-xl overflow-hidden shadow-card cursor-pointer hover:shadow-card-hover transition-smooth"
                  onClick={() => setLightboxIndex(i)}
                >
                  <img
                    src={img}
                    alt={`${apartment.name} ${i + 1}`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}

        {/* Expanded: Full Grid */}
        {expanded && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {apartment.gallery.map((img, i) => (
              <div
                key={i}
                className="aspect-[4/3] rounded-xl overflow-hidden shadow-card cursor-pointer hover:shadow-card-hover transition-smooth"
                onClick={() => setLightboxIndex(i)}
              >
                <img
                  src={img}
                  alt={`${apartment.name} ${i + 1}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <Lightbox
          images={apartment.gallery}
          currentIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onNavigate={setLightboxIndex}
          altPrefix={apartment.name}
        />
      )}

      {/* Booking Modal */}
      {bookingOpen && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-background rounded-2xl shadow-elevated w-full max-w-2xl relative max-h-[90vh] overflow-y-auto p-6">

            {/* Close button */}
            <button
              onClick={() => setBookingOpen(false)}
              className="absolute top-3 right-3 text-foreground hover:text-primary text-xl"
            >
              ✕
            </button>

            <h2 className="text-xl font-semibold mb-4">
              {t({ de: "Jetzt buchen", en: "Book now" })}
            </h2>

            {/* Smoobu widget container */}
            <div id="apartmentIframeAll"></div>
            <p
              className="text-center mt-4 text-sm text-primary underline cursor-pointer"
              onClick={() => setConditionsOpen(true)}
            >
              {t({ de: "Buchungsbedingungen anzeigen", en: "View Booking Conditions" })}
            </p>
          </div>
        </div>
      )}

      {/* Booking Conditions */}
      {conditionsOpen && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl shadow-xl max-w-3xl w-full h-[80vh] p-6 relative overflow-hidden">
      
            <button
              onClick={() => setConditionsOpen(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              ✕
            </button>
      
            <h2 className="text-2xl font-serif font-bold mb-4">
              {t({ de: "Buchungsbedingungen", en: "Booking Conditions" })}
            </h2>
      
            <iframe
              src={`${window.location.origin}/index.html?route=${langPrefix}/booking-conditions`}
              className="w-full h-full border-0 rounded-lg"
            />
          </div>
        </div>
      )}

      {/* Sticky Mobile Booking */}
      <div className="fixed bottom-0 left-0 right-0 lg:hidden bg-background border-t border-border p-4 z-40">
        <div className="flex items-center justify-between">
          <div>
            <span className="text-sm text-muted-foreground">
              {t({ de: "Ab", en: "From" })}
            </span>
            <span className="text-lg font-bold text-foreground ml-1">
              €{apartment.price}
            </span>
            <span className="text-sm text-muted-foreground">
              /{t({ de: "Nacht", en: "Night" })}
            </span>
          </div>

          {/* Mobile booking button */}
          <button
            onClick={openBookingWidget}
            className="px-6 py-2.5 text-sm font-medium text-primary-foreground bg-primary rounded-lg shadow-card transition-smooth"
          >
            {t({ de: "Jetzt buchen!", en: "Book now!" })}
          </button>
        </div>
      </div>
    </div>
  );
}
