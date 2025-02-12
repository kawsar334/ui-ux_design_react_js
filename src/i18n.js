import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      welcome: "Welcome",
      changeLang: "Change Language",
    },
  },
  ar: {
    translation: {
      welcome: "أهلا بك",
      changeLang: "تغيير اللغة",
    },
  },
  bn: {
    translation: {
      welcome: "স্বাগতম",
      changeLang: "ভাষা পরিবর্তন করুন",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en", // Default language
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
