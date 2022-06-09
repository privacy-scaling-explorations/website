
import discord from '../images/discord_round.svg';
import './Discord.css'

// Discord call to action
function Discord() {
  return (
    <div id="call_to_action">
      <h2 className="text-3xl">
        Join our conversation on Discord!
      </h2>
      <a href="https://discord.gg/g5YTV7HHbh" target="_blank" rel="noopener noreferrer">
        <img src={discord} alt="" />
      </a>
    </div>
  )
}

export default Discord;
