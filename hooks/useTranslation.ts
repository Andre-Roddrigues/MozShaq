// hooks/useTranslation.ts
'use client';

import { useTranslation as useI18nTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';

export function useTranslation(namespace?: string) {
  const { t, i18n } = useI18nTranslation(namespace);
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language);

  // Atualizar estado quando o idioma mudar
  useEffect(() => {
    const handleLanguageChanged = (lng: string) => {
      setCurrentLanguage(lng);
    };

    i18n.on('languageChanged', handleLanguageChanged);

    return () => {
      i18n.off('languageChanged', handleLanguageChanged);
    };
  }, [i18n]);

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
    localStorage.setItem('i18nextLng', lang);
  };

  return {
    t,
    changeLanguage,
    currentLanguage,
    isPT: currentLanguage === 'pt',
    isEN: currentLanguage === 'en',
  };
}