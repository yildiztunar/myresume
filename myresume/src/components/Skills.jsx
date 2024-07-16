import React from 'react';
import Skill from './Skill';
import JsLogo from '../assets/js-logo.png';
import ReactLogo from '../assets/react-logo.png';
import ReduxLogo from '../assets/redux-logo.png';
import NodeLogo from '../assets/node-logo.png';
import VscodeLogo from '../assets/vscode-logo.png';
import FigmaLogo from '../assets/figma-logo.png';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

const skillsData = [
  { name: 'JAVASCRIPT', image: JsLogo },
  { name: 'REACT', image: ReactLogo },
  { name: 'REDUX', image: ReduxLogo },
  { name: 'NODE', image: NodeLogo },
  { name: 'VS CODE', image: VscodeLogo },
  { name: 'FIGMA', image: FigmaLogo },
];

const Skills = () => {
  const { t } = useTranslation();
  const theme = useSelector((state) => state.theme);

  const firstColSkills = skillsData.slice(0, 3);
  const secondColSkills = skillsData.slice(3, 6);

  return (
    <div
      className={`flex flex-col lg:flex-row px-2 lg:px-32 gap-x-2 py-2 lg:py-16 lg:gap-x-32 ${theme === 'light' ? 'bg-whitebg' : 'bg-darkpurplebg'}`}
    >
      <div
        className={`text-2xl lg:text-5xl font-bold text-left ${theme === 'light' ? 'text-purpletext' : 'text-greentext'}`}
      >
        {t('skillsTitle')}
      </div>
      <div className="flex flex-wrap justify-between gap-x-16 lg:gap-x-32">
        <div className="flex flex-row lg:flex-col items-start ">
          {firstColSkills.map((skill, index) => (
            <Skill key={index} name={skill.name} image={skill.image} />
          ))}
        </div>
        <div className="flex flex-row lg:flex-col items-start ">
          {secondColSkills.map((skill, index) => (
            <Skill key={index} name={skill.name} image={skill.image} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
