import './About.css';
import MagicCard from './MagicCard';

function About() {
  let cardData = { name: 'About us', description: 'lorem i' };

  return (
    <div>
      <MagicCard {...cardData} renderBanner={false} />
    </div>
  );
}

export default About;
