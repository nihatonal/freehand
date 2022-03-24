import React, {useState} from "react";

import { PersonData } from "../assets/PersonData";
import "./Carousel.css";

const Carousel = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const [active, setActive] = useState(true);
  const [active2, setActive2] = useState(false);
  const [active3, setActive3] = useState(false);

  const nextSlide = () => {
    setCurrent(2);
    setActive3(true);
    setActive(false);
  };

  const prevSlide = () => {
    setCurrent(1);
    setActive2(true);
    setActive(false);
  };
  const currentSlide = () => {
    setCurrent(0);
    setActive2(false);
    setActive3(false);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <section className="person-info-carousel-wrapper">
      {/* <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide} />
      <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide} /> */}
      {PersonData.map((slide, index) => {
        return (
          <div
            className={index === current ? "slide activeSlide" : "slide"}
            key={index}
          >
            {index === current && (
              <div></div>
            )}
          </div>
        );
      })}

      <div className="dots-wrapper-carousel">
        <span
          onClick={prevSlide}
          className={!active2 ? "dot" : "dot activeDot"}
        ></span>
        <span
          onClick={currentSlide}
          className={!active  ? "dot" : "dot activeDot"}
        ></span>
        <span
          onClick={nextSlide}
          className={!active3 ? "dot" : "dot activeDot"}
        ></span>
      </div>
    </section>
  );
};

export default Carousel;