import React from "react";

import Button from "../../shared/components/Button";
import { SlideData } from "../../assets/SlideData";
import Carousel from "../../shared/components/Carousel";

import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="hero-content">
        <h1>Freehand your brand with a beautiful website</h1>
        <p className="hero-text">
          Lorem ipsum dolor sit amen, cocteau advising elif. Suspending
          varus enif in eros.
        </p>
        <div className="hero-btn-wrapper">
        <Button btnText="View Projects" className="btn-hero" />
        <Button btnText="Learn more" className="btn-hero" />

        </div>
      </div>
      <Carousel slides={SlideData} />
    </div>
  );
};

export default Hero;
