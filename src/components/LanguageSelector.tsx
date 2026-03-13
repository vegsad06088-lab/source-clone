import { useState } from "react";
import { useLocation } from "react-router-dom";
import { useI18n } from "@/lib/i18n";
import { LANGUAGE_PACK, Lang } from "@/lib/i18n";
import { Globe } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface LanguageInfo {
  code: Lang;
  name: string;
  flag: string;
  nativeName: string;
}

const LANGUAGE_INFO: Record<Lang, LanguageInfo> = {
  de: {
    code: "de",
    name: "German",
    flag: "🇩🇪",
    nativeName: "Deutsch",
  },
  en: {
    code: "en",
    name: "English",
    flag: "🇬🇧",
    nativeName: "English",
  },
  sq: {
    code: "sq",
    name: "Albanian",
    flag: "🇦🇱",
    nativeName: "Shqip",
  },
  fr: {
    code: "fr",
    name: "French",
    flag: "🇫🇷",
    nativeName: "Français",
  },
  it: {
    code: "it",
    name: "Italian",
    flag: "🇮🇹",
    nativeName: "Italiano",
  },
  es: {
    code: "es",
    name: "Spanish",
    flag: "🇪🇸",
    nativeName: "Español",
  },
  tr: {
    code: "tr",
    name: "Turkish",
    flag: "🇹🇷",
    nativeName: "Türkçe",
  },
};

export default function LanguageSelector() {
  const { lang, setLang } = useI18n();
  const location = useLocation();
  const [open, setOpen] = useState(false);

  const currentLang = LANGUAGE_INFO[lang];

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
    setOpen(false);
  };

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>
        <button
          className="inline-flex items-center justify-center px-3 py-2 text-sm font-medium text-foreground rounded-lg hover:bg-accent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          aria-label="Select language"
          title={`Switch language - ${currentLang.nativeName}`}
        >
          <Globe size={18} className="mr-2" />
          <span className="text-lg leading-none">{currentLang.flag}</span>
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-48">
        {LANGUAGE_PACK.map((lng) => (
          <DropdownMenuItem
            key={lng}
            onClick={() => switchLang(lng)}
            className={`cursor-pointer flex items-center gap-3 ${
              lng === lang ? "bg-accent" : ""
            }`}
          >
            <span className="text-xl">{LANGUAGE_INFO[lng].flag}</span>
            <div className="flex flex-col">
              <span className="text-sm font-medium">
                {LANGUAGE_INFO[lng].nativeName}
              </span>
              <span className="text-xs text-muted-foreground">
                {LANGUAGE_INFO[lng].name}
              </span>
            </div>
            {lng === lang && (
              <span className="ml-auto text-primary text-lg">✓</span>
            )}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

