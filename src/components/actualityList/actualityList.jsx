import React from "react";
import { actualities } from "../../data/actualities";
import ActualityItem from "../actualityItem/actualityItem";
import "./actualityList.css";
const ActualityList = () => {


  return (
    <div className="actuality-list-container">
      {actualities
        .filter((_, idx) => idx < 3)
        .map((actuality) => (
          <ActualityItem key={actuality.id} actuality={actuality} />
        ))}
      <h4>AKUTALITY</h4>
    </div>
  );
};

export default ActualityList;
