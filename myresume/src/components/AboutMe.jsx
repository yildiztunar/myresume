import React from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

const AboutMe = () => {
const { t } = useTranslation();
  const theme = useSelector((state) => state.theme);

    return (
      <div className='flex flex-col ml-4 gap-x-8'>
        <div className="text-wrap text-left text-white text-xl lg:text-3xl">{t('aboutMe')}</div>
        <div className="text-wrap text-left pt-8 text-white text-tiny lg:text-lg">{t('aboutMeInformation')}</div>
      </div>
    );
  };
  
  export default AboutMe;
  

