import { Link } from "react-router-dom";
import { useI18n } from "@/lib/i18n";

interface ApartmentCardProps {
  id: string;
  name: string;
  image: string;
  description: { de: string; en: string };
  persons: string;
  beds: { de: string; en: string };
  price: number;
}

export default function ApartmentCard({ id, name, image, description, persons, beds, price }: ApartmentCardProps) {
  const { t, langPrefix } = useI18n();

  return (
    <Link
      to={`${langPrefix}/${id}`}
      className="group block rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-smooth hover:-translate-y-1"
    >
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-smooth group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <div className="p-6 bg-background">
        <h3 className="text-xl font-serif font-semibold text-foreground mb-2">{name}</h3>
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{t(description)}</p>
        <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
          <span className="flex items-center gap-1">👤 {persons} {t({ de: "Personen", en: "Persons" })}</span>
          <span className="flex items-center gap-1">🛏️ {t(beds)}</span>
        </div>
        <div className="flex items-end justify-between">
          <div>
            <span className="text-sm text-muted-foreground">{t({ de: "ab", en: "from" })}</span>
            <span className="text-xl font-semibold text-foreground ml-1">€{price}</span>
            <span className="text-sm text-muted-foreground">/{t({ de: "Nacht", en: "Night" })}</span>
          </div>
          <span className="text-sm font-medium text-primary group-hover:underline">
            {t({ de: "Details ansehen", en: "View details" })} →
          </span>
        </div>
      </div>
    </Link>
  );
}
