import React, { useState, useEffect } from "react";
// import styles from "../styles/HC1.module.css";
import HC1item from "./HC1item";

const HC1 = ({ hc1data }) => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    setCards(hc1data?.[0].cards);
  }, [hc1data]);

  return (
    <>
      {hc1data === undefined ? (
        <p>Loading...</p>
      ) : (
        hc1data.map((card) => {
          return <HC1item card={card} key={card.name} />;
        })
      )}
    </>
  );
};

export default HC1;
