"use client";
import React, { useContext, useState } from "react";
import styles from "./page.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ThemeContext } from "@/context/ThemeContext";

const Register = () => {
  const [error, setError] = useState(null);
  const { mode } = useContext(ThemeContext);

  const inputColor = mode === "dark" ? "#ffffff" : "#111";

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;

    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });
      res.status === 201 &&
        router.push("/dashboard/login?success=Account has been created");
    } catch (err) {
      setError(err);
      console.log(err);
    }
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          style={{ color: inputColor }}
          type="text"
          placeholder="username"
          className={styles.input}
          required
        />
        <input
          style={{ color: inputColor }}
          type="email"
          placeholder="email"
          className={styles.input}
          required
        />
        <input
          style={{ color: inputColor }}
          type="password"
          placeholder="password"
          className={styles.input}
          required
        />
        <button className={styles.register}>Register</button>
      </form>
      {error && <span className={styles.error}>{error}</span>}
      <Link href="/dashboard/login">Login with an existing account</Link>
    </div>
  );
};

export default Register;
