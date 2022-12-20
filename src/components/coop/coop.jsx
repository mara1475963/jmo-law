import React from "react";
import "./coop.scss";
const Coop = () => {
  const images = [
    {
      url: "assets/rewards/reward1.PNG",
    },
    {
      url: "assets/rewards/reward1.PNG",
    },
    {
      url: "assets/rewards/reward1.PNG",
    },
    {
      url: "assets/rewards/reward1.PNG",
    },
  ];

  return (
    <div className="coop-container">
      <h3>Proc</h3>
      <div className="reasons">
        <span>
          <span className="big">1.</span> více než 20 let zkušeností
        </span>
        <span>
          <span className="big">2.</span> více než 20 let zkušeností
        </span>
        <span>
          <span className="big">3.</span> více než 20 let zkušeností
        </span>
        <span>
          <span className="big">4.</span> více než 20 let zkušeností
        </span>
        <span>
          <span className="big">5.</span> více než 20 let zkušeností
        </span>
        <span>
          <span className="big">6.</span> více než 20 let zkušeností
        </span>
      </div>
      <h3>Oceneni a plublikace</h3>
      <div className="rewards">
        {images.map(({ url }) => (
          <img src={url} />
        ))}
      </div>
    </div>
  );
};

export default Coop;
