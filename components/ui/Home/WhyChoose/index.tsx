import { Box, Divider, Grid, IconButton, Typography } from "@mui/material";
import * as React from "react";
import AdvantagesCard from "../AdvantagesCard";
// import styles from "./Advantages.module.css";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Key } from "@mui/icons-material";

const items = [
  {
    id: "1",
    text: "With us you will only find craftsmen with certified qualifications and approvals",
  },

  {
    id: "2",
    text: "Reviews from other users will help you choose the right tradesman",
  },
  {
    id: "3",
    text: "You have it in your hands: you choose the best craftsman at the best price",
  },
];
export default function WhyChoose() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{ textAlign: "center", fontSize: "2rem" }}
        >
          Why choose Maler?
        </Typography>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{ textAlign: "center" }}
        >
          At Maler you get quality and fair prices!
        </Typography>
      </Grid>
      <Grid item xs={12}>
        {items.map((item) => (
          <Box
            key={item.id}
            display="flex"
            justifyContent="start"
            alignItems="center"
          >
            <IconButton sx={{ mr: 2 }}>
              <CheckCircleIcon sx={{ fill: "#6EC46B" }} />
            </IconButton>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              sx={{ mb: 0, fontSize: "1rem" }}
            >
              {item.text}
            </Typography>
          </Box>
        ))}
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
