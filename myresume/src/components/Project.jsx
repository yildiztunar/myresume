import React from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

const Project = ({ title, image, description, programs, viewsite, github }) => {
  const { t } = useTranslation();
  const theme = useSelector((store) => store.theme);

  return (
    <div className="flex flex-col lg:flex-row my-4">
        <div className={`flex lg:w-2/6 rounded-l-xl items-center ${theme === 'light' ? 'bg-whitebg' : 'bg-darkpurplebg'}`}>
        <img src={image} alt={title} className="lg:rounded-l-xl object-cover w-full h-full" />
        </div>
      
        <div
        className={`flex flex-col justify-center lg:w-4/6 leading-tight text-left px-12 py-14 gap-y-4 rounded-r-xl ${theme === 'light' ? 'bg-whitebg' : 'bg-darkpurplebg'}`}
        >
      <h1 className={`text-xl lg:text-4xl font-bold " ${theme === 'light' ? 'text-purpletext' : 'text-lilactext'}`}>{title}</h1>
      <p className={`text-tiny lg:text-lg " ${theme === 'light' ? 'text-darkgraytext' : 'text-whitetext'}`}>{description}</p>
      
      <div className='flex flex-row flex-wrap gap-x-1 gap-y-1'>
          {programs.map((program, index) => (
          <div key={index} className={`text-tiny px-4 py-1.5 text-whitetext rounded-3xl ${theme === 'light' ? 'bg-purplebg' : 'bg-lilacbg'}`}>
          {program}
          </div>
          ))}
      </div>
      
        <div className={`flex flex-row gap-x-4 text-tiny lg:text-base" ${theme === 'light' ? 'text-linktext ' : 'text-greentext'}`}>
          <div className='underline hover:font-bold'>
          <a href={viewsite} target="_blank" rel="noopener noreferrer ">{t('viewSite')}</a></div>
          <div className='underline hover:font-bold '>
          <a href={github} target="_blank" rel="noopener noreferrer">{t('gitHub')}</a></div>
          </div>
        </div>
    </div>
  );
};

export default Project;
