'use client';

import { useState, useRef, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const LanguageSwitcher = () => {
  const { language, setLanguage, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const changeLanguage = (newLanguage: 'en' | 'de') => {
    setLanguage(newLanguage);
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={toggleDropdown}
        className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-900"
      >
        <span className="mr-1">{language === 'en' ? '🇬🇧' : '🇩🇪'}</span>
        <span>{language.toUpperCase()}</span>
        <svg
          className="ml-1 h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-36 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50">
          <div className="py-1">
            <button
              onClick={() => changeLanguage('en')}
              className={`block w-full text-left px-4 py-2 text-sm ${
                language === 'en' ? 'bg-gray-100 text-gray-900' : 'text-gray-700'
              } hover:bg-gray-100`}
            >
              🇬🇧 {t('languageSwitcher.en')}
            </button>
            <button
              onClick={() => changeLanguage('de')}
              className={`block w-full text-left px-4 py-2 text-sm ${
                language === 'de' ? 'bg-gray-100 text-gray-900' : 'text-gray-700'
              } hover:bg-gray-100`}
            >
              🇩🇪 {t('languageSwitcher.de')}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher; 