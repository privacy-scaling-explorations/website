import React, { useState, useEffect } from 'react';
import ProjectCard, { ProjectProps } from './ProjectCard';
import ProjectData from './Projects.json';
import './Projects.css';

function shuffleFisherYates(array: []): [] {
  let i = array.length;
  while (i--) {
    const ri = Math.floor(Math.random() * i);
    [array[i], array[ri]] = [array[ri], array[i]];
  }
  return array;
}

function Projects() {
  let [projects, setProjects] = useState<ProjectProps[]>([]);

  useEffect(() => {
    setProjects(ProjectData);
  }, []);

  let _projects = projects.map((project) => {
    return (<ProjectCard key={project.name} {...project} />);
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
