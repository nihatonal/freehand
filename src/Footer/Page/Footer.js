import React from "react";

import Links from "../Components/Links";
import Services from "../Components/Services";
import Company from "../Components/Company";
import Contact from "../Components/Contact";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <Links />
      <Services />
      <Company />
      <Contact />
      <p className='copyright'>Copyright © 2020. Crafted with love.</p>
    </footer>
  );
};

export default Footer;
