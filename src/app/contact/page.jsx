import React from "react";
import styles from "./page.module.css";
import Button from "@/components/button/Button";

export const metadata = {
  title: "Contact Page",
  description: "This is contact page",
};

const Contact = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Let is Keep In Touch</h1>
      <form className={styles.form}>
        <input type="text" placeholder="name" className={styles.input} />
        <input type="email" placeholder="email" className={styles.input} />
        <textarea
          cols="30"
          rows="10"
          className={styles.textarea}
          placeholder="message"
        />
        <Button href="/" text="Send" />
      </form>
    </div>
  );
};

export default Contact;
