import CardSection from './CardSection';
import TeamData from '../data/Team.json';
import './TeamCard.css'


function TeamMemberCard() {
  return (
    <CardSection title="Team Members" cardData={TeamData} renderBanner={false}></CardSection>
  );
}

export default TeamMemberCard;
