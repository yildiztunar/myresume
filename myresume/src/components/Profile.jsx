import React from 'react';
import BasicInformation from './BasicInformation';
import AboutMe from './AboutMe';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import profileImage from '../assets/profile.png'

const Profile = () => {
const { t } = useTranslation();
  const theme = useSelector((state) => state.theme);

    return (
        <div
        className={`flex flex-col px-32 py-16 gap-y-8 ${theme === 'light' ? 'bg-purplebg' : 'bg-bluebg'}`}
      >
        <div
          className="text-5xl font-bold text-left text-[#CBF180]"
        >
          {t('profileTitle')}
        </div>
        
        
        <div className='flex flex-row '>
          <div className='w-1/3 '>
            <BasicInformation/>
          </div>

          <div className='w-1/3 '><img className="rounded-[10px] shadow-profileImg" src={profileImage} /></div>

          <div className='w-1/3'>
            <AboutMe/>
          </div>
        </div>


        </div>

    );
  };
  
  export default Profile;
  
