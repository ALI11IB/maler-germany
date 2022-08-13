import React, { useState, useCallback, useMemo } from "react";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import MobileStepper from "@mui/material/MobileStepper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import { Grid } from "@mui/material";
import { stepSwitcher } from "../Steps";
import styles from "./HouseDetails.module.css";
// const steps = [
//   {
//     label: "Please choose what kind of paint do you need",
//     component: ChoosePaint,
//   },
// ];

export default function HouseDetails() {
  const theme = useTheme();
  const [paintType, setPaintType] = useState<string | null>(null);

  const [activeStep, setActiveStep] = React.useState(0);
  const steps = useMemo(() => stepSwitcher(paintType), [paintType]);
  const maxSteps = steps.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} display="flex" justifyContent={"center"}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            border: "1px solid #4d4c4c",
            marginTop: "50px",
            padding: " 0px !important",
            borderRadius: "5px",
            flexGrow: 1,
            maxWidth: "80%",
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
              {steps[activeStep]?.label}
            </Typography>
          </Box>
          <Box width={"100%"} className={styles.badgeBox}>
            <Typography
              display={steps[activeStep]?.badge ? "flex" : "none"}
              className={styles.badge}
              variant="h5"
              component="div"
              sx={{
                fontSize: { xs: "0.75rem", sm: "1rem", md: "1.5rem" },
                width: { xs: "100px", sm: "140px", md: "180px" },
              }}
            >
              {steps[activeStep]?.badge}
            </Typography>
          </Box>
          <Box
            display="flex"
            justifyContent={"center"}
            alignItems={"start"}
            minHeight={"325px"}
            width="100%"
          >
            {steps[activeStep]?.component({
              paintType,
              setPaintType,
              handleNext,
            })}
          </Box>
          <Box width={"50%"} display={activeStep === 0 ? "none" : "block"}>
            <MobileStepper
              variant="text"
              steps={maxSteps}
              position="static"
              activeStep={activeStep}
              nextButton={
                <Button
                  className={styles.controlButton}
                  size="small"
                  onClick={handleNext}
                  disabled={activeStep === maxSteps - 1}
                >
                  Next
                  {theme.direction === "rtl" ? (
                    <KeyboardArrowLeft />
                  ) : (
                    <KeyboardArrowRight />
                  )}
                </Button>
              }
              backButton={
                <Button
                  className={styles.controlButton}
                  size="small"
                  onClick={handleBack}
                  disabled={activeStep === 0}
                >
                  {theme.direction === "rtl" ? (
                    <KeyboardArrowRight />
                  ) : (
                    <KeyboardArrowLeft />
                  )}
                  Back
                </Button>
              }
            />
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}

{
}
