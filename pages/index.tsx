import type { NextPage } from "next";
import { useLayoutEffect } from "react";
import { useAppSelector } from "@rtk/store";
import Router from "next/router";
import { Navbar } from "@components/common";

import styles from "../styles/Home.module.css";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import { Intro } from "@components/ui/Home";
const Home: NextPage = () => {
  // const signed = useAppSelector((state) => state.users.signed);
  // useLayoutEffect((): void => {
  //   if (!signed) Router.push("/login");
  // }, [signed]);
  return (
    <Box sx={{ flexGrow: 1, width: "100%" }}>
      <Box className={styles.intro}>
        <Navbar />
        <Intro />
      </Box>
    </Box>
  );
};

export default Home;
