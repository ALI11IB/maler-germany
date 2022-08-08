import {
  Box,
  Divider,
  Grid,
  IconButton,
  Typography,
  TextField,
  Button,
} from "@mui/material";
import * as React from "react";
import ServiceCard from "../ServiceCard";
import Image from "next/image";
import contactUs from "../../../../assets/images/contactUs.png";
import styles from "./ContactUs.module.css";

export default function ContactUs() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{ textAlign: "center", fontSize: "2rem" }}
        >
          Contact Us
        </Typography>
      </Grid>
      <Grid
        item
        xs={6}
        display="flex"
        flexDirection={"column"}
        justifyContent="start"
        alignItems="start"
      >
        <TextField
          id="User-Name"
          label="User Name:"
          variant="standard"
          className={styles.textField}
        />
        <TextField
          id="E-mail"
          label="E-mail:"
          variant="standard"
          className={styles.textField}
        />
        <TextField
          id="Phone"
          label="Phone:"
          variant="standard"
          className={styles.textField}
        />
        <TextField
          id="Message"
          label="Message:"
          variant="standard"
          className={styles.textField}
        />
        <Button
          variant="outlined"
          sx={{
            color: "rgba(0, 0, 0, 0.87);",
            borderColor: "#e68b3f",
            fontSize: "1rem",
            textTransform: "none",
            px: 2,
          }}
        >
          Send Message
        </Button>
      </Grid>
      <Grid item xs={6}>
        <Image alt="contact" src={contactUs} />
      </Grid>

      <Grid item xs={12} md={12}>
        <Divider
          variant="middle"
          sx={{
            borderColor: "rgb(0 0 0 / 21%)",
            my: 4,
            mx: { xm: 4, md: 6, lg: 20 },
          }}
        />
      </Grid>
    </Grid>
  );
}
