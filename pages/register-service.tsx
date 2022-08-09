import type { NextPage } from "next";
import { useEffect } from "react";
import { useAppSelector } from "@rtk/store";
import Router from "next/router";
import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { UnsignedNavbar } from "@components/common";
import Image from "next/image";
import styles from "../styles/Register.module.css";
import user from "../assets/icons/user.png";
import register1 from "../assets/images/login/r-service1.png";
import register2 from "../assets/images/login/r-service2.png";

const Login: NextPage = () => {
  return (
    <Box sx={{ flexGrow: 1, width: "100%" }}>
      <UnsignedNavbar />
      <Container
        maxWidth="xl"
        sx={{ mt: 3, padding: { xs: "0 24px", md: "0 60px", lg: "0 80px" } }}
      >
        <Grid container spacing={2}>
          <Grid
            item
            xs={12}
            md={6}
            display="flex"
            flexDirection={"column"}
            justifyContent="start"
            alignItems="start"
          >
            {" "}
            <Typography
              className={styles.introTitle}
              variant="h6"
              sx={{
                width: "80%",
                fontSize: { xs: "0.75em", md: "1.50em", lg: "2.5em" },
              }}
            >
              Fix Your Home, Get It Done, No Job Too Big
            </Typography>
            <Box>
              <TextField
                id="filled-select-Gender"
                select
                label="Gender"
                value={"currency"}
                //   onChange={"handleChange"}
                //   helperText="Please select your currency"
                variant="filled"
                className={styles.select}
              >
                {/* {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))} */}
              </TextField>
              <TextField
                id="First name"
                label="First name"
                variant="filled"
                className={styles.inputText}
              />{" "}
              <TextField
                id="Password"
                label="Password"
                variant="filled"
                className={styles.inputText}
              />{" "}
              <TextField
                id="E-mail"
                label="E-mail"
                variant="filled"
                className={styles.inputText}
              />{" "}
              <TextField
                id="Confrim Password"
                label="Confrim Password"
                variant="filled"
                className={styles.inputText}
              />{" "}
              <TextField
                id="Postal Code"
                label="Postal Code"
                variant="filled"
                className={styles.inputText}
              />{" "}
              <TextField
                id="Company"
                label="Company"
                variant="filled"
                className={styles.inputText}
              />{" "}
              <TextField
                id="last name"
                label="last name"
                variant="filled"
                className={styles.inputText}
              />{" "}
              <TextField
                id="Mobile"
                label="Mobile"
                variant="filled"
                className={styles.inputText}
              />{" "}
              <TextField
                id="Address"
                label="Address"
                variant="filled"
                className={styles.inputText}
              />{" "}
              <TextField
                id="filled-select-Work-Type"
                select
                label="Work Type"
                value={"currency"}
                //   onChange={"handleChange"}
                //   helperText="Please select your currency"
                variant="filled"
                className={styles.select}
              >
                {/* {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))} */}
              </TextField>
              <TextField
                id="filled-select-Legal Form"
                select
                label="Legal Form"
                value={"currency"}
                //   onChange={"handleChange"}
                //   helperText="Please select your currency"
                variant="filled"
                className={styles.select}
              >
                {/* {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))} */}
              </TextField>
            </Box>
            <Box
              display={"flex"}
              justifyContent="start"
              alignItems={"center"}
              sx={{ mt: "15px" }}
            >
              <Button
                variant="outlined"
                sx={{
                  color: "#ffff",
                  backgroundColor: "#e68b3f",
                  fontSize: "1rem",
                  textTransform: "none",
                  px: 2,
                  minWidth: "225px",
                }}
              >
                Register
              </Button>
            </Box>
          </Grid>

          <Grid
            item
            xs={12}
            md={6}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Box className={styles.registerBox}>
              <Image alt="register1" src={register1} />
              <Image
                alt="register2"
                className={styles.registerImage}
                src={register2}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Login;
