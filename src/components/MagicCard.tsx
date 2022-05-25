import globe from '../images/globe.svg';
import github from '../images/github.svg';
import discord from '../images/discord.svg';
import twitter from '../images/twitter.svg';
import telegram from '../images/telegram.svg';
import './MagicCard.css';
import ColorHash from 'color-hash'

export interface CardProps {
  name: string;
  short_name?: string;
  description: string | string[];
  long_description?: string | string[];
  image?: string;
  links?: Links[];
}

interface Links {
  github?: string;
  website?: string;
  discord?: string;
  twitter?: string;
  telegram?: string;
}

function renderLink(url: string, source: string, icon: string): any {
  return (
    <div className="link" key={url}>
      <a href={url} target="_blank" rel="noopener noreferrer">
        <img className="icon" src={icon} alt={source} />
        <div className="link-title">{source}</div>
      </a>
    </div>
  );
}

function renderImage(name: string): any {
  let hueRange = { min: 45, max: 360 }
  let colorHashText = new ColorHash({hue: hueRange, lightness: [0.8, 0.9]}).hex(name);
  let colorHashBG = new ColorHash({hue: hueRange, lightness: [0.35, 0.4], saturation: [0.65, 0.85, 1]}).hex(name);
  return (
    <svg height="150px" width="350px" style={{backgroundColor: colorHashBG}} className="card-img-top">
      <text text-anchor="middle" x="175px" y="85px" fill={colorHashText} style={{ fontSize: "2.5rem", fontStyle: "italic"}}>{name}</text>
    </svg>
  );
}

function renderDescription(description: string | string[]): any {
  if (typeof description === 'string') {
    return (
      <p className="card-text">{description}</p>
    );
  }
  return description.map((text: string, index: number) => {
    return (
      <p className="card-text" key={index}>{text}</p>
    );
  });
}

function MagicCard(props: CardProps) {
  let links = props.links
    ? props.links.map((link) => {
        if (link.github) {
          return renderLink(link.github, 'github', github);
        } else if (link.website) {
          return renderLink(link.website, 'website', globe);
        } else if (link.discord) {
          return renderLink(link.discord, 'discord', discord);
        } else if (link.twitter) {
          return renderLink(link.twitter, 'twitter', twitter);
        } else if (link.telegram) {
          return renderLink(link.telegram, 'telegram', telegram);
        } else {
          return null;
        }
      })
    : null;

  let img = (() => {
    try {
      if (props.image) {
        return (
          <img className="card-img-top" src={require(`../images/${props.image}`)} alt={props.name} />
        );
      } else {
        return renderImage(props.short_name || props.name);
      }
    } catch (e) {
      return renderImage(props.short_name || props.name);
    }
  })();

  return (
    <div className="card border border-5 border-dark p-3">
      {img}
      <div className="card-body">
        <h5 className="card-title">{props.name}</h5>
        <p className="card-text">{props.description}</p>
        <div className="card-footer">{links}</div>
      </div>
    </div>
  );
}

export default MagicCard;
