
import discord from '../images/discord_round.svg';
import './Discord.css'

// Discord call to action
function Discord() {
  return (
    <div id="call_to_action">
      <div className="discord-text">
        Join our conversation on Discord!
      </div>
      <a href="https://discord.gg/g5YTV7HHbh" target="_blank" rel="noopener noreferrer" aria-label="PSE Discord link" >
        <img style={{ width: '4rem' }} src={discord} alt="" />
      </a>
    </div>
  )
}

export default Discord;
