import './AboutCard.css';
import MagicCard from './MagicCard';

function AboutCard() {
  let cardData = { name: 'About us', description: 'lorem ipsum' };

  return (
    <div>
      <MagicCard {...cardData} renderBanner={false} />
    </div>
  );
}

export default AboutCard;
