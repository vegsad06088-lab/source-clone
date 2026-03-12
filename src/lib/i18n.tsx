import React, { createContext, useContext, useState, useCallback } from "react";

// Supported languages (you can add more anytime)
export const LANGUAGE_PACK = ["de", "en", "sq", "fr", "it", "es", "tr"] as const;
export type Lang = typeof LANGUAGE_PACK[number];

// A translation object can contain ANY subset of languages
export type TranslationObject = Partial<Record<Lang, string>> & {
  de: string; // German required as fallback
};

interface I18nContextType {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (texts: TranslationObject) => string;
  langPrefix: string;
}

const I18nContext = createContext<I18nContextType>({
  lang: "de",
  setLang: () => {},
  t: (texts) => texts.de,
  langPrefix: "",
});

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() => {
    const path = window.location.pathname;
    const prefix = path.split("/")[1]; // e.g. "/en/..." → "en"

    return LANGUAGE_PACK.includes(prefix as Lang) ? (prefix as Lang) : "de";
  });

  const setLang = useCallback((newLang: Lang) => {
    setLangState(newLang);
  }, []);

  // Translation function with safe fallback
  const t = useCallback(
    (texts: TranslationObject) => {
      return texts[lang] ?? texts.de; // fallback to German
    },
    [lang]
  );

  const langPrefix = lang === "de" ? "" : `/${lang}`;

  return (
    <I18nContext.Provider value={{ lang, setLang, t, langPrefix }}>
      {children}
    </I18nContext.Provider>
  );
}

export const useI18n = () => useContext(I18nContext);
