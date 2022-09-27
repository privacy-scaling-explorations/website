import "./Footer.css";
import logo from '../images/tlsn-logo.svg';
import discord from "../images/discord_round.svg";
import config from "../config.json";

function copyright() {
  let websiteCreationYear = 2022;
  let currentYear = new Date().getFullYear();
  if (currentYear > websiteCreationYear) {
    return `${websiteCreationYear} - ${currentYear}`;
  } else {
    return websiteCreationYear;
  }
}

export default function Footer() {
  return (
    <footer>
      <div id="copyright">
        <img src={logo} alt="Pse Logo" />
        <div id="footer-text">
          <p id="footer-title">TLSNotary</p>
          <p>Proof of data authenticity</p>
        </div>
      </div>
      <div id="footer-links">
        <a href={config.links.discord} target="_blank" rel="noopener noreferrer">
          <span className="cta">Chat with us</span>
          <img src={discord} alt="Discord Icon" />
        </a>
      </div>
    </footer>
  );
}
