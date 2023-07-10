"use client";

import React from "react";
import styles from "./page.module.css";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const Dashboard = () => {
  // const [data, setData] = useState([]);
  // const [err, setErr] = useState(false);

  // const fetchData = async () => {
  //   const response = await fetch("https://jsonplaceholder.typicode.com/posts");

  //   if (!response.ok) {
  //     setErr(true);
  //   }

  //   const data = await response.json();
  //   setData(data);
  // };

  // useEffect(() => {
  //   fetchData();
  // }, []);

  const { data, error, isLoading } = useSWR(
    "https://jsonplaceholder.typicode.com/posts",
    fetcher
  );

  return <div className={styles.container}></div>;
};

export default Dashboard;
