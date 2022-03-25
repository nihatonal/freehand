import React from "react";

import design from "../../assets/images/design.svg";
import commerce from "../../assets/images/e.svg";
import application from "../../assets/images/application.svg";
import "./Services.css";

const Services = () => {
  return (
    <div className="services-container">
      <p className="section-below-title ">OUR SERVICES</p>
      <h2 className="section-title">We build experience</h2>
      <p className="section-subtitle ">
        Lorem ipsum dolor sit amen, cocteau advising elif. Suspending varus enif
        in eros.
      </p>

      <div className="section-service_content-wrapper">
        <div className="section-service_content-item">
          <div className="section-service_content-item-img-wrapper">
            <img src={design} alt="design" />
          </div>
          <h3 className="section-service_content-item-title">Design</h3>
          <p className="section-service_content-item-text">
            Lorem ipsum dolor sit amen, cocteau advising elif. Suspending varus
            enif in eros.
          </p>
          <p className="section-service_content-item-tag">Learn more</p>
        </div>
        <div className="section-service_content-item">
          <div className="section-service_content-item-img-wrapper">
            <img src={commerce} alt="commerce" />
          </div>
          <h3 className="section-service_content-item-title">Commerce</h3>
          <p className="section-service_content-item-text">
            Lorem ipsum dolor sit amen, cocteau advising elif. Suspending varus
            enif in eros.
          </p>
          <p className="section-service_content-item-tag">Learn more</p>
        </div>
        <div className="section-service_content-item">
          <div className="section-service_content-item-img-wrapper">
            <img src={application} alt="application" />
          </div>
          <h3 className="section-service_content-item-title">Application</h3>
          <p className="section-service_content-item-text">
            Lorem ipsum dolor sit amen, cocteau advising elif. Suspending varus
            enif in eros.
          </p>
          <p className="section-service_content-item-tag">Learn more</p>
        </div>
      </div>
    </div>
  );
};

export default Services;
