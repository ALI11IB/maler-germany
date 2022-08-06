import type { NextPage } from "next";
import { useLayoutEffect } from "react";
import { useAppSelector } from "@rtk/store";
import Router from "next/router";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  // const signed = useAppSelector((state) => state.users.signed);
  // useLayoutEffect((): void => {
  //   if (!signed) Router.push("/login");
  // }, [signed]);
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
