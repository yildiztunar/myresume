import React from 'react';
import { useSelector } from 'react-redux';

const Skill = ({ name, image }) => {
  const theme = useSelector((state) => state.theme);

  return (
    <div className="flex items-center p-4  ">
      <img src={image} alt={name} className="w-10 h-10 md:w-16 md:h-16 mr-1 md:mr-4 shadow-bannerImg" />
      <p className={`text-tiny lg:text-2xl " ${theme === 'light' ? 'text-graytext' : 'text-whitetext'}`}>{name}</p>
    </div>
  );
};

export default Skill;
