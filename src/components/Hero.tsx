import github from "../images/github.svg";
import docs from "../images/docs.svg";
import rust from "../images/rust-logo-blk.svg";
import "./Hero.css";
import config from "../config.json";

const Hero = () => (
  <div id="Hero">
    <h2 className="name">TLSNotary</h2>
    <h1>
      Proof of data authenticity
    </h1>
    <div style={{ height: "1.375rem" }} />
    <p>
      Export data from any web application and prove facts about it without compromising on privacy.
    </p>
    <div style={{ height: "1.375rem" }} />
    <div className="links">
      <div className="docs-link">
        <a href={config.links.docs}>
          <button className="pill-button">
            Documentation
            <img className="button-docs" src={docs} alt="docs"></img>
          </button>
        </a>
      </div>
      <div className="api-docs-link">
        <a href={config.links.api}>
          <button className="pill-button">
            API
            <img className="button-docs" src={rust} alt="api docs"></img>
          </button>
        </a>
      </div>
      <div className="repo-link">
        <a href={config.links.repo}>
          <button className="pill-button">
            Source
            <img className="button-github" src={github} alt="github"></img>
          </button>
        </a>
      </div>
    </div>
  </div>
);

export default Hero;
