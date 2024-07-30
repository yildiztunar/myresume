import React from 'react';
import TechnologicalMeals from '../assets/technological-meals.png';
import Resume from '../assets/resume.jpg';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import Project from './Project';

const Projects = () => {
  const { t } = useTranslation();
  const theme = useSelector((store) => store.theme);

  const projectData = [
    { title: t('project1Title'),
      image: Resume,
      description: t('project1Information'),
      programs: ['react', 'redux', 'hook form','i18next','axios','tailwindCSS','toastify','vercel'],
      viewsite:"https://yildiztunar-resume.vercel.app/",
      github:"https://github.com/yildiztunar/personal/tree/main/myresume" },
    { title: t('project2Title'),
      image: TechnologicalMeals,
      description: t('project2Information'),
      programs: ['react', 'styled-components', 'hooks', 'cypress', 'vercel'],
      viewsite:"https://technological-meals.vercel.app/",
      github:"https://github.com/yildiztunar/order-pizza" },
  ];

  return (
    <div
      className={`flex px-2 w-screen md:px-32 py-2 md:py-16  ${theme === 'light' ? 'bg-greenbg' : 'bg-darkgreenbg'}`}
    >
        <div
        className={`text-left ${theme === 'light' ? 'text-purpletext' : 'text-greentext'}`}
        >
          <div className='text-2xl lg:text-5xl font-bold'>
          {t('projectsTitle')}
          </div>
      
          {projectData.map((project, index) => (
            <Project 
              key={index} 
              title={project.title} 
              image={project.image} 
              description={project.description} 
              programs={project.programs}
              viewsite={project.viewsite}
              github={project.github}
            />
          ))}
        
        
      </div>
    </div>
  );
};

export default Projects;
