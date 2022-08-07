import { FC } from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { Footer, Navbar } from "@components/common";
import { Grid } from "@mui/material";

interface Props {
  children: React.ReactElement;
}
const Layout: FC<Props> = ({ children }) => {
  return (
    // <Container maxWidth="xl" style={{ padding: 0 }}>
    <Box
      sx={{
        // my: 4,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* <Navbar /> */}
      {/* <Grid container spacing={2}> */}
      {children}
      {/* </Grid> */}
      <Footer />
    </Box>
    // </Container>
  );
};

export default Layout;
