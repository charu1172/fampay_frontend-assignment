import "./App.css";
import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import filterfetch from "./Pages/filterfetch.js";

import HC3Container from "./components/HC3Container.js";
import HC5Container from "./components/HC5Container.js";
import HC6Container from "./components/HC6Container.js";
import HC9Container from "./components/HC9Container.js";
import HC1Container from "./components/HC1Container.js";

const App = () => {
  const [hc3data, sethc3data] = useState();
  const [hc6data, sethc6data] = useState();
  const [hc5data, sethc5data] = useState();
  const [hc9data, sethc9data] = useState();
  const [hc1data, sethc1data] = useState();
  // const [refresh, refresh] = useState(false);

  useEffect(() => {
    filterfetch().then((data) => {
      sethc3data(data.hc3data);
      sethc6data(data.hc6data);
      sethc5data(data.hc5data);
      sethc9data(data.hc9data);
      sethc1data(data.hc1data);
    });
  }, []);

  return (
    <>
      <Header />
      <div className="main-container">
        <HC3Container hc3data={hc3data} />
        <HC6Container hc6data={hc6data} />
        <HC5Container hc5data={hc5data} />
        <HC9Container hc9data={hc9data} />
        <HC1Container hc1data={hc1data} />
      </div>
    </>
  );
};

export default App;
