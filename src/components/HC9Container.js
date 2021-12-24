import React, { useState, useEffect } from "react";
import styles from "../styles/HC9.module.css";
import HC9item from "./HC9item";

const HC9 = ({ hc9data }) => {
  const [cards, setCards] = useState();

  useEffect(() => {
    setCards(hc9data?.[0].cards);
  }, [hc9data]);

  return (
    <div className={styles.hc9_maincont}>
      {cards === undefined ? (
        <p>Loading...</p>
      ) : (
        cards.map((card) => {
          return <HC9item card={card} key={card.name} />;
        })
      )}
    </div>
  );
};

export default HC9;
