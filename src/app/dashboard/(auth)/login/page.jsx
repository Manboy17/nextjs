"use client";

import React, { useContext } from "react";
import styles from "./page.module.css";
import { signIn, useSession } from "next-auth/react";
import { ThemeContext } from "@/context/ThemeContext";
import { useRouter } from "next/navigation";

const Login = () => {
  const { mode } = useContext(ThemeContext);
  const session = useSession();
  const router = useRouter();

  const inputColor = mode === "dark" ? "#ffffff" : "#111";

  const handleSubmit = (e) => {
    e.preventDefault();

    const email = e.target[0].value;
    const password = e.target[1].value;

    signIn("credentials", { email, password });
  };

  if (session.status === "authenticated") {
    router?.push("/dashboard");
  }

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
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
        <button className={styles.register}>Log in</button>
      </form>
    </div>
  );
};

export default Login;
