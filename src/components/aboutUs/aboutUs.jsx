import React, { useRef, useState } from "react";
import ServiceDetail from "../../components/service-detail/service-detail";
import "./aboutUs.scss";
import FiremniPravo from "../service-detail-bodies/firemniPravo";
import PravoNemovitosti from "../service-detail-bodies/pravoNemovitosti";
import AboutUsDetail from "../aboutUs-detail/aboutUs-detail";
import LukasJansa from "../aboutUs-bodies/lukasJansa";

const AboutUs = () => {
  const profiles = [
    {
      name: "Lukáš Jansa",
      imgProfile: "assets/profile-images/profile1.PNG",
      description: `Lukáš patří mezi přední
    odborníky na IT právo v ČR.
    Přednáší také na konferencích
    a odborných seminářích. Lukáš
    je autorem projektu
    chcemepomahat.cz, který
    podporoval lidi s postižením.`,
      body: <LukasJansa profile={"/assets/profile-images/profile1.PNG"} />,
    },
    {
      name: "Lukáš Jansa",
      imgProfile: "assets/profile-images/profile1.PNG",
      description: `Lukáš patří mezi přední
    odborníky na IT právo v ČR.
    Přednáší také na konferencích
    a odborných seminářích. Lukáš
    je autorem projektu
    chcemepomahat.cz, který
    podporoval lidi s postižením.`,
      body: <LukasJansa />,
    },
    {
      name: "Lukáš Jansa",
      imgProfile: "assets/profile-images/profile1.PNG",
      description: `Lukáš patří mezi přední
    odborníky na IT právo v ČR.
    Přednáší také na konferencích
    a odborných seminářích. Lukáš
    je autorem projektu
    chcemepomahat.cz, který
    podporoval lidi s postižením.`,
      body: <LukasJansa />,
    },
    {
      name: "Lukáš Jansa",
      imgProfile: "assets/profile-images/profile1.PNG",
      description: `Lukáš patří mezi přední
    odborníky na IT právo v ČR.
    Přednáší také na konferencích
    a odborných seminářích. Lukáš
    je autorem projektu
    chcemepomahat.cz, který
    podporoval lidi s postižením.`,
      body: <LukasJansa />,
    },
    {
      name: "Lukáš Jansa",
      imgProfile: "assets/profile-images/profile1.PNG",
      description: `Lukáš patří mezi přední
    odborníky na IT právo v ČR.
    Přednáší také na konferencích
    a odborných seminářích. Lukáš
    je autorem projektu
    chcemepomahat.cz, který
    podporoval lidi s postižením.`,
      body: <LukasJansa />,
    },
    {
      name: "Lukáš Jansa",
      imgProfile: "assets/profile-images/profile1.PNG",
      description: `Lukáš patří mezi přední
    odborníky na IT právo v ČR.
    Přednáší také na konferencích
    a odborných seminářích. Lukáš
    je autorem projektu
    chcemepomahat.cz, který
    podporoval lidi s postižením.`,
      body: <LukasJansa />,
    },
  ];
  const [selected, setSelected] = useState(null);

  const myRef = useRef(null);

  const executeScroll = () => {
    myRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const onClickHandler = (id) => {
    if (id === null) {
      setSelected(null);
      return;
    }
    setSelected({ ...profiles[id] });
    // executeScroll();
  };

  return (
    <>
      <div className="profiles-container">
        {profiles.map(({ name, imgProfile, description }, idx) => {
          const [firstname, lastname] = name.split(" ");
          return (
            <div
              className="profile-container"
              key={idx}
              onClick={() => onClickHandler(idx)}
            >
              <h3>
                {firstname} <span style={{ color: "red" }}>{lastname}</span>
              </h3>
              <img src={imgProfile} />
              <div>{description}</div>
              <a onClick={() => onClickHandler(idx)}>Vice...</a>
            </div>
          );
        })}
      </div>

      {selected && (
        <div ref={myRef}>
          <button onClick={() => onClickHandler(null)}>X</button>
          <AboutUsDetail profile={selected} />
        </div>
      )}

      <span id="section--3"></span>
    </>
  );
};

export default AboutUs;
