import React from "react";
import "../assets/css/AnimeCart.css";

export const AnimeCart = ({ title, image }) => {
  return (
    <div className="AnimeCart">
      <div
        className="AnimeImage"
        style={{
          backgroundImage: `url(${image})`,
        }}
      ></div>
      <p>{title}</p>
    </div>
  );
};
