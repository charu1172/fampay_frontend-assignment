import React, { useState } from "react";
import style from "../styles/HC3.module.css";
import hand from "../assets/hand.svg";
import bell from "../assets/bellicon.svg";
import dismiss from "../assets/dismissicon.svg";
import useLongPress from "./functions.js";

const HC3 = (props) => {

  const {
    title,
    formattedTitle: { text: formattedTitle },
    description,
    formattedDescription: { text: formattedDescription },
    bgImage,  
    bg_color,
    name,
    cta,
  } = props;

  const {
    text: btnText,
    text_color: btnTextColor,
    url: btnUrl,
  } = cta[0];

  const [longPressed, setLongPressed] = useState(false);
  const [cardRemoved, setCardRemoved] = useState(false);

  const onLongPress = () => {
    setLongPressed((prevState) => !prevState);
  };

  const removeCard = (cardName) => {
    setCardRemoved(true);
    const localStorageItems = JSON.parse(localStorage.getItem('removedBigDisplayCards'));
    if (localStorageItems) {
      localStorageItems.push(cardName);
      localStorage.setItem('removedBigDisplayCards', JSON.stringify(localStorageItems));
    }
    else localStorage.setItem('removedBigDisplayCards', JSON.stringify([cardName]));
  };

  const defaultOptions = { shouldPreventDefault: true, delay: 500 };
  const longPressEvent = useLongPress(onLongPress, defaultOptions);

  const isCardInvalid = () => {
    const localStorageItems = JSON.parse(localStorage.getItem('removedBigDisplayCards'));
    const checkIsCardInRemovedArray = (items) => items === name;
    if (localStorageItems) {
      return localStorageItems.some(checkIsCardInRemovedArray);
    }
    return false;
  };

  if (isCardInvalid()) return null;

  return (
    <div className={style.hc3item_maincont} style={{ display: cardRemoved ? 'none' : '' }}>
      <div
        className={style.hc3item_cont}
        key={name}
        style={{ backgroundColor: "#454AA6", transform: `translateX(${longPressed ? '114px' : '0px'})` }}
        {...longPressEvent}
      >
         <img src={hand} alt="handimg"/>
        <div className={style.title}>
          {formattedTitle}
        </div>
        <div className={style.description}>
          {formattedDescription}
        </div>
        <div className={style.cardActions}>
          {cta.map((action) => (
            <a href={action.url} key={action.text}>
              <button className={style.button} type="button" style={{ backgroundColor: action.bg_color, color: action.text_color }}>{action.text}</button>
            </a>
          ))}
        </div>
      </div>
      <div className={style.back_maincont}>
        <button className={style.backbutton} type="button" title="Remind me later about this" onClick={() => removeCard(name)}>
          <img src={bell} alt="Remind Later" />
          <div className={style.backtext}>
            remind later
          </div>
        </button>
        <button className={style.backbutton} type="button" title="Dismiss this card" onClick={() => removeCard(name)}>
          <img src={dismiss} alt="Dismiss Nowr" />
          <div className={style.backtext}>
            dismiss now
          </div>
        </button>
      </div>
    </div>
  )
};

export default HC3;
