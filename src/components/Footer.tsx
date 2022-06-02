import "./Footer.css";
import discord from "../images/discord.svg";
import twitter from "../images/twitter.svg";

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
    <div className="footer">
      <p id="copyright">The Privacy and Scaling Exploration Team © {copyright()}</p>
      <p >
        <a href="https://twitter.com/PrivacyScaling" className="ms-3">
          <img src={twitter} alt="" className="icon" />
          <span>Twitter</span>
        </a>
        <a href="https://discord.gg/g5YTV7HHbh" className="ms-3">
          <img src={discord} alt="" className="icon" />
          <span>Discord</span>
        </a>
      </p>
    </div>
  );
}
