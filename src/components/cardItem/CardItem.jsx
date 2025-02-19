import React from "react";
import "./CardItem.css";

const CardItem = ({ image, tittle, desc }) => {
  return (
    <div className="card-container">
      <div>
        <img src={image} alt="logo stack" className="image-card-container" />
      </div>
      <div>
        <div>
          <h1 className="card-tittle">{tittle}</h1>
          <p className="card-desc">{desc}</p>
        </div>
      </div>
    </div>
  );
};

export default CardItem;
