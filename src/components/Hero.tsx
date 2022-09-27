import github from "../images/github.svg";
import "./Hero.css";
import config from "../config.json";

const Hero = () => (
  <div id="Hero">
    <h2 className="name">TLSNotary</h2>
    <h1>
      Proof of data authenticity
    </h1>
    <p>
      Export data from any web application and prove facts about it without compromising on privacy.
    </p>
    <div className="flex space-x-2">
      <a href="https://tlsnotary.github.io/docs-mdbook/">
        <button className="pill-button">
          <p>View Documentation</p>
        </button>
      </a>
      <a href={config.links.repo}>
        <img src={github} alt="github"></img>
      </a>
    </div>
  </div>
);

export default Hero;
