import * as React from "react";
import Box from "@mui/material/Box";
import ChoosePaintCard from "../ChoosePaintCard";
import { PaintType } from "../../../../types/order";
import Image from "next/image";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import houseSpace from "../../../../assets/icons/createOrder/houseSpace.png";
import {
  Button,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import styles from "./styles.module.css";
export default function HouseInfo() {
  return (
    <Box
      width={"100%"}
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection={"column"}
    >
      <Box>
        <Typography variant="h5" component="div" mt={3} textAlign="center">
          Rooms
        </Typography>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <TextField
            className={styles.itemsNum}
            id="outlined-rooms"
            variant="outlined"
            type={"number"}
            disabled
            value="1"
          />
          <IconButton className={styles.removeButton} aria-label="remove">
            <RemoveIcon />
          </IconButton>

          <Button className={styles.detailsButton}>Details</Button>
          <IconButton aria-label="add" className={styles.addButton}>
            <AddIcon />
          </IconButton>
        </Box>
      </Box>
      <Box>
        <Typography variant="h5" component="div" mt={3} textAlign="center">
          Bathrooms
        </Typography>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <TextField
            className={styles.itemsNum}
            id="outlined-bathrooms"
            variant="outlined"
            type={"number"}
            disabled
            value="1"
          />
          <IconButton className={styles.removeButton} aria-label="remove">
            <RemoveIcon />
          </IconButton>

          <Button className={styles.detailsButton}>Details</Button>
          <IconButton aria-label="add" className={styles.addButton}>
            <AddIcon />
          </IconButton>
        </Box>
      </Box>
      <Box>
        <Typography variant="h5" component="div" mt={3} textAlign="center">
          Salons
        </Typography>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <TextField
            className={styles.itemsNum}
            id="outlined-salons"
            variant="outlined"
            type={"number"}
            disabled
            value="1"
          />
          <IconButton className={styles.removeButton} aria-label="remove">
            <RemoveIcon />
          </IconButton>

          <Button className={styles.detailsButton}>Details</Button>
          <IconButton aria-label="add" className={styles.addButton}>
            <AddIcon />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
}
