import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Link from "next/link";

async function getData() {
  const res = await fetch("http://localhost:3000/api/posts", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export const metadata = {
  title: "Blog Page",
  description: "This is blog page",
};

const Blog = async () => {
  const data = await getData();
  return (
    <div className={styles.container}>
      {data.map((post) => (
        <Link href={`/blog/${post._id}`} className={styles.post}>
          <div className={styles.imageContainer}>
            <Image
              fill={true}
              src={post.image}
              alt="image"
              className={styles.image}
            />
          </div>
          <div className={styles.content}>
            <h1 className={styles.title}>{post.title}</h1>
            <p className={styles.desc}>{post.desc}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Blog;
