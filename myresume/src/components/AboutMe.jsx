import React from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

const AboutMe = () => {
const { t } = useTranslation();
  const theme = useSelector((state) => state.theme);

    return (
      <div className='flex flex-col gap-y-8'>
        <div className="text-wrap text-left text-white text-3xl">{t('aboutMe')}</div>
        <div className="text-wrap text-left text-white text-lg">{t('aboutMeInformation')}</div>
      </div>
    );
  };
  
  export default AboutMe;
  

