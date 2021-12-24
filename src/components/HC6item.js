import React from 'react';
import style from "../styles/HC6.module.css";
import { FaAngleRight } from "react-icons/fa";

const HC6item = ({card}) => {
    return (
        <div className={style.hc6item_maincont} style={{ backgroundColor: card.bg_color }}>
        <div className={style.hc6_details}>
          <img className={style.hc6item_img} src={card.icon.image_url} alt="" />
          {card.formatted_title.text}
        </div>
        <FaAngleRight/>
      </div>
    )
}

export default HC6item;
