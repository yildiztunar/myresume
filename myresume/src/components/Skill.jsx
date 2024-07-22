import React from 'react';
import { useSelector } from 'react-redux';

const Skill = ({ name, image }) => {
  const theme = useSelector((state) => state.theme);

  return (
    <div className="flex p-4 items-center">
      <img src={image} alt={name} className="mr-1 md:mr-4 shadow-bannerImg" />
      <p className={`text-tiny lg:text-2xl " ${theme === 'light' ? 'text-graytext' : 'text-whitetext'}`}>{name}</p>
    </div>
  );
};

export default Skill;
