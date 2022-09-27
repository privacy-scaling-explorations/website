import { useState } from 'react';
import logo from '../images/tlsn-logo.svg';
import discord from '../images/discord_round.svg';
import github from "../images/github.svg";
import './Navbar.css'
import config from "../config.json";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  };

  return (
    <nav id="nav-menu">
      <nav id="navbar" aria-label="Navigation for Desktop">
        <a href="#" id="tlsn-link">
          <img src={logo} alt="tlsn logo" />
        </a>
        <div id="anchor-links" className="nav-links">
          <a href={config.links.docs}>Docs</a>
          <a href="#Roadmap">Roadmap</a>
          <a href="#About">About</a>
        </div>
        <div id="social-links" className="nav-links">
            <a href={config.links.discord} aria-label="TLSNotary Discord link" target="_blank" rel="noopener noreferrer">
              <img src={discord} alt="TLSNotary Discord" />
            </a>
            <a href={config.links.repo} aria-label="TLSNotary Github Repo">
              <img src={github} alt="Github" />
            </a>
        </div>
        <div id="menu-link" onClick={() => { toggleMenu() }}>{isOpen ? 'Close' : 'Menu'}</div>
      </nav>
      <nav id="nav-menu-mobile" aria-label="Navigation for Mobile" className={isOpen ? 'menu-open' : 'menu-closed'}>
        <a href="#top">About</a>
        <a href="#Projects">Projects</a>
        <a href="#Team">Members</a>
      </nav>
    </nav>
  )
}

export default Navbar;
