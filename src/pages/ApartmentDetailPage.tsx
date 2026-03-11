import { useParams, Link } from "react-router-dom";
import { useI18n } from "@/lib/i18n";
import { apartments, amenities } from "@/lib/data";
import { useState } from "react";

const SMOOBU_URL = "https://login.smoobu.com/en/booking-tool/widget/285782";

export default function ApartmentDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const { t, langPrefix } = useI18n();
  const [selectedImage, setSelectedImage] = useState(0);

  const apartment = apartments.find((a) => a.id === slug);

  if (!apartment) {
    return (
      <div className="pt-32 text-center">
        <h1 className="text-2xl font-serif">Apartment not found</h1>
        <Link to={`${langPrefix}/apartments`} className="text-primary hover:underline mt-4 inline-block">
          {t({ de: "Zurück zu Apartments", en: "Back to Apartments" })}
        </Link>
      </div>
    );
  }

  return (
    <div>
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[500px]">
        <div className="absolute inset-0">
          <img src={apartment.heroImage} alt={apartment.name} className="w-full h-full object-cover" />
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
              <h3 className="text-lg font-semibold text-foreground font-sans">{apartment.name}</h3>
              <p className="text-sm text-muted-foreground mb-3">{apartment.persons} {t({ de: "Personen", en: "Persons" })}</p>
              <div className="border-t border-border pt-3 mb-4">
                <p className="text-sm text-muted-foreground">{t({ de: "Ab", en: "From" })}</p>
                <p className="text-2xl font-bold text-foreground">€ {apartment.price}.00 EUR <span className="text-sm font-normal text-muted-foreground">/{t({ de: "Nacht", en: "Night" })}</span></p>
              </div>
              <a
                href={SMOOBU_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-primary-foreground bg-primary rounded-lg shadow-card hover:shadow-card-hover transition-smooth hover:-translate-y-[1px] active:translate-y-[1px] active:scale-[0.98]"
              >
                {t({ de: "Jetzt buchen!", en: "Book now!" })}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Info */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-wrap gap-3">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-card rounded-lg text-sm text-foreground shadow-card">👤 {apartment.persons} {t({ de: "Person", en: "Person" })}</span>
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-card rounded-lg text-sm text-foreground shadow-card">🛏️ {t(apartment.beds)}</span>
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-card rounded-lg text-sm text-foreground shadow-card">🏠 {t(apartment.rooms)}</span>
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-card rounded-lg text-sm text-foreground shadow-card">📐 {apartment.size}</span>
        </div>
      </section>

      {/* Description */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-6">
          {t(apartment.sectionTitle)}
        </h2>
        <div className="prose prose-slate max-w-none">
          {t(apartment.longDescription).split("\n\n").map((p, i) => (
            <p key={i} className="text-muted-foreground leading-relaxed mb-4">{p}</p>
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
            <div key={i} className="flex flex-col items-center gap-2 p-4 bg-card rounded-xl shadow-card text-center">
              <span className="text-2xl">{a.icon}</span>
              <span className="text-xs font-medium text-foreground">{t(a.label)}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Gallery */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-8">
          {t({ de: "Galerie", en: "Gallery" })}
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {apartment.gallery.map((img, i) => (
            <div
              key={i}
              className="aspect-[4/3] rounded-xl overflow-hidden shadow-card cursor-pointer hover:shadow-card-hover transition-smooth"
              onClick={() => setSelectedImage(i)}
            >
              <img src={img} alt={`${apartment.name} ${i + 1}`} className="w-full h-full object-cover" loading="lazy" />
            </div>
          ))}
        </div>
      </section>

      {/* Sticky Mobile Booking */}
      <div className="fixed bottom-0 left-0 right-0 lg:hidden bg-background border-t border-border p-4 z-40">
        <div className="flex items-center justify-between">
          <div>
            <span className="text-sm text-muted-foreground">{t({ de: "Ab", en: "From" })}</span>
            <span className="text-lg font-bold text-foreground ml-1">€{apartment.price}</span>
            <span className="text-sm text-muted-foreground">/{t({ de: "Nacht", en: "Night" })}</span>
          </div>
          <a
            href={SMOOBU_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2.5 text-sm font-medium text-primary-foreground bg-primary rounded-lg shadow-card transition-smooth"
          >
            {t({ de: "Jetzt buchen!", en: "Book now!" })}
          </a>
        </div>
      </div>
    </div>
  );
}
