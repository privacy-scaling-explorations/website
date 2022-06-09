import globe from "../images/globe.svg";
import github from "../images/github.svg";
import discord from "../images/discord_round.svg";
import twitter from "../images/twitter_round.svg";
import telegram from "../images/telegram.svg";
import './TeamLinkRow.css'
const images = {
  github,
  discord,
  twitter,
  telegram,
} as any

export default ({ provider, url }: any) => (
  <a className="team-link" href={url} target="_blank" rel="noopener noreferrer">
    <div className="team-link-title">{provider}</div>
    <img className="team-icon" src={images[provider] || globe} alt={''} />
  </a>
)
