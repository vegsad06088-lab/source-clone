import React, { createContext, useContext, useState, useCallback, useEffect } from "react";

// ============================================
// CONFIGURATION: Customize available languages
// ============================================
// To add a new language, follow these 3 simple steps:
//
// 1. Add language code to LANGUAGE_PACK below
//    Example: ["de", "en", "sq", "ru", "ja"]
//
// 2. Add language metadata to LANGUAGE_METADATA in 
//    src/components/LanguageSelector.tsx
//    (already pre-populated with common languages)
//
// 3. Create translation JSON file: src/translations/{code}.json
//    Copy structure from de.json or en.json as template
//
// That's it! The language will automatically appear in the selector
// and work throughout the entire application.
// ============================================
//export const LANGUAGE_PACK = ["de", "en", "sq", "ru", "fr", "it", "es", "tr", "ja", "zh"] as const;
export const LANGUAGE_PACK = ["de", "en", "sq"] as const;

// ============================================
// CONFIGURATION: Set the default language
// ============================================
// This language is used for two purposes:
// 1. Default if no language preference is detected
// 2. Fallback for missing translation keys
// Must be one of the languages in LANGUAGE_PACK above
// Change this to any language in LANGUAGE_PACK to customize fallback behavior
export const DEFAULT_LANGUAGE: typeof LANGUAGE_PACK[number] = "de";

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
  lang: DEFAULT_LANGUAGE,
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

    return LANGUAGE_PACK.includes(prefix as Lang) ? (prefix as Lang) : DEFAULT_LANGUAGE;
  });

  const [translations, setTranslations] = useState<Record<string, any>>({});

  // Load translations on component mount
  useEffect(() => {
    const loadTranslations = async () => {
      try {
        const translationFiles: Record<Lang, any> = {} as Record<Lang, any>;
        const allTranslations: Record<string, string> = {}; // Flat object for all translations
        const loadedLanguages: string[] = [];
        const missingLanguages: string[] = [];

        // Load translation files for languages in LANGUAGE_PACK
        for (const lng of LANGUAGE_PACK) {
          try {
            const module = await import(`../translations/${lng}.json`);
            const langTranslations = module.default || module;
            translationFiles[lng] = langTranslations;
            // Merge all translations into a flat object
            Object.assign(allTranslations, langTranslations);
            loadedLanguages.push(lng);
          } catch (err) {
            missingLanguages.push(lng);
            console.warn(`⚠️ Translation file not found for language "${lng}". Expected: src/translations/${lng}.json`);
            console.warn(`   This language won't be available until you create the translation file.`);
          }
        }

        setTranslations(allTranslations);
        
        // Log summary
        if (loadedLanguages.length > 0) {
          console.log(`✅ Loaded translations: ${loadedLanguages.join(", ")}`);
        }
        if (missingLanguages.length > 0) {
          console.warn(`⚠️ Missing translations: ${missingLanguages.join(", ")}`);
        }
      } catch (err) {
        console.error("❌ Failed to initialize translation system", err);
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
        // Translation files have flattened keys with language prefix (e.g., "de.home.hero.title")
        const key = `${lang}.${texts}`;
        
        // Try current language first
        if (translations && translations[key]) {
          return translations[key];
        }
        
        // Fallback to default language
        const defaultKey = `${DEFAULT_LANGUAGE}.${texts}`;
        if (translations && translations[defaultKey]) {
          console.warn(`Translation key missing for ${lang}: ${key}, falling back to ${DEFAULT_LANGUAGE}`);
          return translations[defaultKey];
        }
        
        // Last resort: return the key itself
        console.warn(`Translation key not found in any language: ${key}`);
        return texts;
      }

      // If it's an object (inline translation), use the old behavior
      return texts[lang] ?? texts.de;
    },
    [lang, translations]
  );

  const langPrefix = lang === DEFAULT_LANGUAGE ? "" : `/${lang}`;

  return (
    <I18nContext.Provider value={{ lang, setLang, t, langPrefix, translations }}>
      {children}
    </I18nContext.Provider>
  );
}

export const useI18n = () => useContext(I18nContext);
