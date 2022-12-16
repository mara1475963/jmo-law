import React from "react";
import { actualities } from "../../data/actualities";
import ActualityItem from "../actualityItem/actualityItem";

const ReferenceList = () => {
  console.log(actualities);

  return (
    <div className="slide slide--2">
      {actualities
        .filter((_, idx) => idx < 3)
        .map((actuality) => (
          <ActualityItem key={actuality.id} actuality={actuality} />
        ))}
    </div>
  );
};

export default ReferenceList;
