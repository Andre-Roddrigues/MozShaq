// lib/i18n.ts (atualizado)
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Importação dinâmica dos arquivos de tradução
const resources = {
  pt: {
    common: require('../public/locales/pt/common.json'),
    navbar: require('../public/locales/pt/navbar.json'),
    footer: require('../public/locales/pt/footer.json'), // ← Adicionado
    hero: require('../public/locales/pt/hero.json'),
    about: require('../public/locales/pt/about.json'),
    consulting: require('../public/locales/pt/consulting.json'),
    'how-we-act': require('../public/locales/pt/how-we-act.json'),
    services: require('../public/locales/pt/services.json'),
  },
  en: {
    common: require('../public/locales/en/common.json'),
    navbar: require('../public/locales/en/navbar.json'),
    footer: require('../public/locales/en/footer.json'), // ← Adicionado
    hero: require('../public/locales/en/hero.json'),
    about: require('../public/locales/en/about.json'),
    consulting: require('../public/locales/en/consulting.json'),
    'how-we-act': require('../public/locales/en/how-we-act.json'),
    services: require('../public/locales/en/services.json'),
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'pt',
    lng: 'pt',
    debug: process.env.NODE_ENV === 'development',
    
    interpolation: {
      escapeValue: false,
    },

    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
      lookupLocalStorage: 'i18nextLng',
    },

    react: {
      useSuspense: false,
    },

    defaultNS: 'common',
    ns: ['common', 'navbar', 'footer', 'home', 'courses', 'projects', 'contact', 'hero', 'about', 'consulting', 'how-we-act', 'services'],
  });

export default i18n;