import React from "react";
import logo from "../assets/logo.svg";
import styles from "../styles/header.module.css";

const Header = () => {
  return (
    <div className={styles.header_maincont}>
      <div className={styles.header_cont}>
        <p className={styles.logo_name}>fampay</p>
        <img src={logo} alt="logo"></img>
      </div>
    </div>
  );
};

export default Header;
