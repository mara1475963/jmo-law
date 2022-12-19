import React, { useState } from "react";
import ActualityList from "../actualityList/actualityList";
import "./header.scss";
import Slideshow from "../slideshow/slideshow";

const Header = () => {
  const [sticky, setSticky] = useState(false);

  const changeValueonScroll = () => {
    const scrollVal = document.documentElement.scrollTop;

    if (scrollVal > document.querySelector("header").offsetHeight) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  window.addEventListener("scroll", changeValueonScroll);

  return (
    <header>
      <nav className={`nav ${sticky ? "sticky" : ""}`}>
        <img src="img/logo.png" alt="Logo" class="nav__logo" id="logo" />
        <ul class="nav__links">
          <li class="nav__item">
            <a class="nav__link" href="#section--1">
              nase sluzby
            </a>
          </li>
          <li class="nav__item">
            <a class="nav__link" href="#section--2">
              o nas
            </a>
          </li>
          <li class="nav__item">
            <a class="nav__link" href="#section--3">
              reference
            </a>
          </li>
          <li class="nav__item">
            <a class="nav__link" href="#section--4">
              kontakt
            </a>
          </li>
        </ul>
      </nav>
      <div className="header-divider"></div>
      <div className="header-main-section">
        <div className="title">
          <h1 className="header-section header-title">
            <span>Právo/byznys/IT</span>
          </h1>
          <h4>Advokáti vašich projektů</h4>
        </div>

        <div className="slideshow">
          <Slideshow />
        </div>
      </div>
      <span id="section--1"></span>
    </header>
  );
};

export default Header;
