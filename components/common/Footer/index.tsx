import {
  Box,
  Divider,
  Grid,
  IconButton,
  Typography,
  TextField,
  Button,
  Container,
} from "@mui/material";
import * as React from "react";
import Image from "next/image";
import styles from "./Footer.module.css";
import logo from "../../../assets/images/logo.png";
import appstore from "../../../assets/icons/appstore.png";
import googleplay from "../../../assets/icons/googleplay.png";
import facebook from "../../../assets/icons/facebook.png";
import linkedin from "../../../assets/icons/linkedin.png";
import twitter from "../../../assets/icons/twitter.png";
import youtube from "../../../assets/icons/youtube.png";
import instagram from "../../../assets/icons/instagram.png";

export default function Footer() {
  return (
    <Container
      maxWidth="xl"
      sx={{
        marginTop: "50px",
        padding: { xs: "0 24px", md: "0 60px", lg: "0 80px" },
      }}
    >
      <Grid container>
        <Grid
          item
          xs={12}
          display="flex"
          alignItems="start"
          justifyContent={"space-between"}
        >
          <Grid item xs={2} className={styles.parent}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "start",
                alignItems: "center",
              }}
            >
              <Box sx={{ mr: 1, width: "50px" }}>
                <Image src={logo} alt={"logo"} />
              </Box>
              <Typography
                variant="h6"
                noWrap
                sx={{
                  fontStyle: "italic",
                  fontFamily: "lucida calligraphy",
                }}
              >
                Maler
              </Typography>
            </Box>
            <Typography
              variant="h6"
              sx={{
                fontSize: "0.75rem",
              }}
            >
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt
            </Typography>
          </Grid>
          <Grid item xs={2} className={styles.parent}>
            <Typography variant="h6" noWrap className={styles.title}>
              QUICK LINKS
            </Typography>
            <Typography
              variant="h6"
              component="a"
              href="/"
              className={styles.link}
            >
              Home
            </Typography>
            <Typography
              variant="h6"
              component="a"
              href="/"
              className={styles.link}
            >
              Register
            </Typography>
            <Typography
              variant="h6"
              component="a"
              href="/"
              className={styles.link}
            >
              About
            </Typography>
          </Grid>
          <Grid item xs={2} className={styles.parent}>
            <Typography variant="h6" noWrap className={styles.title}>
              USEFUL LINKS
            </Typography>
            <Typography
              variant="h6"
              component="a"
              href="/"
              className={styles.link}
            >
              Help Center
            </Typography>
            <Typography
              variant="h6"
              component="a"
              href="/"
              className={styles.link}
            >
              Ask Question
            </Typography>
            <Typography
              variant="h6"
              component="a"
              href="/"
              className={styles.link}
            >
              Send Feedback
            </Typography>
            <Typography
              variant="h6"
              component="a"
              href="/"
              className={styles.link}
            >
              Terms of Use
            </Typography>
            <Typography
              variant="h6"
              component="a"
              href="/"
              className={styles.link}
            >
              Privacy Policy
            </Typography>
          </Grid>
          <Grid item xs={2} className={styles.parent}>
            <Typography variant="h6" noWrap className={styles.title}>
              CONTACT
            </Typography>
            <Typography variant="h6" className={styles.link}>
              lorem@lorem.com
            </Typography>
            <Typography variant="h6" className={styles.link}>
              Mobile: +11 123 123 123
            </Typography>
          </Grid>
          <Grid item xs={2} className={styles.parent}>
            <Box sx={{ width: "60%", marginBottom: "5px" }}>
              <Image src={googleplay} alt={"logo"} />
            </Box>
            <Box sx={{ width: "60%", marginBottom: "5px" }}>
              <Image src={appstore} alt={"logo"} />
            </Box>
            <Box sx={{ display: "flex", flexFlow: "wrap" }}>
              <Box className={styles.socialMedia}>
                <Image src={facebook} alt={"logo"} />
              </Box>
              <Box className={styles.socialMedia}>
                <Image src={twitter} alt={"logo"} />
              </Box>
              <Box className={styles.socialMedia}>
                <Image src={linkedin} alt={"logo"} />
              </Box>
              {/* </Box>
              <Box> */}
              <Box className={styles.socialMedia}>
                <Image src={instagram} alt={"logo"} />
              </Box>
              <Box className={styles.socialMedia}>
                <Image src={youtube} alt={"logo"} />
              </Box>
            </Box>
          </Grid>
        </Grid>

        <Grid item xs={12} md={12} marginBottom={4}>
          <Divider
            variant="middle"
            sx={{
              borderColor: "rgb(0 0 0 / 21%)",
              my: 4,
              mx: { xm: 4, md: 6, lg: 20 },
            }}
          />
          <Typography
            variant="h6"
            sx={{
              display: "flex",
              justifyContent: "center",
              fontSize: "0.75rem",
            }}
          >
            ALL RIGHTS RESERVED
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
}
