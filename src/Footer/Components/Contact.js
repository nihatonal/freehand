import React from "react";


import './FooterItems.css';

const Contact = () => {
  return (
    <div className="footer_item-wrapper">
      <h4 className="footer_item-title">CONTACT US</h4>
      <div className="footer_items contact">
        <p>We’re Always Happy to Help</p>
        <a href="#/" className='email'  onClick={() => window.location = 'mailto:onalnihat1986@gmail.com'}>mail@freehand.io</a>
      </div>
    </div>
  );
};

export default Contact;
