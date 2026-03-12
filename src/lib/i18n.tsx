import React, { createContext, useContext, useState, useCallback, useEffect } from "react";

export const LANGUAGE_PACK = ["de", "en", "sq", "fr", "it", "es", "tr"] as const;
export type Lang = typeof LANGUAGE_PACK[number];

export type TranslationObject = Partial<Record<Lang, string>> & {
  de: string;
};

interface I18nContextType {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (texts: TranslationObject | string) => string;
  langPrefix: string;
  translations: Record<string, any>;
}

const I18nContext = createContext<I18nContextType>({
  lang: "de",
  setLang: () => {},
  t: (texts) => typeof texts === "string" ? texts : texts.de,
  langPrefix: "",
  translations: {},
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

  const [translations, setTranslations] = useState<Record<string, any>>({});

  // Load translations on component mount
  useEffect(() => {
    const loadTranslations = async () => {
      try {
        const translationFiles: Record<Lang, any> = {
          de: null,
          en: null,
          sq: null,
          fr: null,
          it: null,
          es: null,
          tr: null,
        };

        // Load all translation files
        for (const lng of LANGUAGE_PACK) {
          try {
            const module = await import(`../translations/${lng}.json`);
            translationFiles[lng] = module.default || module;
          } catch (err) {
            console.warn(`Failed to load translations for ${lng}`);
          }
        }

        setTranslations(translationFiles);
      } catch (err) {
        console.error("Failed to load translations", err);
      }
    };

    loadTranslations();
  }, []);

  const setLang = useCallback((newLang: Lang) => {
    setLangState(newLang);
  }, []);

  const t = useCallback(
    (texts: TranslationObject | string) => {
      // If it's a string (key), look it up in translations
      if (typeof texts === "string") {
        const key = `${lang}.${texts}`;
        if (translations[lang] && translations[lang][key]) {
          return translations[lang][key];
        }
        // Fallback to key itself if not found
        console.warn(`Translation key not found: ${key}`);
        return texts;
      }

      // If it's an object (inline translation), use the old behavior
      return texts[lang] ?? texts.de;
    },
    [lang, translations]
  );

  const langPrefix = lang === "de" ? "" : `/${lang}`;

  return (
    <I18nContext.Provider value={{ lang, setLang, t, langPrefix, translations }}>
      {children}
    </I18nContext.Provider>
  );
}

export const useI18n = () => useContext(I18nContext);
