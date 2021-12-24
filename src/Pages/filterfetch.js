import fetchdata from "./fetchdata";
import { CARDS_TYPES, SCROLLABLE } from "../constants.js";

const filterfetch = async () => {
  const { card_groups: cardGroups } = await fetchdata();
  const { HC1, HC3, HC5, HC6, HC9 } = CARDS_TYPES;

  const hc3data = cardGroups.filter((card) => card.design_type === HC3);
  const hc6data = cardGroups.filter((card) => card.design_type === HC6);
  const hc5data = cardGroups.filter((card) => card.design_type === HC5);
  const hc9data = cardGroups.filter((card) => card.design_type === HC9);
  const hc1data = cardGroups.filter((card) => card.design_type === HC1);

  return {
   hc3data,
   hc6data,
   hc5data,
   hc9data,
   hc1data
  };
};

export default filterfetch;
