import React, { useState, useEffect } from 'react';
import MagicCard, { CardProps } from './MagicCard';
import { shuffleFisherYates } from '../Utils';
import ProjectData from './Projects.json';
import './Projects.css';


function Projects() {
  let [projects, setProjects] = useState<CardProps[]>([]);

  useEffect(() => {
    setProjects(ProjectData);
  }, []);

  let _projects = projects.map((project) => {
    return (<MagicCard key={project.name} {...project} />);
  })

  _projects = shuffleFisherYates(_projects as []);

  return (
    <div className="Projects">
      <h1 className="mb-4">Projects</h1>
      <div className="ProjectsList">{_projects}</div>
    </div>
  );
}

export default Projects;
