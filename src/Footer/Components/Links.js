import React from "react";

import Logo from "../../Header/Components/Logo";

import instagram from "../../assets/images/instgram.svg";
import facebook from "../../assets/images/facebook.svg";
import github from "../../assets/images/github.svg";
import ball from "../../assets/images/ball.svg";
import twitter from "../../assets/images/twitter.svg";


import "./Links.css";
const Links = () => {
  return (
    <div className="links-container">
      <Logo />
      <p>
        We're brand strategy and digital design agency, building brands that
        matter in culture.
      </p>
      <div className="social-links">
        <div className="social-link">
          <img src={instagram} alt="instagram" />
        </div>
        <div className="social-link">
          <img src={facebook} alt="facebook" />
        </div>
        <div className="social-link">
          <img src={github} alt="github" />
        </div>
        <div className="social-link">
          <img src={ball} alt="ball" />
        </div>
        <div className="social-link">
          <img src={twitter} alt="twitter" />
        </div>
      </div>
    </div>
  );
};

export default Links;
