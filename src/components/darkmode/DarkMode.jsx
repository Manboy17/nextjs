"use client";

import React, { useContext } from "react";
import styles from "./darkmode.module.css";
import { ThemeContext } from "@/context/ThemeContext";

const DarkMode = () => {
  const { mode, toggle } = useContext(ThemeContext);

  return (
    <div className={styles.container} onClick={toggle}>
      <div className={styles.icon}>🌙</div>
      <div className={styles.icon}>☀️</div>
      <div
        className={styles.round}
        style={mode === "dark" ? { right: "2px" } : { left: "2px" }}
      ></div>
    </div>
  );
};

export default DarkMode;
