import globe from './images/globe.svg';
import github from './images/github.svg';
import discord from './images/discord.svg';
import twitter from './images/twitter.svg';
import telegram from './images/telegram.svg';
import './ProjectCard.css'

export interface ProjectProps {
  name: string;
  description: string;
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
    <div className="link" key={url} >
      <a href={url} target="_blank" rel="noopener noreferrer">
        <img className="icon" src={icon} alt={source} />
        <div className="link-title">{source}</div>
      </a>
    </div>
  );
}

function ProjectCard(props: ProjectProps) {
  let links = props.links ? props.links.map((link) => {
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
  }) : null;

  let img = (() => {
    try {
      if (props.image) {
        return (<img className="card-img-top" src={require(`./images/${props.image}`)} alt={props.name} />);
      }
      else {
        return null;
      }
    } catch (e) {
      return null;
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

export default ProjectCard;
