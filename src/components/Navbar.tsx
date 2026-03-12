import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useI18n } from "@/lib/i18n";
import { LANGUAGE_PACK, Lang } from "@/lib/i18n";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const { lang, setLang, t, langPrefix } = useI18n();
  const location = useLocation();
  const pathname = location.pathname;

  const isActive = (path: string) => pathname === path;

  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { label: "Home", path: `${langPrefix}/` },
    { label: "Apartments", path: `${langPrefix}/apartments` },
    { label: t({ de: "Über uns", en: "About us" }), path: `${langPrefix}/about` },
    { label: t({ de: "Anleitungen", en: "Instructions" }), path: `${langPrefix}/anleitungen` },
    { label: t({ de: "Kontakt", en: "Contact" }), path: `${langPrefix}/contact` },
  ];

  const switchLang = (newLang: Lang) => {
    setLang(newLang);

    const parts = location.pathname.split("/");
    let rest = parts.slice(2).join("/");
    if (rest === "") rest = "";

    const newPath =
      newLang === "de"
        ? `/${rest}`
        : `/${newLang}/${rest}`;

    window.history.replaceState(null, "", newPath);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 pt-4">
      <div className="mx-auto max-w-7xl">
        <div className="flex items-center justify-between rounded-2xl bg-background/95 backdrop-blur-sm px-6 py-3 shadow-card">
          
          <Link to={`${langPrefix}/`} className="flex-shrink-0">
            <img
              src="/images/logo.avif"
              alt="Apartments zur Quelle"
              className="h-10 md:h-12"
            />
          </Link>

          <div className="hidden md:flex items-center gap-2">
            {LANGUAGE_PACK.map((lng) => (
              <button
                key={lng}
                onClick={() => switchLang(lng)}
                className={`px-2 py-1 text-sm font-medium transition-smooth rounded ${
                  lang === lng
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {lng.toUpperCase()}
              </button>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.path + item.label}
                to={item.path}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                  isActive(item.path)
                    ? "backdrop-blur-md bg-white/20 text-primary font-semibold shadow-lg"
                    : "text-foreground/80 hover:text-foreground"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="hidden md:block">
            <Link
              to={`${langPrefix}/apartments`}
              className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium text-primary-foreground bg-primary rounded-lg shadow-card hover:shadow-card-hover transition-smooth hover:-translate-y-[1px] active:translate-y-[1px] active:scale-[0.98]"
            >
              {t({ de: "Jetzt buchen!", en: "Book now!" })}
            </Link>
          </div>

          <button
            className="md:hidden p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {mobileOpen && (
          <div className="md:hidden mt-2 rounded-2xl bg-background/95 backdrop-blur-sm p-6 shadow-card animate-fade-in">
            
            <div className="flex gap-4 mb-4">
              {LANGUAGE_PACK.map((lng) => (
                <button
                  key={lng}
                  onClick={() => {
                    switchLang(lng);
                    setMobileOpen(false);
                  }}
                  className={`text-sm font-medium ${
                    lang === lng ? "text-primary" : "text-muted-foreground"
                  }`}
                >
                  {lng.toUpperCase()}
                </button>
              ))}
            </div>

            {navItems.map((item) => (
              <Link
                key={item.path + item.label}
                to={item.path}
                onClick={() => setMobileOpen(false)}
                className={`block py-3 text-base font-medium border-b border-border/50 last:border-0 transition-all duration-300 ${
                  isActive(item.path)
                    ? "backdrop-blur-md bg-white/10 text-primary font-semibold rounded-lg px-3"
                    : "text-foreground/80 hover:text-foreground"
                }`}
              >
                {item.label}
              </Link>
            ))}

            <Link
              to={`${langPrefix}/apartments`}
              onClick={() => setMobileOpen(false)}
              className="mt-4 w-full inline-flex items-center justify-center px-5 py-3 text-sm font-medium text-primary-foreground bg-primary rounded-lg"
            >
              {t({ de: "Jetzt buchen!", en: "Book now!" })}
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
