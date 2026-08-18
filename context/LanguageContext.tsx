// components/LanguageProvider.tsx
'use client';

import { I18nextProvider } from 'react-i18next';
import { useEffect, useState } from 'react';
import i18n from '../lib/i18n';

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    // Verificar se há um idioma salvo
    const savedLang = localStorage.getItem('i18nextLng');
    if (savedLang && (savedLang === 'pt' || savedLang === 'en')) {
      i18n.changeLanguage(savedLang);
    }
    setIsReady(true);
  }, []);

  if (!isReady) {
    return <>{children}</>;
  }

  return (
    <I18nextProvider i18n={i18n}>
      {children}
    </I18nextProvider>
  );
}