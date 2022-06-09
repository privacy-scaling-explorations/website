import TeamData from '../data/Team.json';
import { useState } from 'react';
import TeamCard, { TeamMemberCardProps } from './TeamMemberCard';
import { shuffleFisherYates } from '../Utils';
import './Team.css'

function Teams() {
  const [cards] = useState<any[]>([CreateCards(TeamData, true)]);

  return (
    <div id="Team">
      <h1 className="">Members</h1>
      <div style={{ height: '1.5rem' }} />
      <p>PSE is a team of 50 members, below you can find some of our team member's information.</p>
      <div className="Cards">{cards}</div>
    </div>
  );
}

export default Teams;

function CreateCards(cards: TeamMemberCardProps[], shuffle: boolean = true): JSX.Element[] {
  let _cards = cards.map((card: TeamMemberCardProps) => {
    return <TeamCard key={card.name} {...card} renderBanner={false} />;
  })

  if (shuffle) {
    _cards = shuffleFisherYates(_cards as []);
  }

  return _cards
}
