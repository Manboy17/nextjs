import React from "react";
import styles from "./button.module.css";
import Link from "next/link";

const Button = ({ href, text }) => {
  return (
    <Link href={href}>
      <button className={styles.button}>{text}</button>
    </Link>
  );
};

export default Button;
