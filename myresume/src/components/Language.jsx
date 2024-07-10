import React from 'react';
import { useTranslation } from 'react-i18next';

export default function Language() {
  const { t, i18n } = useTranslation();

  const changeLanguage = () => {
    const newLanguage = i18n.language === 'tr' ? 'en' : 'tr';
    i18n.changeLanguage(newLanguage);
  };

  return (
    <div>
      <button onClick={changeLanguage}>
        {i18n.language === 'tr' ? 'İNGİLİZCE’YE GEÇ' : 'TÜRKÇE’YE GEÇ'}
      </button>
      Aktif dil: {i18n.language}
    </div>
  );
}