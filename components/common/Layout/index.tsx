import { FC } from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { Footer, Navbar } from "@components/common";
import { Grid } from "@mui/material";
import { useRouter } from "next/router";
interface Props {
  children: React.ReactElement;
}
const Layout: FC<Props> = ({ children }) => {
  const router = useRouter();
  console.log(!router.route.includes("login"), "router");

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
      {!router.route.includes("login") &&
        !router.route.includes("register") && <Footer />}
    </Box>
  );
};

export default Layout;
