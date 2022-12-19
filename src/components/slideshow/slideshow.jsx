import React from "react";
import { Slide } from "react-slideshow-image";
import "./slideshow.css";
import "react-slideshow-image/dist/styles.css";
import ActualityList from "../actualityList/actualityList";

const slideImages = [
  {
    url: "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
    caption: "Slide 1",
  },
  {
    url: "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
    caption: "Slide 2",
  },
  {
    url: "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
    caption: "Slide 3",
  },
];

const Slideshow = () => {
  const properties = {
    duration: 3000,
    autoplay: true,
    transitionDuration: 500,
    arrows: false,
    infinite: true,
    easing: "ease",
    indicators: true,
  };
  return (
    <div className="slide-container">
      <Slide {...properties}>
        {slideImages.map((slideImage, index) => (
          <div className="each-slide" key={index}>
            <ActualityList count={3} styleClass="actuality-list-container" />
          </div>
        ))}
      </Slide>
    </div>
  );
};
export default Slideshow;
