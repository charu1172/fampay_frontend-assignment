import React from "react";

const fetchdata = async () => {
  const url = "https://run.mocky.io/v3/fefcfbeb-5c12-4722-94ad-b8f92caad1ad";

  try {
    const resp = await fetch(url);
    const cards = await resp.json();
    return cards;
  } catch (error) {
    console.log(error);
  }
};

export default fetchdata;
