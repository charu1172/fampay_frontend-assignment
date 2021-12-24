import React, { useState, useEffect } from "react";
import style from "../styles/HC5.module.css";
import HC5item from "./HC5item";

const HC5Container = ({ hc5data }) => {
  const [cards, setCards] = useState();

  useEffect(() => {
    setCards(hc5data?.[0].cards);
  }, [hc5data]);

  return (
    <div className={style.hc5_maincont}>
      {cards === undefined ? (
        <p>Loading...</p>
      ) : (
        cards.map((card) => {
          return <HC5item card={card} key={card.name} />;
        })
      )}
   </div>
  );
};

export default HC5Container;
