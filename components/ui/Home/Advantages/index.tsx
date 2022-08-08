import { Box, Divider, Grid, Typography } from "@mui/material";
import * as React from "react";
import AdvantagesCard from "../AdvantagesCard";
import styles from "./Advantages.module.css";
import painting1 from "../../../../assets/icons/painting1.png";
import painting2 from "../../../../assets/icons/painting2.png";
import painting3 from "../../../../assets/icons/painting3.png";

const cards = [
  {
    title: "Interior Painting",
    text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et",
    image: painting1,
    margin: "50px 20px",
  },
  {
    title: "Exterior Painting",
    text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et",
    image: painting2,
    margin: "20px 20px",
  },
  {
    title: "Exterior Painting",
    text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et",
    image: painting3,
    margin: "50px 20px",
  },
];
export default function Advantages() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={4} md={4}>
        <AdvantagesCard {...cards[0]} />
      </Grid>
      <Grid item xs={4} md={4}>
        <AdvantagesCard {...cards[1]} />
      </Grid>
      <Grid item xs={4} md={4}>
        <AdvantagesCard {...cards[2]} />
      </Grid>
      <Grid item xs={12}>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{ textAlign: "center", fontSize: "2rem" }}
        >
          We offer Residential & Commercial Painting services
        </Typography>
        <Box display="flex" justifyContent="center">
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              textAlign: "center",
              maxWidth: "700px",
              fontSize: "1.25rem ",
            }}
          >
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum.
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Box display="flex" justifyContent="center" my={2}>
          <Typography variant="body2" className={styles.offersGolden}>
            Quality Finish
          </Typography>

          <Typography
            variant="body2"
            className={styles.offersGolden}
            sx={{ px: { xm: "20px", md: "40px", lg: "60px" } }}
          >
            /
          </Typography>

          <Typography variant="body2" className={styles.offersGolden}>
            Best Support
          </Typography>

          <Typography
            variant="body2"
            className={styles.offersGolden}
            sx={{ px: { xm: "20px", md: "40px", lg: "60px" } }}
          >
            /
          </Typography>

          <Typography variant="body2" className={styles.offersGolden}>
            Better Price
          </Typography>
        </Box>
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
