import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Image, { StaticImageData } from "next/image";
import styles from "./AdvantagesCard.module.css";

interface Card {
  title: string;
  text: string;
  image: StaticImageData;
  margin: string;
}
export default function AdvantagesCard({ title, text, image, margin }: Card) {
  return (
    <Card
      className={styles.card}
      sx={{ margin, padding: "30px", maxWidth: 345 }}
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
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ textAlign: "center" }}
          >
            {text}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
