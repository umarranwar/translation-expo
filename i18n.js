import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import * as Localization from 'expo-localization';

// Import your translations
import en from './src/locales/en.json';
import ar from './src/locales/ar.json';

const resources = {
  en: { translation: en },
  ar: { translation: ar },
  // Add more languages as needed
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: Localization.locale,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
