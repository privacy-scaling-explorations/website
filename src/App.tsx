import React from 'react';
import Starter from './Starter';
import Project from './Project';
import ProjectsData from './Projects.json';
import './App.css';

function App() {

  const Projects = () => {
    return ProjectsData.map((project) => {
      return Project(project);
    });
  }

  return (
    <div className="App container-sm">
      {Starter()}
      {Projects()}
    </div>
  );
}

export default App;
