import React from 'react';
import { useTranslation } from 'react-i18next';

const BasicInformation = () => {
const { t } = useTranslation();

    return (
      <div className="flex flex-col text-left gap-y-8">
        
      <div className='text-white text-xl lg:text-3xl'>{t('basicInformation')}</div>

      <div className='flex flex-row gap-x-8'>
        <div className="flex flex-col text-tiny lg:text-base text-wrap text-left text-greentext gap-y-2 ">
        <div>{t('birthday')}</div>
        <div>{t('locationInformation')}</div>
        <div>{t('education')}</div>
        <div>{t('position')}</div>
        </div>

        <div className="flex flex-col text-tiny lg:text-base text-wrap text-left text-whitetext gap-y-2">
        <div>{t('birthdayText')}</div>
        <div>{t('locationInformationText')}</div>
        <div>{t('educationText')}</div>
        <div>{t('positionText')}</div>
        </div>

      </div>
      </div>
      
    );
  };
  
  export default BasicInformation;
  

