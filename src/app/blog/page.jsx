import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Link from "next/link";

const Blog = () => {
  return (
    <div className={styles.container}>
      <Link href="/blog/test1" className={styles.post}>
        <div className={styles.imageContainer}>
          <Image
            fill={true}
            src="https://images.pexels.com/photos/16963896/pexels-photo-16963896.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="image"
            className={styles.image}
          />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>Title</h1>
          <p className={styles.desc}>Desc</p>
        </div>
      </Link>

      <Link href="/blog/test2" className={styles.post}>
        <div className={styles.imageContainer}>
          <Image
            fill={true}
            src="https://images.pexels.com/photos/16963896/pexels-photo-16963896.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="image"
            className={styles.image}
          />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>Title</h1>
          <p className={styles.desc}>Desc</p>
        </div>
      </Link>

      <Link href="/blog/test3" className={styles.post}>
        <div className={styles.imageContainer}>
          <Image
            fill={true}
            src="https://images.pexels.com/photos/16963896/pexels-photo-16963896.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="image"
            className={styles.image}
          />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>Title</h1>
          <p className={styles.desc}>Desc</p>
        </div>
      </Link>
    </div>
  );
};

export default Blog;
