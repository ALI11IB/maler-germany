import * as React from "react";
import Image from "next/image";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Tooltip,
  MenuItem,
  InputBase,
  TextField,
  Grid,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import SettingsIcon from "@mui/icons-material/Settings";
import PersonIcon from "@mui/icons-material/Person";
import Link from "@components/common/Link";
import LanguageSelect from "@components/ui/LanguageSelect";
import logo from "../../../assets/images/logo.png";

import styles from "./UnsignedNavbar.module.css";

const pages = [
  { id: "1", name: "Home", href: "/" },
  { id: "2", name: "Register", href: "/login" },
];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

const Search = () => (
  <Box
    className={styles.searchBox}
    sx={{
      display: { xs: "none", md: "flex" },
    }}
  >
    <TextField
      className={styles.searchText}
      placeholder="Search…"
      type="text"
    />
    <SearchIcon className={styles.searchIcon} />
  </Box>
);
const UnsignedNavbar = () => {
  const [activeLink, setActiveLink] = React.useState<string>("1");
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "transparent",
        color: "#000000",
        boxShadow: "none",
      }}
    >
      <Container
        maxWidth="xl"
        style={{ paddingLeft: "60px", paddingRight: "60px" }}
      >
        <Toolbar disableGutters sx={{ borderBottom: "2px solid lightgrey" }}>
          <Grid
            container
            spacing={2}
            display="flex"
            justifyContent={"center"}
            alignItems="center"
          >
            <Grid
              item
              xs={8}
              md={8}
              display="flex"
              justifyContent={"start"}
              alignItems="center"
            >
              <Box sx={{ mr: 1 }}>
                <Image src={logo} alt={"logo"} />
              </Box>

              <Typography
                className={styles.maler}
                variant="h6"
                noWrap
                component="a"
                href="/"
              >
                Maler
              </Typography>
            </Grid>
            <Grid
              item
              xs={4}
              md={4}
              display="flex"
              justifyContent={"center"}
              alignItems="center"
            >
              <Search />
            </Grid>
          </Grid>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default UnsignedNavbar;
