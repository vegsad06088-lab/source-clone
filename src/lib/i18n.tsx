import React, { createContext, useContext, useState, useCallback } from "react";

export const LANGUAGE_PACK = ["de", "en", "sq", "fr", "it", "es", "tr"] as const;
export type Lang = typeof LANGUAGE_PACK[number];

export type TranslationObject = Partial<Record<Lang, string>> & {
  de: string;
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

export function I18nProvider({
  children,
  initialLang,
}: {
  children: React.ReactNode;
  initialLang?: Lang;
}) {
  const [lang, setLangState] = useState<Lang>(() => {
    if (initialLang) return initialLang;

    const path = window.location.pathname;
    const prefix = path.split("/")[1];

    return LANGUAGE_PACK.includes(prefix as Lang) ? (prefix as Lang) : "de";
  });

  const setLang = useCallback((newLang: Lang) => {
    setLangState(newLang);
  }, []);

  const t = useCallback(
    (texts: TranslationObject) => texts[lang] ?? texts.de,
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
