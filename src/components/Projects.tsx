import CardSection from './CardSection';
import ProjectData from '../data/Projects.json';


function Projects() {
  return (
    <CardSection title="Projects" cardData={ProjectData}></CardSection>
  );
}

export default Projects;
