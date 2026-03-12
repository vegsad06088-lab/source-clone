import { useI18n } from "@/lib/i18n";
import { apartments } from "@/lib/data";
import ApartmentCard from "@/components/ApartmentCard";
import PromoBanner from "@/components/PromoBanner";

export default function ApartmentsPage() {
  const { t } = useI18n();

  return (
    <div>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center">
        <div className="absolute inset-0">
          <img src="/images/65293b8eedb9c49b8bc71ecd_bad.avif" alt="Apartments" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-foreground/50" />
        </div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-background mb-4">
            Apartments
          </h1>
          <p className="text-lg text-background/90 max-w-2xl mx-auto">
            {t({
              de: "Entdecke Dein perfektes Zuhause auf Zeit inmitten Wiens. Stil, Komfort und Individualität in jedem Raum.",
              en: "Discover your perfect temporary home in the middle of Vienna. Style, comfort and individuality in every room.",
            })}
          </p>
        </div>
      </section>

      <PromoBanner />

      {/* Apartment Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {apartments.map((apt) => (
            <ApartmentCard key={apt.id} {...apt} />
          ))}
        </div>
      </section>
    </div>
  );
}
