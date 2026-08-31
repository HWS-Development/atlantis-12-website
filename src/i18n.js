import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import fr from "./locales/fr.json";
import en from "./locales/en.json";

const isBrowser = typeof window !== "undefined";
const instance = i18n.on("languageChanged", (lng) => {
  if (typeof document !== "undefined") document.documentElement.lang = lng;
});

if (isBrowser) instance.use(LanguageDetector);

instance.use(initReactI18next).init({
    resources: { fr: { translation: fr }, en: { translation: en } },
    fallbackLng: "fr",
    lng: isBrowser && (window.location.pathname === "/en" || window.location.pathname.startsWith("/en/"))
      ? "en"
      : "fr",
    detection: {
      order: ["querystring", "localStorage", "navigator", "htmlTag", "cookie"],
      lookupQuerystring: "lng",
      caches: ["localStorage", "cookie"],
      lookupLocalStorage: "i18nextLng"
    },
    interpolation: { escapeValue: false }
  });

export default i18n;
