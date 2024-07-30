import React from 'react';
import BasicInformation from './BasicInformation';
import AboutMe from './AboutMe';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import profileImage from '../assets/bannerImg.jpg'

const Profile = () => {
const { t } = useTranslation();
  const theme = useSelector((store) => store.theme);

    return (
        <div
        className={`flex flex-col w-screen px-4 md:px-32 py-2 md:py-16 gap-y-8 ${theme === 'light' ? 'bg-purplebg' : 'bg-bluebg'}`}
      >
        <div
          className="text-2xl lg:text-5xl font-bold text-left text-[#CBF180]"
        >
          {t('profileTitle')}
        </div>
        
        
        <div className='flex flex-col items-center lg:flex-row gap-y-8'>
          <div className='w-1/2 lg:w-1/3 '>
            <BasicInformation/>
          </div>
        <div className='flex flex-col lg:flex-row w-1/2 lg:w-2/3 '>
          <div><img className="rounded-[10px] shadow-profileImg mx-2" src={profileImage} /></div>
          <div>
            <AboutMe/>
          </div>
        </div>
        </div>


        </div>

    );
  };
  
  export default Profile;
  
