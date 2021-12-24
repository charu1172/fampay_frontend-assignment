import React from "react";
import styles from "../styles/HC1.module.css";
import HC1card from "./HC1card";
import HC1noncard from './HC1noncard'

const HC1item = ({ card }) => {
  console.log(card);
  return (
    <>
      {card.is_scrollable ? (
        <div className={styles.hc1_maincont}>
          {card.cards.map((card) => (
            <HC1card card={card} key={card.name} />
          ))}
        </div>
      ) : (
        <div className={styles.hc1non}>
          {card.cards.map((card) => (
            <HC1noncard card={card} key={card.name} />
          ))}
        </div>
      )}
    </>
  );
};

export default HC1item;

