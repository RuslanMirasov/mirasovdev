import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// добавляем языки
import translationEN from './../languages/en/translation.json';
import translationDE from './../languages/de/translation.json';

// инициализируем i18next
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
    fallbackLng: 'en', // язык по умолчанию
    debug: false,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
