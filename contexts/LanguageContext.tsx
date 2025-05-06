'use client';

import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';

type Language = 'en' | 'de';

type Translations = {
  [key in Language]: {
    [key: string]: string;
  };
};

// We'll load the translations dynamically on the client side
const emptyTranslations: Translations = {
  en: {},
  de: {}
};

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
  translations: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{children: ReactNode}> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');
  const [translations, setTranslations] = useState<Translations>(emptyTranslations);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const loadTranslationsData = async () => {
      try {
        const response = await fetch('/api/translations');
        const data = await response.json();
        setTranslations(data);
        setIsLoaded(true);
      } catch (error) {
        console.error('Failed to load translations:', error);
        // Fallback to empty translations if API fails
        setIsLoaded(true);
      }
    };

    loadTranslationsData();
  }, []);

  const t = (key: string): string => {
    if (!isLoaded) return key || ''; // Return key if translations not loaded yet
    if (!key) return ''; // Handle null or undefined keys
    return translations[language] && translations[language][key] ? translations[language][key] : (key || '');
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, translations }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}; 