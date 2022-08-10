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
import styles from "./Navbar.module.css";

const pages = [
  { id: "1", name: "Home", href: "/" },
  { id: "2", name: "Register", href: "/register-user" },
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
          <Grid
            container
            spacing={2}
            display="flex"
            justifyContent={"center"}
            alignItems="center"
          >
            <Grid
              item
              xs={12}
              sm={4}
              md={3}
              display="flex"
              justifyContent={"start"}
              alignItems="center"
            >
              <Box width={"10%"} sx={{ minWidth: "100px" }}>
                <Image src={logo} alt={"logo"} />
              </Box>

              <Typography
                className={styles.maler}
                variant="h6"
                component="a"
                href="/"
              >
                Maler
              </Typography>
              <Box sx={{ display: { xs: "flex", md: "none" } }}>
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
            </Grid>
            {/* <Box sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}>
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
            Maler2
          </Typography> */}
            <Grid
              item
              xs={4}
              md={4}
              justifyContent={"start"}
              alignItems="center"
              sx={{
                display: { xs: "none", md: "flex" },
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
                    textDecoration:
                      page.id === activeLink ? "underline" : "none",
                    textDecorationColor: "#E6934D",
                  }}
                >
                  {page.name}
                </Link>
              ))}
            </Grid>
            <Grid
              item
              xs={12}
              sm={8}
              md={5}
              display="flex"
              justifyContent={"end"}
              alignItems="center"
            >
              <LanguageSelect />

              <Search />
              <Tooltip title="Account settings">
                <IconButton sx={{ p: 0, m: { xs: 0, md: 2 } }}>
                  <PersonIcon
                    sx={{ width: "2em", height: "2em", color: "#000000" }}
                  />
                </IconButton>
              </Tooltip>
              <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0, my: 2 }}>
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
            </Grid>
          </Grid>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
