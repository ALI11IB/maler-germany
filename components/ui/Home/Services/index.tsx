import { Box, Divider, Grid, IconButton, Typography } from "@mui/material";
import * as React from "react";
import ServiceCard from "../ServiceCard";
import service1 from "../../../../assets/icons/service1.png";
import service2 from "../../../../assets/icons/service2.png";
import service3 from "../../../../assets/icons/service3.png";
import service4 from "../../../../assets/icons/service4.png";
import service5 from "../../../../assets/icons/service5.png";
import service6 from "../../../../assets/icons/service6.png";

const items = [
  {
    id: "1",
    title: "Wall/Ceiling paint",
    image: service1,
  },
  {
    id: "2",
    title: "Window frames paint",
    image: service2,
  },
  {
    id: "3",
    title: "Window frames paint",
    image: service3,
  },
  {
    id: "4",
    title: "Door paint / lacquer",
    image: service4,
  },
  {
    id: "5",
    title: "Remove old paint",
    image: service5,
  },
  {
    id: "6",
    title: "Floor Renovation",
    image: service6,
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
          What services are available on the site?
        </Typography>
      </Grid>
      <Grid
        item
        xs={12}
        sx={{ display: "flex", justifyContent: "center", flexFlow: "wrap" }}
      >
        {items.map((item) => (
          <Grid item xs={4} md={3} lg={3} key={item.id}>
            <ServiceCard key={item.id} {...item} />
          </Grid>
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
