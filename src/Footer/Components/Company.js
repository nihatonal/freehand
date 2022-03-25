import React from "react";


import './FooterItems.css';

const Company = () => {
  return (
    <div className="footer_item-wrapper">
      <h4 className="footer_item-title">Company</h4>
      <div className="footer_items company">
        <p>About</p>
        <p>Terms</p>
        <p>Privacy Policy</p>
        <p>Careers</p>
      </div>
    </div>
  );
};

export default Company;
