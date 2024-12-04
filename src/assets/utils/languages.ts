import i18n, { InitOptions } from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import translationEN from '../languages/en/translation.json';
import translationDE from '../languages/de/translation.json';

const resources = {
  en: {
    translation: translationEN,
  },
  de: {
    translation: translationDE,
  },
};

const options: InitOptions = {
  resources,
  fallbackLng: 'de',
  supportedLngs: ['de', 'en'],
  nonExplicitSupportedLngs: true,
  detection: {
    order: ['localStorage', 'querystring', 'navigator', 'htmlTag'],
    caches: ['localStorage'],
  },
  debug: false,
  interpolation: {
    escapeValue: false,
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init(options)
  .catch(error => console.error('Error initialisation i18next:', error));

export default i18n;
