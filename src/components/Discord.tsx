import discord from "../images/discord_round.svg";
import "./Discord.css";

// Discord call to action
function Discord() {
  return (
    <div id="call_to_action">
      <div className="cta">
        <div className="discord-text text-2xl lg:text-3xl font-semibold">Come chat with us on Discord!</div>
        <a href="https://discord.gg/9XwESXtcN7" target="_blank" rel="noopener noreferrer" aria-label="TLSNotary Discord link">
          <img style={{ width: "4rem" }} src={discord} alt="" />
        </a>
      </div>
    </div>
  );
}

export default Discord;
