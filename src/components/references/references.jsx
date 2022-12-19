import React from "react";
import "./references.scss";

import { statistics } from "../../data/statistics";

const References = () => {
  const images = [
    {
      url: "assets/references/reference1.PNG",
    },
    {
      url: "assets/references/reference1.PNG",
    },
    {
      url: "assets/references/reference1.PNG",
    },
    {
      url: "assets/references/reference1.PNG",
    },
    {
      url: "assets/references/reference1.PNG",
    },
    {
      url: "assets/references/reference1.PNG",
    },
  ];

  return (
    <div className="references-container" id="section--3">
      {images.map(({ url }) => (
        <img src={url} />
      ))}
      <div className="statistics-container">
        {statistics.map(({ name, value }, idx) => (
          <div key={idx} className="statistic-item">
            <span className="number">{value}</span>
            <span>{name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default References;
