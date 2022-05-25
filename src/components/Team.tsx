import CardSection from './CardSection';
import TeamData from '../data/Team.json';


function Team() {
  return (
    <CardSection title="Team Members" cardData={TeamData} renderBanner={false}></CardSection>
  );
}

export default Team;
