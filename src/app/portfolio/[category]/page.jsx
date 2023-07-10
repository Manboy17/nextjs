import React from "react";
import styles from "./page.module.css";
import Button from "@/components/button/Button";
import Image from "next/image";

const Category = ({ params }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.catText}>{params.category}</h1>
      <div className={styles.catItem}>
        <div className={styles.catInfo}>
          <h1 className={styles.catTitle}>Title</h1>
          <p className={styles.catDesc}>Desc</p>
          <Button href="#" text="See More" />
        </div>
        <div className={styles.imageContainer}>
          <Image
            className={styles.image}
            fill={true}
            src="https://images.pexels.com/photos/16963896/pexels-photo-16963896.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="image"
          />
        </div>
      </div>
      <div className={styles.catItem}>
        <div className={styles.catInfo}>
          <h1 className={styles.catTitle}>Title</h1>
          <p className={styles.catDesc}>Desc</p>
          <Button href="#" text="See More" />
        </div>
        <div className={styles.imageContainer}>
          <Image
            className={styles.image}
            fill={true}
            src="https://images.pexels.com/photos/16963896/pexels-photo-16963896.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="image"
          />
        </div>
      </div>
      <div className={styles.catItem}>
        <div className={styles.catInfo}>
          <h1 className={styles.catTitle}>Title</h1>
          <p className={styles.catDesc}>Desc</p>
          <Button href="#" text="See More" />
        </div>
        <div className={styles.imageContainer}>
          <Image
            className={styles.image}
            fill={true}
            src="https://images.pexels.com/photos/16963896/pexels-photo-16963896.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="image"
          />
        </div>
      </div>
    </div>
  );
};

export default Category;
