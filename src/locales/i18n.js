import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import {esmx} from './esmx';
import {enus} from './enus';

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  es: {
    translation: esmx,
  },
  en: {
    translation: enus,
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: navigator.language === 'en-US' ? 'en' : 'es', // idioma predeterminado
    fallbackLng: 'es',
    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

  export default i18n;