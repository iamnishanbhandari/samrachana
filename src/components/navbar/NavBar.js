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
import thumbnail from "../../assets/thumbnail.png";
import BNEG from "../../assets/BNEG.png";

const pages = ["Contracts", "Nodes", "Validator", "Wallets"];
const settings = [
  "Smart Contract Register",
  "Identify Protocol",
  "Network",
  "Sign In",
];

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
      sx={{ backgroundColor: "transparent", padding: "20px" }}
    >
      <Container maxWidth="xl" sx={{}}>
        <Toolbar disableGutters>
          <Link to={"/"}>
            <Typography
              variant="h6"
              noWrap
              component="a"
              sx={{
                // border: "3px solid red",
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "white",
                textDecoration: "none",
              }}
            >
              SAMRACHANA
            </Typography>
          </Link>
          <Box
            sx={{
              // border: "3px solid red",
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
                display: { xs: "block", md: "none" },
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
          <Link to={"/home"}>
            <Typography
              variant="h5"
              noWrap
              component="a"
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
              <img src={thumbnail} alt="Thumbnail Image" />
            </Typography>
          </Link>
          <Box
            sx={{
              flexGrow: 1,
              display: {
                xs: "none",
                md: "flex",
                // border: "3px solid red",
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
                <Link to={"/contracts"}>
                  <Button
                    sx={{
                      color: "white",
                      fontWeight: "light",
                      fontSize: "18px",
                    }}
                  >
                    Smart Contract register
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
                    Identify Protocol
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
                    Network
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
                    SignIn
                  </Button>
                </Link>
              </Box>

              {/* <Box>
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
              </Box> */}
            </Box>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
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
          {/* <Box ml={10}>
            <Button
              sx={{
                color: "white",
                // border: "2px solid white",
                borderRadius: "20px",
                padding: "5px",
                width: "85px",
              }}
            >
              Sign In
            </Button>
          </Box> */}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavBar;
