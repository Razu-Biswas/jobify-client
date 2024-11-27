import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";

import WorkIcon from "@mui/icons-material/Work";

import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
import { Button, Grid } from "@mui/material";
import { HowToReg, Login } from "@mui/icons-material";
import { AuthContext } from "../../../providers/AuthProvider/AuthProvider";
import toast from "react-hot-toast";
import userUserProfile from "../../../hooks/useUserProfile";

const navStyle = {
  textDecoration: "none",
  color: "black",
};

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const { user, logout, isLoading } = React.useContext(AuthContext);
  const [userInfo, userLoading] = userUserProfile();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleLogout = () => {
    logout()
      .then(() => {
        toast.success("user logged out!");
      })
      .catch();
  };

  return (
    <AppBar position="static" sx={{ bgcolor: "white", minHeight: "50px" }}>
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          {/* logo for medium device */}
          <WorkIcon
            sx={{
              display: { xs: "none", md: "flex" },
              mr: 1,
              color: "primary.main",
            }}
          />

          <Link className="link-style">
            <Typography
              variant="h6"
              noWrap
              component="a"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "black",
                textDecoration: "none",
              }}
            >
              Jobi
              <Typography variant="h6" noWrap sx={{ color: "primary.main" }}>
                Fy
              </Typography>
            </Typography>
          </Link>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color=""
            >
              <MenuIcon />
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
              <MenuItem onClick={handleCloseNavMenu}>
                <NavLink className="menu" style={navStyle} to={"/"}>
                  Home
                </NavLink>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <NavLink className="menu" style={navStyle} to={"/allJobs"}>
                  Jobs
                </NavLink>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <NavLink className="menu" style={navStyle} to={"/allJobs"}>
                  All Jobs
                </NavLink>
              </MenuItem>
              {user && (
                <span>
                  <MenuItem onClick={handleCloseNavMenu}>
                    {userInfo?.role === "superAdmin" ||
                    userInfo?.role === "admin" ? (
                      <NavLink
                        className="menu"
                        style={navStyle}
                        to={"/dashboard/adminHome"}
                      >
                        Dashboard
                      </NavLink>
                    ) : (
                      <NavLink
                        className="menu"
                        style={navStyle}
                        to={"/dashboard/userHome"}
                      >
                        Dashboard
                      </NavLink>
                    )}
                  </MenuItem>
                </span>
              )}
            </Menu>
          </Box>
          {/* logo for small device */}

          <WorkIcon
            sx={{
              display: { xs: "flex", md: "none" },
              mr: 1,
              color: "primary.main",
            }}
          />

          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "black",
              textDecoration: "none",
            }}
          >
            Jobi
            <Typography variant="h6" noWrap sx={{ color: "primary.main" }}>
              Fy
            </Typography>
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: {
                xs: "none",
                md: "flex",
                gap: 20,
                justifyContent: "center",
                alignItems: "center",
                fontSize: "16px",
              },
            }}
          >
            <NavLink className="menu" to={"/"}>
              Home
            </NavLink>

            <NavLink className="menu" to={"/allJobs"}>
              All Jobs
            </NavLink>
            {user && (
              <>
                {userInfo?.role === "superAdmin" ||
                userInfo?.role === "admin" ? (
                  <NavLink
                    className="menu"
                    style={navStyle}
                    to={"/dashboard/adminHome"}
                  >
                    Dashboard
                  </NavLink>
                ) : (
                  <NavLink
                    className="menu"
                    style={navStyle}
                    to={"/dashboard/userHome"}
                  >
                    Dashboard
                  </NavLink>
                )}
              </>
            )}
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            {!user && (
              <Grid
                sx={{
                  display: { xs: "flex", md: "none" },
                  flexDirection: { xs: "column", md: "row" },
                  gap: { xs: 1, md: 2 },
                }}
              >
                <Link to={"/login"}>
                  <Button
                    sx={{ display: { xs: "none", md: "inline-block" } }}
                    size="small"
                    startIcon={<Login />}
                  >
                    Login
                  </Button>
                </Link>
                <Link to={"/registration"}>
                  <Button
                    sx={{ display: { xs: "none", md: "inline-block" } }}
                    size="small"
                    startIcon={<HowToReg />}
                  >
                    Register
                  </Button>
                </Link>
              </Grid>
            )}
            {!user && (
              <>
                <Link to={"/login"}>
                  <Button
                    sx={{ mr: 2 }}
                    color="secondary"
                    startIcon={<Login />}
                  >
                    Login
                  </Button>
                </Link>
                <Link to={"/registration"}>
                  <Button color="secondary" startIcon={<HowToReg />}>
                    Register
                  </Button>
                </Link>
              </>
            )}

            {user && (
              <Tooltip title="Options">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar
                    alt={user?.displayName}
                    src={user?.photoURL}
                    sx={{ display: "", border: "2px solid gray" }}
                  />
                </IconButton>
              </Tooltip>
            )}

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
              <MenuItem onClick={handleCloseUserMenu}>
                <Typography textAlign="center">{user?.displayName}</Typography>
              </MenuItem>
              <MenuItem
                onClick={() => {
                  handleCloseUserMenu();
                  handleLogout();
                }}
              >
                <Typography textAlign="center">Logout</Typography>
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
