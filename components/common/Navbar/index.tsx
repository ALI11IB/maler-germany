import * as React from "react";
import Image from "next/image";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import SettingsIcon from "@mui/icons-material/Settings";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import InputBase from "@mui/material/InputBase";
import logo from "../../../assets/images/logo.png";
import { textTransform } from "@mui/system";
import TextField from "@mui/material/TextField";
import LanguageSelect from "@components/ui/LanguageSelect";
import styles from "./Navbar.module.css";
import Link from "@components/common/Link";

const pages = [
  { id: "1", name: "Home", href: "/" },
  { id: "2", name: "Register", href: "/register" },
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
const ResponsiveAppBar = () => {
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
          <Box sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}>
            <Image src={logo} alt={"logo"} />
          </Box>

          <Typography
            className={styles.maler}
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              display: { xs: "none", md: "flex" },
            }}
          >
            Maler
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <SettingsIcon sx={{ width: "1.5em", height: "1.5em" }} />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page.id} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page.name}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}>
            <Image src={logo} alt={"logo"} />
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              display: { xs: "flex", md: "none" },
              fontSize: "35px",
            }}
            className={styles.maler}
          >
            Maler
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex", margin: "0 20px" },
            }}
          >
            {pages.map((page) => (
              <Link
                href={page.href}
                key={page.id}
                onClick={() => setActiveLink(page.id)}
                sx={{
                  my: 2,
                  color: "black",
                  display: "block",
                  textTransform: "none",
                  fontSize: "20px",
                  margin: "0 20px",
                  textDecoration: page.id === activeLink ? "underline" : "none",
                  textDecorationColor: "#E6934D",
                }}
              >
                {page.name}
              </Link>
            ))}
          </Box>
          <LanguageSelect />

          <Search />
          <Tooltip title="Account settings">
            <IconButton sx={{ p: 0, m: 2 }}>
              <PersonIcon
                sx={{ width: "2em", height: "2em", color: "#000000" }}
              />
            </IconButton>
          </Tooltip>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0, m: 2 }}>
                <MenuIcon
                  sx={{ width: "2em", height: "2em", color: "#000000" }}
                />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
