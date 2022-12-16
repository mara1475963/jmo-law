import React from "react";
import ActualityList from "../actualityList/actualityList";
import "./header.scss";
import Slideshow from "../slideshow/slideshow";

const Header = () => {
  return (
    <header>
      <div className="title">
        <h1>
          <span>Právo/byznys/IT</span>
        </h1>
        <h4>Advokáti vašich projektů</h4>
      </div>
      <div className="vl"></div>
      <Slideshow />
    </header>
  );
};

export default Header;
