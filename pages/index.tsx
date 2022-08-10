import type { NextPage } from "next";
import { useLayoutEffect } from "react";
import { useAppSelector } from "@rtk/store";
import Router from "next/router";
import { Navbar } from "@components/common";

import styles from "../styles/Home.module.css";

import { Container, Typography, Box, Grid } from "@mui/material";
import {
  Intro,
  Advantages,
  WhyChoose,
  Services,
  Gallery,
  ContactUs,
} from "@components/ui/Home";
const Home: NextPage = () => {
  // const signed = useAppSelector((state) => state.users.signed);
  // useLayoutEffect((): void => {
  //   if (!signed) Router.push("/login");
  // }, [signed]);
  return (
    <Box sx={{ flexGrow: 1, width: "100%" }}>
      <Box
        className={styles.intro}
        sx={{ height: { xs: "230px", sm: "550px", md: "865px", lg: "865px" } }}
      >
        <Navbar />
        <Intro />
      </Box>
      <Container
        maxWidth="xl"
        sx={{ padding: { xs: "0 24px", md: "0 60px", lg: "0 80px" } }}
      >
        <Advantages />
        <WhyChoose />
        <Services />
        <Gallery />
        <ContactUs />
      </Container>
    </Box>
  );
};

export default Home;
