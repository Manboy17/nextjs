import React from "react";
import styles from "./page.module.css";
import Image from "next/image";

async function getData(id) {
  const res = await fetch(`http://localhost:3000/api/posts/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const BlogPost = async ({ params }) => {
  const data = await getData(params.id);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.content}>
          <h1 className={styles.title}>{data.title}</h1>
          <p className={styles.desc}>{data.desc}</p>
          <div className={styles.author}>
            <Image
              src={data.image}
              alt="auth-image"
              width={40}
              height={40}
              className={styles.authorImage}
            />
            <span className={styles.name}>{data.username}</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image
            fill={true}
            className={styles.image}
            src={data.image}
            alt="image"
          />
        </div>
      </div>
      <p className={styles.text}>{data.content}</p>
    </div>
  );
};

export default BlogPost;
