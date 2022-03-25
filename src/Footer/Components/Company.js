import React from "react";


import './FooterItems.css';

const Company = () => {
  return (
    <div className="footer_item-wrapper">
      <h4 className="footer_item-title">Company</h4>
      <div className="footer_items company">
        <a href="#/">About</a>
        <a href="#/">Terms</a>
        <a href="#/">Privacy Policy</a>
        <a href="#/">Careers</a>
      </div>
    </div>
  );
};

export default Company;
