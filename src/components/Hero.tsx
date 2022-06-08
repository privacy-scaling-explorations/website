import arrow from "../images/arrow.svg";
import discord from "../images/discord.svg";
import twitter from "../images/twitter.svg";
import "./Hero.css";

function Hero() {
  return (
    <div id="top" className="hero">
      <div className="intro">
        <p>Privacy & Scaling Explorations</p>
        <h1 className="pt-3 pb-4 title">Enhancing Ethereum through cryptographic research.</h1>
        <p className="pb-2">We facilitate the integration of ZK primitives into decentralized applications.</p>
        <a
          href="https://jobs.lever.co/ethereumfoundation/?department=Ethereum%20Foundation&team=Privacy%20and%20Scaling%20Explorations"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="btn bg-pink box-shadow mb-3">We are hiring!</button>
        </a>
      </div>
      <div className="center">
        <div className="link">
          <a
            href="https://twitter.com/PrivacyScaling"
            className="btn bg-aqua box-shadow"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={twitter} alt="" className="icon" />
            <div>Twitter</div>
          </a>
        </div>
        <div className="link">
          <a
            href="https://discord.gg/g5YTV7HHbh"
            className="btn bg-green box-shadow"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={discord} alt="" className="icon" />
            <div>Discord</div>
          </a>
        </div>
      </div>
      <div className="col-md-12 arrow">
        <img src={arrow} alt="" />
        <div className="fst-italic more-info" style={{ opacity: "85%", paddingTop: "1rem" }}>
          more info below
        </div>
      </div>
    </div>
  );
}

export default Hero;
