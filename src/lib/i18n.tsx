import React, { createContext, useContext, useState, useCallback } from "react";

type Lang = "de" | "en";

interface I18nContextType {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (texts: { de: string; en: string }) => string;
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
    return path.startsWith("/en") ? "en" : "de";
  });

  const setLang = useCallback((newLang: Lang) => {
    setLangState(newLang);
  }, []);

  const t = useCallback((texts: { de: string; en: string }) => texts[lang], [lang]);
  const langPrefix = lang === "en" ? "/en" : "";

  return (
    <I18nContext.Provider value={{ lang, setLang, t, langPrefix }}>
      {children}
    </I18nContext.Provider>
  );
}

export const useI18n = () => useContext(I18nContext);
