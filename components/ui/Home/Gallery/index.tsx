import {
  Box,
  Button,
  Divider,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import * as React from "react";
import Image from "next/image";
import gallery1 from "../../../../assets/images/gallery1.png";
import gallery2 from "../../../../assets/images/gallery2.png";
import gallery3 from "../../../../assets/images/gallery3.png";
import gallery4 from "../../../../assets/images/gallery4.png";
import gallery5 from "../../../../assets/images/gallery5.png";
import gallery6 from "../../../../assets/images/gallery6.png";
import gallery7 from "../../../../assets/images/gallery7.png";
import gallery8 from "../../../../assets/images/gallery8.png";

const items = [
  {
    id: "1",
    image: gallery1,
  },
  {
    id: "2",
    image: gallery2,
  },
  {
    id: "3",
    image: gallery3,
  },
  {
    id: "4",
    image: gallery4,
  },
  {
    id: "5",
    image: gallery5,
  },
  {
    id: "6",
    image: gallery6,
  },
  {
    id: "7",
    image: gallery7,
  },
  {
    id: "8",
    image: gallery8,
  },
];
export default function Services() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{ textAlign: "center", fontSize: "2rem" }}
        >
          Gallery
        </Typography>
      </Grid>
      <Grid
        item
        xs={12}
        sx={{ display: "flex", justifyContent: "center", flexFlow: "wrap" }}
      >
        {items.map((item) => (
          <Grid item xs={4} md={3} lg={3} key={item.id} sx={{ m: 1 }}>
            <Image alt="gallery" src={item.image} />
          </Grid>
        ))}
      </Grid>
      <Grid item xs={12} md={12} display={"flex"} justifyContent={"center"}>
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
          Register as a provider?
        </Button>
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
