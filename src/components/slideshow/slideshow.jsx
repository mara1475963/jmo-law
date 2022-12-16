import React from "react";
import ActualityList from "../actualityList/actualityList";
import { Slide } from "react-slideshow-image";
import "./slideshow.css";
import "react-slideshow-image/dist/styles.css";

const Slideshow = () => {
  const properties = {
    duration: 5000,
    autoplay: false,
    transitionDuration: 500,
    arrows: false,
    infinite: true,
    easing: "ease",
    indicators: (i) => <div className="indicator">{i + 1}</div>,
  };
  return (
    <div className="slide-container">
      <Slide {...properties}>
        <div className="each-slide">
          <h1>hello</h1>
        </div>
      </Slide>
    </div>
  );
};

export default Slideshow;
