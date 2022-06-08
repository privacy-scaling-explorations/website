import ProjectData from '../data/Projects.json';
import { useState } from 'react';
import ProjectCard, { ProjectCardProps } from './ProjectCard';
import { shuffleFisherYates } from '../Utils';
import './Projects.css'

function Projects() {
  return (
    <CardSection title="Projects" cardData={ProjectData} shuffle={false}></CardSection>
  );
}

export default Projects;

interface ICardSection {
  title: string;
  cardData: ProjectCardProps[];
  shuffle?: boolean;
  renderBanner?: boolean | undefined;
}

function CreateCards(cards: ProjectCardProps[], shuffle: boolean = true, renderBanner: boolean | undefined): JSX.Element[] {
  let _cards = cards.map((card: ProjectCardProps) => {
    if (renderBanner == true) {
      return <ProjectCard key={card.name} {...card} renderBanner={true} />;
    } else if (renderBanner == false) {
      return <ProjectCard key={card.name} {...card} renderBanner={false} />;
    }
    return <ProjectCard key={card.name} {...card} />;
  })

  if (shuffle) {
    _cards = shuffleFisherYates(_cards as []);
  }

  return _cards
}

function CardSection(props: ICardSection) {
  let [cards] = useState<any[]>([CreateCards(props.cardData, props.shuffle, props.renderBanner)]);

  return (
    <div className="CardSection">
      <h1 className="CardSectionTitle mb-4">{props.title}</h1>
      <div className="Cards">{cards}</div>
    </div>
  );
}
