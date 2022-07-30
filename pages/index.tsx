import type { NextPage } from "next";
import { useEffect } from "react";

import styles from "../styles/Home.module.css";

useEffect((): void => {
  console.log("useEffect");
}, [])
const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>
      </main>
    </div>
  );
};

export default Home;
