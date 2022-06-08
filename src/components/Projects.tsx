import ProjectData from '../data/Projects.json';
import { useState } from 'react';
import ProjectCard, { ProjectCardProps } from './ProjectCard';
import { shuffleFisherYates } from '../Utils';
import './Projects.css'

function Projects() {
  let [cards] = useState<any[]>([CreateCards(ProjectData, true)]);

  return (
    <div id="Projects">
      <h1 className="ProjectTitle mb-4 mt-5">What we are working on</h1>
      <p>Explore how we integrate ZK primitives into decentralized applications</p>
      <div className="Cards">{cards}</div>
    </div>
  );
}

export default Projects;

function CreateCards(cards: ProjectCardProps[], shuffle: boolean = true): JSX.Element[] {
  let _cards = cards.map((card: ProjectCardProps) => {
    return <ProjectCard key={card.name} {...card} renderBanner={true} />;
  })

  if (shuffle) {
    _cards = shuffleFisherYates(_cards as []);
  }

  return _cards
}