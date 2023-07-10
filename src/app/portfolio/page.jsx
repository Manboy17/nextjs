import React from "react";
import styles from "./page.module.css";
import Link from "next/link";

const Portfolio = () => {
  return (
    <div className={styles.container}>
      <h4 className={styles.minText}>Make a decision!</h4>
      <div className={styles.items}>
        <Link href="/portfolio/illustrations" className={styles.item}>
          <p className={styles.desc}>Illustrations</p>
        </Link>
        <Link href="/portfolio/websites" className={styles.item}>
          <p className={styles.desc}>Websites</p>
        </Link>
        <Link href="/portfolio/applications" className={styles.item}>
          <p className={styles.desc}>Applications</p>
        </Link>
      </div>
    </div>
  );
};

export default Portfolio;
