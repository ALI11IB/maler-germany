import type { NextPage } from "next";
import { useLayoutEffect } from "react";
import { useAppSelector } from "@rtk/store";
import Router from "next/router";
import { Navbar } from "@components/common";

import styles from "../styles/Home.module.css";

import { Container, Typography, Box, Grid } from "@mui/material";
import { ChoosePaint, HouseInfo } from "@components/ui/Orders";
const Home: NextPage = () => {
  // const signed = useAppSelector((state) => state.users.signed);
  // useLayoutEffect((): void => {
  //   if (!signed) Router.push("/login");
  // }, [signed]);
  return (
    <Box sx={{ flexGrow: 1, width: "100%" }}>
      <Navbar />
      <Container
        maxWidth="xl"
        sx={{ mt: 3, padding: { xs: "0 24px", md: "0 60px", lg: "0 80px" } }}
      >
        <ChoosePaint />
        {/* <HouseInfo /> */}
      </Container>
    </Box>
  );
};

export default Home;
