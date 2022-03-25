import React from "react";

import Button from "../../shared/components/Button";

import "./Advertisement.css";

const Advertisement = () => {
  return (
    <div className="section_advertisement">
      
      <div className="section-advertisement_content-wrapper">
        <h2 className="section-title advertisement_title">
          Get started today and try 30 days free
        </h2>
        <p className="section-advertisement_content-wrapper-text">
          No contact, no set-up costs, just awesome way to organize your money.
        </p>
        <div className="section-advertisement_content-buttons">
            <Button
            btnText='Try it for free'
            className='section-advertisement_content-wrapper-btn' />
            <Button
            btnText='Watch Demo'
            className='section-advertisement_content-wrapper-btn' />
        </div>
      </div>
    </div>
  );
};

export default Advertisement;
