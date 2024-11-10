import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// add translationf files
import translationEN from '../languages/en/translation.json';
import translationDE from '../languages/de/translation.json';

// init
i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: translationEN,
      },
      de: {
        translation: translationDE,
      },
    },
    fallbackLng: 'en', // default language
    debug: false,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
