import React from 'react';
import Skill from './Skill';
import JsLogo from '../assets/js-logo.png';
import ReactLogo from '../assets/react-logo.png';
import ReduxLogo from '../assets/redux-logo.png';
import TailwindcssLogo from '../assets/tailwindcss.png';
import CypressLogo from '../assets/cypress-logo.png';
import VscodeLogo from '../assets/vscode-logo.png';
import FigmaLogo from '../assets/figma-logo.png';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

const skillsData = [
  { name: 'JAVASCRIPT', image: JsLogo },
  { name: 'REACT', image: ReactLogo },
  { name: 'REDUX', image: ReduxLogo },
  { name: 'TAILWINDCSS', image: TailwindcssLogo },
  { name: 'CYPRESS', image: CypressLogo },
  { name: 'VSCODE', image: VscodeLogo },
  { name: 'FIGMA', image: FigmaLogo },
];

const Skills = () => {
  const { t } = useTranslation();
  const theme = useSelector((store) => store.theme);

  return (
    <div
      className={`flex flex-col w-screen lg:flex-row px-4 py-2 md:px-32 gap-y-8 gap-x-2 md:py-16 lg:gap-x-32 ${theme === 'light' ? 'bg-whitebg' : 'bg-darkpurplebg'}`}
    >
      <div
        className={`text-2xl lg:text-5xl font-bold text-left ${theme === 'light' ? 'text-purpletext' : 'text-greentext'}`}
      >
        {t('skillsTitle')}
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-3 xs:grid-cols-3 justify-between gap-x-16 lg:gap-x-36">
          {skillsData.map((skill, index) => (
            <Skill key={index} name={skill.name} image={skill.image} />
          ))}
      </div>
    </div>
  );
};

export default Skills;
