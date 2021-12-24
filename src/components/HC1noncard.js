import React from "react";
import styles from "../styles/HC1.module.css";
import { FaAngleRight } from "react-icons/fa";

const HC1noncard = ({card}) => {
  return (
    <div
      className={styles.hc1itemnon_maincont}
      styles={{ backgroundColor: card.bg_color }}
    >
      <div className={styles.hc1_details}>
        <img className={styles.hc1item_img} src={card.icon.image_url} alt="" />
        {card.formatted_title.text}
      </div>
      <FaAngleRight />
    </div>
  );
};

export default HC1noncard;
