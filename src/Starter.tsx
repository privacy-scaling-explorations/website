import React from 'react';
import logo from './images/pse-logo.svg';
import arrow from './images/arrow.svg';
import discord from './images/discord.svg';
import twitter from './images/twitter.svg';
import './Starter.css'

function Starter() {
  return (
      <div className="starter">
        <img src={logo} alt="eth pse logo" className="ethlogo" />
        <h1>
          Welcome to
          <br />
          Privacy & Scaling Explorations
        </h1>
        <p>
          A multidisciplinary team supported by the Ethereum Foundation. PSE explores new use cases
          for zero knowledge proofs and other cryptographic primitives through research and
          proof-of-concept implementation.
          <br />
          We facilitate the integration of ZK primitives into decentralized applications.
        </p>
        <div className="center">
          <div className="link">
            <a href="https://twitter.com/PrivacyScaling">
              <img src={twitter} alt="" className="icon" />
              <div>Twitter</div>
            </a>
          </div>
          <div className="link">
            <a href="https://discord.gg/g5YTV7HHbh">
              <img src={discord} alt="" className="icon" />
              <div>Discord</div>
            </a>
          </div>
        </div>
        <div className="col-md-12 arrow">
          <img src={arrow} alt="" />
          <div className="fst-italic" style={{ opacity: '75%', paddingTop: '1rem' }}>
            more info below
          </div>
        </div>
      </div>
  );
}

export default Starter;
