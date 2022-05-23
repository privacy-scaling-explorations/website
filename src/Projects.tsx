import React, { useState, useEffect } from 'react';
import Project, { ProjectProps } from './Project';
import ProjectData from './Projects.json';
import './Projects.css';

function Projects() {
  let [projects, setProjects] = useState<ProjectProps[]>([]);

  useEffect(() => {
    setProjects(ProjectData);
  }, []);

  let _projects = projects.map((project) => {
    return (<Project key={project.name} {...project} />);
  })

  return (
    <div className="Projects">
      {_projects}
    </div>
  );
}

export default Projects;
