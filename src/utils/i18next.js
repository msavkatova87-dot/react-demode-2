import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enENG from "./../locales/en/enENG.json"
import ruRUS from "./../locales/ru/ruRUS.json"

i18n
  .use(initReactI18next) 
  .init({
    
    resources: {
      en: {
        translation: enENG
        },   
      ru: {
        translation: ruRUS
      }
    },
    lng: "en", 
    fallbackLng: "en",

    interpolation: {
      escapeValue: false,
    },
  });
