import React from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

const Project = ({ title, image, description, programs }) => {
  const { t } = useTranslation();
  const theme = useSelector((state) => state.theme);

  return (
    <div className="flex items-center p-4  ">
        <div>
        <img src={image} alt={title} className="rounded-l-xl  " />
        </div>
      
        <div
        className={`flex flex-col text-left gap-y-8 rounded-r-xl ${theme === 'light' ? 'bg-whitebg' : 'bg-darkpurplebg'}`}
        >
      <h1 className={`text-4xl " ${theme === 'light' ? 'text-purpletext' : 'text-lilactext'}`}>{title}</h1>
      <p className={`text-2xl " ${theme === 'light' ? 'text-darkgraytext' : 'text-whitetext'}`}>{description}</p>
      <div className={`text-tiny text-whitetext ${theme === 'light' ? 'bg-purplebg' : 'bg-lilacbg'}`}>{programs}</div>
      <div className={`flex flex-row text-base " ${theme === 'light' ? 'text-linktext' : 'text-greentext'}`}>
      <p>{t('viewSite')}</p>
      <p>{t('gitHub')}</p>
        </div>
        </div>
    </div>
  );
};

export default Project;
