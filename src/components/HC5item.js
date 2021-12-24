import React from "react";
import style from "../styles/HC5.module.css";

const HC5item = ({ card }) => {
  return (
    <a href={card.url}>
      <img
        className={style.hc9item_img}
        src={card.bg_image.image_url}
        alt="card"
      />
    </a>
  );
};

export default HC5item;