import TeamData from '../data/Team.json';
import { useState } from 'react';
import TeamCard, { TeamMemberCardProps } from './TeamMemberCard';
import { shuffleFisherYates } from '../Utils';
import './Team.css'

function Teams() {
  let [cards] = useState<any[]>([CreateCards(TeamData, true)]);

  return (
    <div className="TeamsSection">
      <h1 className="TeamTitle mb-4 mt-5">Members</h1>
      <p>PSE is a team of 50 members, below you can find some of our team member's information.</p>
      <div className="Cards">{cards}</div>
    </div>
  );
}

export default Teams;

function CreateCards(cards: TeamMemberCardProps[], shuffle: boolean = true): JSX.Element[] {
  let _cards = cards.map((card: TeamMemberCardProps) => {
    return <TeamCard key={card.name} {...card} renderBanner={true} />;
  })

  if (shuffle) {
    _cards = shuffleFisherYates(_cards as []);
  }

  return _cards
}