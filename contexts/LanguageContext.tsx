import React, { createContext, useState, useEffect, ReactNode, useContext } from 'react';
import { translations } from '../translations';

type Language = 'en' | 'he';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: typeof translations.en;
}

export const LanguageContext = createContext<LanguageContextType>({
  language: 'en',
  toggleLanguage: () => {},
  t: translations.en,
});

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage && ['en', 'he'].includes(savedLanguage)) {
      setLanguage(savedLanguage);
      document.documentElement.lang = savedLanguage;
      document.documentElement.dir = savedLanguage === 'he' ? 'rtl' : 'ltr';
    } else {
       document.documentElement.lang = 'en';
       document.documentElement.dir = 'ltr';
    }
  }, []);

  const toggleLanguage = () => {
    const newLanguage = language === 'en' ? 'he' : 'en';
    setLanguage(newLanguage);
    localStorage.setItem('language', newLanguage);
    document.documentElement.lang = newLanguage;
    document.documentElement.dir = newLanguage === 'he' ? 'rtl' : 'ltr';
  };

  const t = translations[language];

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
