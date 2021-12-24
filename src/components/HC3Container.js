import React, { useState, useEffect } from "react";
import style from "../styles/HC3.module.css";
import HC3item from "./HC3item";

const HC3Container = ({ hc3data }) => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    setCards(hc3data?.[0].cards);
  }, [hc3data]);

  return (
    <div className={style.hc3_maincont}>
     
      {cards === undefined ? (
        <p>Loading...</p>
      ) : (
        cards.map((card) => {
          const {
            title,
            formatted_title: formattedTitle,
            description,
            formatted_description: formattedDescription,
            bg_image: bgImage,
            bg_color,
            name,
            cta,
            url,
          } = card;
          return (
            <HC3item
              title={title}
              formattedTitle={formattedTitle}
              description={description}
              formattedDescription={formattedDescription}
              bgImage={bgImage}
              bg_color={bg_color}
              name={name}
              cta={cta}
              url={url}
            />
          );
        })
      )}
    </div>
  );
};

export default HC3Container;
