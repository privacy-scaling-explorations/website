import "./Pagesigner.css";
import ethlogo from '../images/eth-logo-blue.svg';
import config from "../config.json";

export default function Pagesigner() {
  return (
    <div id="Pagesigner">
      <div className="container">
        <h3>
          Looking for our legacy implementation?
        </h3>
        <div style={{ height: "1.375rem" }} />
        <a href={config.links.legacy}>
          <button className="pill-button">See PageSigner</button>
        </a>
      </div>
    </div>
  );
}
