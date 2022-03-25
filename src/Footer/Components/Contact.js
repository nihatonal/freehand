import React from "react";


import './FooterItems.css';

const Contact = () => {
  return (
    <div className="footer_item-wrapper">
      <h4 className="footer_item-title">CONTACT US</h4>
      <div className="footer_items contact">
        <p>We’re Always Happy to Help</p>
        <p className='email'>mail@freehand.io</p>
      </div>
    </div>
  );
};

export default Contact;
