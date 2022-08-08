import { Grid, Typography } from "@mui/material";
import * as React from "react";
import styles from "./Intro.module.css";

export default function Intro() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={8}>
        <Typography
          className={styles.introTitle}
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
          className={styles.introTitle}
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
          className={styles.introTitle}
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
          className={styles.introTitle}
          variant="h6"
          noWrap
          sx={{
            whiteSpace: "pre-wrap",
            marginLeft: "25%",
            fontSize: { xs: "0.5em", md: "0.75em", lg: "1em" },
          }}
        >
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata.
        </Typography>
      </Grid>
    </Grid>
  );
}
