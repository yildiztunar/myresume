import React from 'react';
import { useTranslation } from 'react-i18next';

export default function Language() {
  const { t, i18n } = useTranslation();

  const clickHandle = () => {
    const newLanguage = i18n.language === 'tr' ? 'en' : 'tr';
    i18n.changeLanguage(newLanguage);
  };

  return (
    <div>
      <button onClick={clickHandle}>
        {i18n.language === 'tr' ? 'İNGİLİZCE’YE GEÇ' : 'TÜRKÇE’YE GEÇ'}
      </button>
      Aktif dil: {i18n.language}
    </div>
  );
}