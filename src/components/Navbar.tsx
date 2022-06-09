import logo from '../images/pse-logo.svg';
import discord from '../images/discord_round.svg';
import twitter from '../images/twitter_round.svg';
import './Navbar.css'

function Navbar() {
  return (
    <nav id="navbar">
      <div className="nav-links">
        <a href="#top">About</a>
        <a href="#Projects">Projects</a>
        <a href="#Team">Team</a>
      </div>
      <a href="#">
        <img src={logo} alt="pse logo" className="pselogo" />
      </a>
      <div className="nav-links">
        <a href="https://jobs.lever.co/ethereumfoundation/?department=Ethereum%20Foundation&team=Privacy%20and%20Scaling%20Explorations" target="_blank" rel="noopener noreferrer">Job Openings</a>
        <a href="https://twitter.com/PrivacyScaling" target="_blank" rel="noopener noreferrer">
          <img src={twitter} alt="" />
        </a>
        <a href="https://discord.gg/g5YTV7HHbh" target="_blank" rel="noopener noreferrer">
          <img src={discord} alt="" />
        </a>
      </div>
    </nav>
  )
}

export default Navbar;
