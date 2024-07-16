import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from 'i18next-http-backend';

const language = localStorage.getItem('language') || 'en';

i18n
.use(initReactI18next)
.use(Backend)
.init({
    lng: language,

})

export default i18n;