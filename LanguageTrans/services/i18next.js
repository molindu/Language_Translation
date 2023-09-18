import i18next from 'i18next';
import en from '../locals/en.json';
import sv from '../locals/sv';
import { initReactI18next } from 'react-i18next';


export const languageResource = {
    en: { translation: en },
    sv: { translation: sv }
}
i18next.use(initReactI18next).init({
    compatibilityJSON: 'v3',
    lng: 'en',
    fallbackLng: 'en',
    resources: languageResource,
})
export default i18next;