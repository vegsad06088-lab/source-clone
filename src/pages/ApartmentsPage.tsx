import { useI18n } from "@/lib/i18n";
import { apartments } from "@/lib/data";
import ApartmentCard from "@/components/ApartmentCard";
import PromoBanner from "@/components/PromoBanner";

export default function ApartmentsPage() {
  const { t } = useI18n();

  return (
    <div>
      {/* Hero */}
      <section 
        className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-700 to-gray-800"
        style={{
          backgroundImage: 'url(/images/65293b8eedb9c49b8bc71ecd_bad.avif)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <img 
          src="/images/65293b8eedb9c49b8bc71ecd_bad.avif" 
          alt="Apartments" 
          className="absolute inset-0 w-full h-full object-cover"
          onError={(e) => {
            console.error("Apartments hero image failed to load:", e);
            e.currentTarget.style.display = 'none';
          }}
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-white mb-4">
            Apartments
          </h1>
          <p className="text-lg text-background/90 max-w-2xl mx-auto">
            {t("apartments.hero.subtitle")}
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
