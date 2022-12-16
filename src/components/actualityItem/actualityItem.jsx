import React from "react";
import "./actualityItem.scss";

const ActualityItem = ({ actuality }) => {
  const { title, date, imageUrl } = actuality;
  console.log();
  return (
    <div className="actuality-item-container">
      <img src={imageUrl} />
      <h4 className="title">{title}</h4>
      <span className="date">{date}</span>
    </div>
  );
};

export default ActualityItem;
