import * as React from "react";
import Box from "@mui/material/Box";
import ChoosePaintCard from "../ChoosePaintCard";
import { PaintType } from "../../../../types/order";
import Image from "next/image";
import houseSpace from "../../../../assets/icons/createOrder/houseSpace.png";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import styles from "./styles.module.css";
export default function HouseSpace() {
  return (
    <Box
      width={"100%"}
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection={"column"}
    >
      <Box
        sx={{
          width: { xs: "40px", sm: "60px", md: "85px" },
        }}
      >
        <Image alt="houseSpace" src={houseSpace} />
      </Box>
      <Box>
        <Typography variant="h5" component="div" mt={3} textAlign="center">
          Please write the estimated space below
        </Typography>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <TextField
            className={styles.textField}
            id="outlined-basic-space"
            variant="outlined"
            type={"number"}
            value=""
            placeholder="Type the total space..."
          />
          <TextField
            className={styles.textField}
            id="outlined-select-space"
            select
            value={"1"}
            // onChange={handleChange}
          >
            <MenuItem key={1} value={"1"}>
              m2
            </MenuItem>
          </TextField>
        </Box>
      </Box>
      <Box>
        <Typography variant="h5" component="div" mt={3} textAlign="center">
          Please write the estimated height below
        </Typography>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <TextField
            className={styles.textField}
            id="outlined-basic-height"
            variant="outlined"
            type={"number"}
            value=""
            placeholder="Type the total Height..."
          />
          <TextField
            className={styles.textField}
            id="outlined-select-height"
            select
            value={"1"}
            // onChange={handleChange}
          >
            <MenuItem key={1} value={"1"}>
              m
            </MenuItem>
          </TextField>
        </Box>
      </Box>
    </Box>
  );
}
