import globe from "../images/globe.svg";
import github from "../images/github.svg";
import discord from "../images/discord_round.svg";
import twitter from "../images/twitter_round.svg";
import telegram from "../images/telegram.svg";
import "./TeamMemberCard.css";
const images = {
  github,
  discord,
  twitter,
  telegram,
} as any

export interface TeamMemberCardProps {
  name: string;
  short_name?: string;
  description: string | string[];
  long_description?: string | string[];
  image?: string;
  links?: Link[];
  renderBanner?: boolean;
}

interface Link {
  provider: string
  url: string
}

function renderDescription(description: string | string[]): any {
  if (typeof description === "string") {
    return <p className="card-text">{description}</p>;
  }
  return description.map((text: string, index: number) => {
    return (
      <p className="card-text" key={index}>
        {text}
      </p>
    );
  });
}

function TeamMemberCard(props: TeamMemberCardProps) {
  return (
    <div className="members-card">
      <div className="members-card-body">
        <div className="members-card-title">{props.name}</div>
        {renderDescription(props.description)}
      </div>
      <div className="members-card-footer">
        {(props.links || []).map(({ url, provider }) => (
          <a className="team-link" href={url} target="_blank" rel="noopener noreferrer" key={url}>
            <div className="team-link-title">{provider}</div>
            <img className="team-icon" src={images[provider] || globe} alt={''} />
          </a>
        ))}
      </div>
    </div>
  );
}

export default TeamMemberCard;
