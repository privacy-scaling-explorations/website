import TeamData from "../data/Team.json";
import TeamCard, { TeamMemberCardProps } from "./TeamMemberCard";
import { shuffleFisherYates } from "../Utils";
import "./Team.css";

const cards = CreateCards(true);

function Teams() {
  return (
    <div id="Team">
      <h2 className="">Members</h2>
      <div style={{ height: "1.5rem" }} />
      <p>PSE has contributors of all kinds - we are developers, designers, engineers, researchers, communicators, organizers and much more. Meet some of our team members below!</p>
      <div className="Cards">{cards}</div>
    </div>
  );
}

export default Teams;

function CreateCards(shuffle: boolean = true): JSX.Element[] {
  let _cards = TeamData.map((card: TeamMemberCardProps) => {
    return <TeamCard key={card.name} {...card} renderBanner={false} />;
  });

  if (shuffle) {
    _cards = shuffleFisherYates(_cards as []);
  }

  return _cards;
}
