import React, { useState, useEffect } from "react";
import style from "../styles/HC6.module.css";
import HC6item from "./HC6item.js";

const HC6Container = ({ hc6data }) => {
  const [cards, setCards] = useState();

  useEffect(() => {
    setCards(hc6data?.[0].cards);
  }, [hc6data]);

  return (
    <div className={style.hc6_maincont}>
      {cards === undefined ? (
        <p>Loading...</p>
      ) : (
        cards.map((card) => {
          return <HC6item card={card} key={card.name} />;
        })
      )}
    </div>
  );
};

export default HC6Container;
