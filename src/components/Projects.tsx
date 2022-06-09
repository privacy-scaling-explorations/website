import ProjectData from "../data/Projects.json";
import { useState } from "react";
import ProjectCard, { ProjectCardProps } from "./ProjectCard";
import { shuffleFisherYates } from "../Utils";
import "./Projects.css";

function Projects() {
  const [cards] = useState<any[]>([CreateCards(ProjectData, true)]);

  return (
    <div id="Projects">
      <h2 className="">What we work on</h2>
      <div style={{ height: "1.375rem" }} />
      <p className="">Explore how we integrate ZK primitives into decentralized applications</p>
      <div style={{ height: "4.4375rem" }} />
      <div className="Cards">{cards}</div>
    </div>
  );
}

export default Projects;

function CreateCards(cards: ProjectCardProps[], shuffle: boolean = true): JSX.Element[] {
  let _cards = cards.map((card: ProjectCardProps) => {
    return <ProjectCard key={card.name} {...card} renderBanner={true} />;
  });

  if (shuffle) {
    _cards = shuffleFisherYates(_cards as []);
  }

  return _cards;
}
