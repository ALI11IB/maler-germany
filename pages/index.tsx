import type { NextPage } from "next";
import { useLayoutEffect } from "react";
import { useAppSelector } from "@rtk/store";
import Router from "next/router";
import { Navbar } from "@components/common";

import styles from "../styles/Home.module.css";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
const Home: NextPage = () => {
  // const signed = useAppSelector((state) => state.users.signed);
  // useLayoutEffect((): void => {
  //   if (!signed) Router.push("/login");
  // }, [signed]);
  return (
    <Box sx={{ flexGrow: 1, width: "100%" }}>
      <Box className={styles.header}>
        <Navbar />
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <Typography
              className={styles.headerTitle}
              variant="h6"
              noWrap
              sx={{
                marginTop: "14%",
                marginLeft: "25%",
                fontSize: { xs: "1em", md: "2em", lg: "3em" },
              }}
            >
              Looking for painter?
            </Typography>
            <Typography
              className={styles.headerTitle}
              variant="h6"
              noWrap
              sx={{
                marginLeft: "50%",
                fontSize: { xs: "1em", md: "2em", lg: "3em" },
              }}
            >
              Handymen?
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography
              className={styles.headerTitle}
              variant="h6"
              noWrap
              sx={{
                marginTop: "64%",
                marginLeft: "25%",
                fontSize: { xs: "1em", md: "2em", lg: "3em" },
                fontFamily: "lucida calligraphy",
              }}
            >
              Maler
            </Typography>
            <Typography
              className={styles.headerTitle}
              variant="h6"
              noWrap
              sx={{
                width: "300px",
                whiteSpace: "pre-wrap",
                marginLeft: "25%",
                fontSize: { xs: "0.5em", md: "0.75em", lg: "1em" },
              }}
            >
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata.
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Home;
