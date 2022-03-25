import React, { useState } from "react";

import { SlideData } from "../../assets/SlideData";
import arrow from "../../assets/images/arrow.svg";
import "./Carousel.css";

const Carousel = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <section className="carousel-wrapper">
      <div className="arrow left" onClick={prevSlide}>
        <img src={arrow} alt="arrow" />
      </div>
      <div className="arrow right">
        <img src={arrow} alt="arrow" onClick={nextSlide} />
      </div>
      {/* <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide} />
      <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide} /> */}
     
        {SlideData.map((slide, index) => {
          return (
            <div
              className={index === current ? "slide activeSlide" : "slide"}
              key={index}
            >
              {index === current && (
                <div className="slide-image-wrapper">
                  <img src={slide.image} alt={slide.id} />
                </div>
              )}
            </div>
          );
        })}

    </section>
  );
};

export default Carousel;
