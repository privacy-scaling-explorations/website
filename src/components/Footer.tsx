import "./Footer.css";
import logo from '../images/pse-logo.svg';
import discord from "../images/discord_round.svg";
import twitter from "../images/twitter_round.svg";

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
          <p id="footer-title">Privacy and Scaling Exploration Team © {copyright()}</p>
          <p>A multidisciplinary team supported by the Ethereum Foundation.</p>
        </div>
      </div>
      <div id="footer-links">
        <a href="https://discord.gg/g5YTV7HHbh">
          <span>Chat with us</span>
          <img src={discord} alt="Discord Icon" />
        </a>
        <a href="https://twitter.com/PrivacyScaling">
          <span>Follow Updates</span>
          <img src={twitter} alt="Twitter Icon" />
        </a>
      </div>
    </footer>
  );
}
