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
import ChoosePaintCard from "../ChoosePaintCard";
import inside from "../../../../assets/icons/createOrder/inside.png";
import outside from "../../../../assets/icons/createOrder/outside.png";
import styles from "./ChoosePaint.module.css";

const items = [
  {
    id: "1",
    title: "Inside",
    image: inside,
  },
  {
    id: "2",
    title: "Inside Building",
    image: inside,
  },
  {
    id: "3",
    title: "Outside",
    image: outside,
  },
  {
    id: "4",
    title: "Outside Building",
    image: outside,
  },
];
export default function ChoosePaint() {
  return (
    <Grid container spacing={2} display="flex" justifyContent={"center"}>
      <Grid
        item
        xs={8}
        md={8}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          border: "1px solid #4d4c4c",
          marginTop: "50px",
          padding: " 0px !important",
          borderRadius: "5px",
        }}
      >
        <Box width={"100%"} className={styles.titleBox}>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{
              textAlign: "center",
              my: 4,
              fontSize: { xs: "0.75rem", sm: "1rem", md: "1.5rem" },
            }}
          >
            Please choose what kind of paint do you need
          </Typography>
        </Box>
        <Box
          width={"100%"}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          {items.map((item) => (
            <ChoosePaintCard key={item.id} {...item} />
          ))}
        </Box>
      </Grid>
    </Grid>
  );
}
