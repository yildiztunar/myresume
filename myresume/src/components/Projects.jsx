import React from 'react';
import Workintech from '../assets/workintech.jpg';
import Journey from '../assets/journey.jpg';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import Project from './Project';

const Projects = () => {
  const { t } = useTranslation();
  const theme = useSelector((state) => state.theme);

  const projectData = [
    { title: t('project1Title'), image: Workintech, description: t('project1Information'), programs: ['react', 'redux', 'vercel'] },
    { title: t('project2Title'), image: Journey, description: t('project2Information'), programs: ['react', 'redux', 'vercel'] },
  ];

  return (
    <div
      className={`flex px-32 py-16  ${theme === 'light' ? 'bg-greenbg' : 'bg-darkgreenbg'}`}
    >
        <div
        className={` text-left ${theme === 'light' ? 'text-purpletext' : 'text-greentext'}`}
        >
          <div className='text-5xl font-bold'>
          {t('projectsTitle')}
          </div>
      
          {projectData.map((project, index) => (
            <Project 
              key={index} 
              title={project.title} 
              image={project.image} 
              description={project.description} 
              programs={project.programs}
            />
          ))}
        
        
      </div>
    </div>
  );
};

export default Projects;
