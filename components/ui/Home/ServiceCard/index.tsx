import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Image, { StaticImageData } from "next/image";
import styles from "./ServiceCard.module.css";

interface Card {
  title: string;
  image: StaticImageData;
}
export default function ServiceCard({ title, image }: Card) {
  return (
    <Card
      className={styles.card}
      sx={{ boxShadow: "none", padding: "30px", maxWidth: 345 }}
    >
      <CardActionArea>
        <Image alt="painting-icon" src={image} />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{ textAlign: "center" }}
          >
            {title}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
