
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { en } from './en';
import { es } from './es';
import { fr } from './fr';

export type LanguageCode = 'en' | 'es' | 'fr';

// Define translations type based on the English translation structure
export type TranslationsType = typeof en;

const translations: Record<LanguageCode, TranslationsType> = {
  en,
  es,
  fr
};

interface LanguageContextType {
  language: LanguageCode;
  setLanguage: (code: LanguageCode) => void;
  t: TranslationsType;
}

const defaultLanguage: LanguageCode = 'en';

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<LanguageCode>(defaultLanguage);
  const [t, setTranslations] = useState<TranslationsType>(translations[defaultLanguage]);

  // Try to get language from localStorage on initial load
  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as LanguageCode;
    if (savedLanguage && translations[savedLanguage]) {
      setLanguageState(savedLanguage);
      setTranslations(translations[savedLanguage]);
    } else {
      // Try to get browser language
      const browserLanguage = navigator.language.split('-')[0] as LanguageCode;
      if (translations[browserLanguage]) {
        setLanguageState(browserLanguage);
        setTranslations(translations[browserLanguage]);
      }
    }
  }, []);

  const setLanguage = (code: LanguageCode) => {
    localStorage.setItem('language', code);
    setLanguageState(code);
    setTranslations(translations[code]);
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
