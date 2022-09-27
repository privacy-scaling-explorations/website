import "./About.css";
import ethlogo from '../images/eth-logo-blue.svg';
import config from "../config.json";

export default function About() {
  return (
    <div id="About">
      <div className="container">
        <img src={ethlogo}></img>
        <div style={{ height: "1.375rem" }} />
        <h3>
          TLSNotary is a public good & open source project supported by the Ethereum Foundation under the
          Privacy and Scaling Exploration Team.
        </h3>
        <div style={{ height: "1.375rem" }} />
        <a href={config.links.pse}>
          <button className="pill-button">Learn More</button>
        </a>
      </div>
    </div>
  );
}
