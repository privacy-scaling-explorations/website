import { useState } from 'react';
import logo from '../images/pse-logo.svg';
import discord from '../images/discord_round.svg';
import twitter from '../images/twitter_round.svg';
import medium from '../images/medium-circle.svg';
import './Navbar.css'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  };

  return (
    <nav id="nav-menu">
      <nav id="navbar" aria-label="Navigation for Desktop">
        <div id="anchor-links" className="nav-links">
          <a href="#top">About</a>
          <a href="#Projects">Projects</a>
          <a href="#Team">Members</a>
        </div>
        <a href="#" id="pse-link">
          <img src={logo} alt="pse logo" />
        </a>
        <div id="social-links" className="nav-links">
          <a id="job-openings" href="https://jobs.lever.co/ethereumfoundation/?department=Ethereum%20Foundation&team=Privacy%20and%20Scaling%20Explorations" target="_blank" rel="noopener noreferrer">Job Openings</a>
          <a href="https://twitter.com/PrivacyScaling" aria-label="PSE Twitter link" target="_blank" rel="noopener noreferrer">
            <img src={twitter} alt="" />
          </a>
          <a href="https://discord.gg/g5YTV7HHbh" aria-label="PSE Discord link" target="_blank" rel="noopener noreferrer">
            <img src={discord} alt="" />
          </a>
          <a href="https://medium.com/privacy-scaling-explorations" aria-label="PSE medium" target="_blank" rel="noopener noreferrer">
            <img src={medium} alt="" />
          </a>
        </div>
        <div id="menu-link" onClick={() => { toggleMenu() }}>{isOpen ? 'Close' : 'Menu'}</div>
      </nav>
      <nav id="nav-menu-mobile" aria-label="Navigation for Mobile" className={isOpen ? 'menu-open' : 'menu-closed'}>
        <a href="#top">About</a>
        <a href="#Projects">Projects</a>
        <a href="#Team">Members</a>
        <a id="job-openings-mobile" href="https://jobs.lever.co/ethereumfoundation/?department=Ethereum%20Foundation&team=Privacy%20and%20Scaling%20Explorations" target="_blank" rel="noopener noreferrer">Job Openings</a>
      </nav>
    </nav>
  )
}

export default Navbar;
