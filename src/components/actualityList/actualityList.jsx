import React from "react";
import { actualities } from "../../data/actualities";
import ActualityItem from "../actualityItem/actualityItem";
import "./actualityList.css";
const ActualityList = ({ count, styleClass }) => {
  if (count != 3) count = actualities.length;

  return (
    <div className={styleClass}>
      {actualities
        .filter((_, idx) => idx < count)
        .map((actuality) => (
          <ActualityItem key={actuality.id} actuality={actuality} />
        ))}
      <h4>AKUTALITY</h4>
    </div>
  );
};

export default ActualityList;
