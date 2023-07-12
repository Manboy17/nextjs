"use client";

import React, { useContext, useState } from "react";
import useSWR from "swr";
import styles from "./page.module.css";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { ThemeContext } from "@/context/ThemeContext";

const Dashboard = () => {
  const session = useSession();
  const router = useRouter();
  const { mode } = useContext(ThemeContext);

  const inputText = mode === "dark" ? "#ffffff" : "#111";

  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const { data, mutate, error, isLoading } = useSWR(
    `/api/posts?username=${session?.data?.user.name}`,
    fetcher
  );

  if (session.status === "loading") {
    return <p>Loading...</p>;
  }

  if (session.status === "unauthenticated") {
    return router?.push("/dashboard/login");
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const title = e.target[0].value;
    const desc = e.target[1].value;
    const image = e.target[2].value;
    const content = e.target[3].value;

    try {
      await fetch("/api/posts", {
        method: "POST",
        body: JSON.stringify({
          title,
          desc,
          image,
          content,
          username: session.data.user.name,
        }),
      });
      mutate();
      e.target.reset();
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await fetch(`/api/posts/${id}`, {
        method: "DELETE",
      });
      mutate();
    } catch (error) {
      console.log(error);
    }
  };

  if (session.status === "authenticated") {
    return (
      <div className={styles.container}>
        <div className={styles.posts}>
          {isLoading
            ? "Loading..."
            : data?.map((post) => (
                <div className={styles.post}>
                  <div className={styles.imageContainer} key={post._id}>
                    <Image
                      src={post.image}
                      alt="image"
                      className={styles.image}
                      width={200}
                      height={100}
                    />
                  </div>
                  <h2 className={styles.title}>{post.title}</h2>
                  <span
                    className={styles.delete}
                    onClick={() => handleDelete(post._id)}
                  >
                    X
                  </span>
                </div>
              ))}
        </div>
        <form className={styles.create} onSubmit={handleSubmit}>
          <h1>Add new Post</h1>
          <input
            style={{ color: inputText }}
            type="text"
            placeholder="Title"
            className={styles.input}
            required
          />
          <input
            style={{ color: inputText }}
            type="text"
            placeholder="Desc"
            className={styles.input}
            required
          />
          <input
            style={{ color: inputText }}
            type="text"
            placeholder="Image Url"
            className={styles.input}
            required
          />
          <textarea
            style={{ color: inputText }}
            className={styles.textarea}
            placeholder="Content"
            required
            cols="30"
            rows="10"
          />
          <button className={styles.send}>Send</button>
        </form>
      </div>
    );
  }
};

export default Dashboard;
