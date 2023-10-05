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
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { Link } from "react-router-dom";

const pages = ["Contracts", "Nodes", "Validator", "Wallets"];
const settings = ["Contracts", "Nodes", "Validator", "Wallets"];

function NavBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

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

  return (
    <AppBar
      position="static"
      sx={{ border: "3px solid pink", backgroundColor: "transparent" }}
    >
      <Container maxWidth="xl" sx={{ border: "3px solid green" }}>
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              border: "3px solid red",
              mr: 2,
              display: { xs: "none", md: "flex", border: "3px solid red" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            SAMRACHANA
          </Typography>

          <Box
            sx={{
              border: "3px solid red",
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
            }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
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
                display: { xs: "block", md: "none", border: "3px solid red" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
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
              color: "inherit",
              textDecoration: "none",
            }}
          >
            SAMRACHANA
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: {
                xs: "none",
                md: "flex",
                border: "3px solid red",
                display: "flex",
                justifyContent: "center",
                gap: "40px",
                alignItems: "center",
              },
            }}
          >
            {/* {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  border: "3px solid white",
                  color: "white",
                  display: "flex",
                  fontSize: "15px",
                  fontWeight: "bold",
                }}
              >
                {page}
              </Button>
            ))} */}
            <Box sx={{ display: "flex" }}>
              <Box>
                <Link to={"/"}>
                  <Button
                    sx={{
                      color: "white",
                      fontWeight: "light",
                      fontSize: "18px",
                    }}
                  >
                    Contracts
                  </Button>
                </Link>
              </Box>

              <Link to={"/nodes"}>
                <Box>
                  <Button
                    sx={{
                      color: "white",
                      fontWeight: "light",
                      fontSize: "18px",
                    }}
                  >
                    Nodes
                  </Button>
                </Box>
              </Link>

              <Box>
                <Link to={"/validator"}>
                  <Button
                    sx={{
                      color: "white",
                      fontWeight: "light",
                      fontSize: "18px",
                    }}
                  >
                    Validator
                  </Button>
                </Link>
              </Box>

              <Box>
                <Link to={"/wallets"}>
                  <Button
                    sx={{
                      color: "white",
                      fontWeight: "light",
                      fontSize: "18px",
                    }}
                  >
                    Wallets
                  </Button>
                </Link>
              </Box>

              <Box>
                <Link to={"/nodes"}>
                  <Button
                    sx={{
                      color: "white",
                      fontWeight: "light",
                      fontSize: "18px",
                    }}
                  >
                    Contracts
                  </Button>
                </Link>
              </Box>
            </Box>
          </Box>

          <Box sx={{ flexGrow: 0, border: "3px solid navy" }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
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
          <Box>
            <Button
              sx={{
                color: "white",
                border: "1px solid white",
                borderRadius: "20px",
              }}
            >
              Sign In
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavBar;
