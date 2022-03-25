import React from "react";

import NavLinks from "../Components/NavLinks";
import Button from "../../shared/components/Button";
import Logo from "../Components/Logo";

import "./Header.css";

const Header = (props) => {
  return (
    <div className="header container">
      <Logo />
      <NavLinks />
      <div className="btn-wrapper">
        <Button btnText="Sign in" />
        <Button btnText="Login" />
      </div>
    </div>
  );
};

export default Header;
