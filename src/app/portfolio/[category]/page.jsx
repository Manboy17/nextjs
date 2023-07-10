import React from "react";
import styles from "./page.module.css";
import Button from "@/components/button/Button";
import Image from "next/image";
import { items } from "./items";
import { notFound } from "next/navigation";

const getData = (cat) => {
  const data = items[cat];

  if (!data) {
    return notFound();
  }

  return data;
};

const Category = ({ params }) => {
  const data = getData(params.category);

  return (
    <div className={styles.container}>
      <h1 className={styles.catText}>{params.category}</h1>
      {data.map((item) => (
        <div className={styles.catItem} key={item.id}>
          <div className={styles.catInfo}>
            <h1 className={styles.catTitle}>{item.title}</h1>
            <p className={styles.catDesc}>{item.desc}</p>
            <Button href="#" text="See More" />
          </div>
          <div className={styles.imageContainer}>
            <Image
              className={styles.image}
              fill={true}
              src={item.image}
              alt="image"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Category;
