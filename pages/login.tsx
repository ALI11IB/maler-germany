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
import provider from "../assets/icons/provider.png";

const Login: NextPage = () => {
  return (
    <Box sx={{ flexGrow: 1, width: "100%" }}>
      <Box className={styles.loginHeader}>
        <UnsignedNavbar />

        <Typography
          className={styles.introTitle}
          variant="h6"
          noWrap
          sx={{
            marginTop: "3%",
            marginLeft: "5%",
            fontSize: { xs: "1em", md: "2em", lg: "3em" },
          }}
        >
          Welcome Back
        </Typography>
      </Box>
      <Container
        maxWidth="xl"
        sx={{ padding: { xs: "0 24px", md: "0 60px", lg: "0 80px" } }}
      >
        <Grid container spacing={2}>
          <Grid
            item
            xs={6}
            display="flex"
            flexDirection={"column"}
            justifyContent="start"
            alignItems="start"
            sx={{ borderRight: "1px solid rgba(0, 0, 0, 0.6)" }}
          >
            <TextField
              id="User-Name"
              label="User Name:"
              variant="standard"
              className={styles.textField}
            />
            <TextField
              id="Password"
              label="Password:"
              variant="standard"
              className={styles.textField}
            />

            <Box
              display={"flex"}
              justifyContent="space-between"
              alignItems={"center"}
              width="90%"
            >
              <FormControlLabel
                className={styles.stayLogged}
                control={
                  <Checkbox
                  // checked={gilad} onChange={handleChange} name="gilad"
                  />
                }
                label="Stay Logged in"
                labelPlacement="start"
              />
              <Typography
                gutterBottom
                variant="h5"
                component="a"
                href="/"
                sx={{ textAlign: "center", fontSize: "0.75rem" }}
              >
                Forgot password?
              </Typography>
            </Box>
            <Box
              display={"flex"}
              justifyContent="center"
              alignItems={"center"}
              width="90%"
            >
              <Button
                variant="outlined"
                sx={{
                  color: "#ffff",
                  backgroundColor: "#e68b3f",
                  fontSize: "1rem",
                  textTransform: "none",
                  px: 2,
                  minWidth: "125px",
                }}
              >
                Log in
              </Button>
            </Box>
          </Grid>

          <Grid
            item
            xs={6}
            display="flex"
            flexDirection={"column"}
            justifyContent="center"
            alignItems="center"
          >
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              sx={{ textAlign: "center", fontSize: "2rem" }}
            >
              Not registered yet?
            </Typography>
            <Box
              display={"flex"}
              justifyContent="space-between"
              alignItems={"center"}
              width="48%"
              marginTop={"20px"}
            >
              <Typography
                variant="body2"
                color="text.secondary"
                component={"a"}
                href="/register-user"
                sx={{
                  textAlign: "center",
                  maxWidth: "700px",
                  fontSize: "1.25rem ",
                }}
              >
                register as user
              </Typography>
              <Box width="25px">
                <Image alt="contact" src={user} />
              </Box>
            </Box>
            <Box
              display={"flex"}
              justifyContent="space-between"
              alignItems={"center"}
              marginTop={"20px"}
              width="48%"
            >
              <Typography
                variant="body2"
                color="text.secondary"
                component={"a"}
                href="/register-provider"
                sx={{
                  textAlign: "center",
                  maxWidth: "700px",
                  fontSize: "1.25rem ",
                }}
              >
                register as service provider
              </Typography>
              <Box width="25px">
                <Image alt="contact" src={provider} />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Login;
