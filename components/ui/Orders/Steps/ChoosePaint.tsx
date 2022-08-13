import * as React from "react";
import Box from "@mui/material/Box";
import ChoosePaintCard from "../ChoosePaintCard";
import { PaintType } from "../../../../types/order";
import inside from "../../../../assets/icons/createOrder/inside.png";
import outside from "../../../../assets/icons/createOrder/outside.png";

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

export default function ChoosePaint({
  paintType,
  setPaintType,
  handleNext,
}: PaintType) {
  const handlelick = (id: string) => {
    setPaintType(id);
    handleNext();
  };
  return (
    <Box
      width={"100%"}
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      {items.map((item) => (
        <ChoosePaintCard
          key={item.id}
          {...item}
          onClick={() => handlelick(item.id)}
        />
      ))}
    </Box>
  );
}
