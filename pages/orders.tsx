import type { NextPage } from "next";
import { useEffect } from "react";
import { useAppSelector } from "@rtk/store";
import Router from "next/router";
import {
  Box,
  Button,
  Checkbox,
  Container,
  Divider,
  FormControlLabel,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { Navbar } from "@components/common";
import Image from "next/image";
import styles from "../styles/Orders.module.css";
import orders from "../assets/images/orders.png";
import provider from "../assets/icons/provider.png";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ChatIcon from "@mui/icons-material/Chat";

const Order = () => (
  <Grid item xs={12} md={5} className={styles.orderCard}>
    <Typography className={styles.cardTitle} variant="h6">
      Paint Facade 125 Total area at 1945 Guteborn
    </Typography>
    <Box className={styles.innerBox}>
      <Box>
        <CheckCircleIcon sx={{ color: "#979797" }} />
        <Typography variant="h6">Requested</Typography>
        <Typography variant="h6">(0)</Typography>
      </Box>
      <Box>
        <FavoriteIcon sx={{ color: "#979797" }} />
        <Typography variant="h6">Requested</Typography>
        <Typography variant="h6">(0)</Typography>
      </Box>
      <Box>
        <ChatIcon sx={{ color: "#E58636" }} />
        <Typography variant="h6" sx={{ color: "#E58636" }}>
          Requested
        </Typography>
        <Typography variant="h6" sx={{ color: "#E58636" }}>
          (0)
        </Typography>
      </Box>
    </Box>
    <Typography className={styles.cardFooter} component="a" variant="h6">
      See who is interested in your order
    </Typography>
  </Grid>
);
const Orders: NextPage = () => {
  return (
    <Box sx={{ flexGrow: 1, width: "100%" }}>
      <Navbar />
      <Box className={styles.orderHeader}>
        <Box>
          <Image alt="orders" src={orders} />
        </Box>
        <Typography
          className={styles.orderTitle}
          variant="h6"
          sx={{
            fontSize: { xs: "1rem", sm: "1.50rem", md: "2rem", lg: "2.5rem" },
            fontStyle: "italic",
          }}
        >
          Your Orders
        </Typography>
      </Box>
      <Container
        maxWidth="xl"
        sx={{ padding: { xs: "0 24px", md: "0 60px", lg: "0 80px" } }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} md={12}>
            <Typography
              //   className={styles.orderTitle}
              variant="h6"
              sx={{
                fontSize: "1rem",
                marginTop: "20px",
              }}
            >
              Published 19 days ago
            </Typography>
            <Box className={styles.dividor} />
          </Grid>
          <Grid item xs={12} md={12} className={styles.cardContainer}>
            <Order />
            <Order />
            <Order />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Orders;
