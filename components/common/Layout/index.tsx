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
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* <Navbar /> */}
      {children}
      <Footer />
    </Box>
  );
};

export default Layout;
