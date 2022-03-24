import React from "react";

import LogoImg from "../../assests/images/Logo.png";

import './Logo.css';
const Logo = () => {
  return (
    <div className="logo-wrapper">
      <img src={LogoImg} alt="logo" />
      <h3 className="logo">FreeHand</h3>
    </div>
  );
};

export default Logo;
