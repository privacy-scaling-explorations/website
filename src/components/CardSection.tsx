import React, { useState, useEffect } from 'react';
import MagicCard, { MagicCardProps } from './MagicCard';
import { shuffleFisherYates } from '../Utils';
import './CardSection.css';

interface ICardSection {
  title: string;
  cardData: MagicCardProps[];
  shuffle?: boolean;
  renderBanner?: boolean | undefined;
}

function CreateCards(cards: MagicCardProps[], shuffle: boolean = true, renderBanner: boolean | undefined): JSX.Element[] {
  let _cards = cards.map((card: MagicCardProps) => {
    if (renderBanner == true) {
      return <MagicCard key={card.name} {...card} renderBanner={true} />;
    } else if (renderBanner == false) {
      return <MagicCard key={card.name} {...card} renderBanner={false} />;
    }
    return <MagicCard key={card.name} {...card} />;
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
      <h1 className="CardSectionTitle mt-5 mb-4">{props.title}</h1>
      <div className="Cards">{cards}</div>
    </div>
  );
}

export default CardSection;
