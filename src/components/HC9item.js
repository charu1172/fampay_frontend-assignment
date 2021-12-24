import React from "react";
import styles from "../styles/HC9.module.css";

const HC9item = ({ card }) => {
  return (
      <a href={card.url}>
        {/* <p>{card.name}</p> */}
        <img
          className={styles.hc9item_img}
          src={card.bg_image.image_url}
          alt="card"
          style={{ height: `${card.height}px` }}
        />
      </a>
  );
};

export default HC9item;
