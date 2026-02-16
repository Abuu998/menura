import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "../assets/langs/en.json";
import ki from "../assets/langs/ki.json";

export const defaultNS = "ns1";
export const resources = {
  ki: { ns1: ki },
  en: { ns1: en },
} as const;

i18n.use(initReactI18next).init({
  lng: "ki",
  ns: ["ns1"],
  resources,
  defaultNS,
  interpolation: {
    escapeValue: false,
  },
  fallbackLng: "ki",
});

export default i18n;
