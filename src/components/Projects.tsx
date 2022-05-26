import CardSection from './CardSection';
import ProjectData from '../data/Projects.json';


function Projects() {
  return (
    <CardSection title="Projects" cardData={ProjectData} shuffle={false}></CardSection>
  );
}

export default Projects;
