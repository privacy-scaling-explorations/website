import logo from '../images/pse-logo.svg';
import arrow from '../images/arrow.svg';
import discord from '../images/discord.svg';
import twitter from '../images/twitter.svg';
import './Starter.css';

function Starter() {
  return (
    <div className="starter">
      <img src={logo} alt="eth pse logo" className="pselogo" />
      <div className="intro h-100 p-3 bg-light-purple border border-5 border-dark">
        <h1 className="pt-3 pb-4">Welcome to Privacy & Scaling Explorations</h1>
        <p>
          A multidisciplinary team supported by the Ethereum Foundation. PSE explores new use cases
          for zero knowledge proofs and other cryptographic primitives through research and
          proof-of-concept implementation.
        </p>
        <p className="pb-2">
          We facilitate the integration of ZK primitives into decentralized applications.
        </p>
        <button className="btn bg-pink box-shadow mb-3">We are hiring!</button>
      </div>
      <div className="center">
        <div className="link">
          <a href="https://twitter.com/PrivacyScaling" className="btn bg-aqua box-shadow">
            <img src={twitter} alt="" className="icon" />
            <div>Twitter</div>
          </a>
        </div>
        <div className="link">
          <a href="https://discord.gg/g5YTV7HHbh" className="btn bg-green box-shadow">
            <img src={discord} alt="" className="icon" />
            <div>Discord</div>
          </a>
        </div>
      </div>
      <div className="col-md-12 arrow">
        <img src={arrow} alt="" />
        <div className="fst-italic more-info" style={{ opacity: '85%', paddingTop: '1rem' }}>
          more info below
        </div>
      </div>
    </div>
  );
}

export default Starter;
