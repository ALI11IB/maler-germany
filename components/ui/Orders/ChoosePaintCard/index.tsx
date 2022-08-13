import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Image, { StaticImageData } from "next/image";
import styles from "./ChoosePaintCard.module.css";

interface Card {
  title: string;
  image: StaticImageData;
  onClick: () => void;
}
export default function ChoosePaintCard({ title, image, onClick }: Card) {
  return (
    <Card
      className={styles.card}
      sx={{
        boxShadow: "none",
        maxWidth: 225,
        padding: { xs: "10px", sm: "20px", md: "30px" },
      }}
      onClick={onClick}
    >
      <CardActionArea>
        <Image alt="painting-icon" src={image} />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{ textAlign: "center", fontSize: "0.75rem" }}
          >
            {title}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
