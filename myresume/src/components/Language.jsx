import React from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

export default function Language() {
  const { t, i18n } = useTranslation();
  const theme = useSelector((state) => state.theme);

  const changeLanguage = () => {
    const newLanguage = i18n.language === 'tr' ? 'en' : 'tr';
    i18n.changeLanguage(newLanguage);
    localStorage.setItem('language', newLanguage);
  };

  return (
      <button onClick={changeLanguage}
      className={`bg-transparent p-2 font-bold text-tiny md:text-base  text-${theme === 'light' ? 'greentext' : 'whitetext'}`}>
        {i18n.language === 'tr' ? 'İNGİLİZCE’YE GEÇ' : 'TÜRKÇE’YE GEÇ'}
      </button>

  );
}