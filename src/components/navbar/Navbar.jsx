import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { NavLink } from "react-router-dom";
const drawerWidth = 240;
const navItems = ["About", "Products", "Contact"];

function Navbar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        MUI
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        component="nav"
        color="secondary"
        style={{ backgroundColor: "black" }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 0, display: { xs: "none", sm: "block" } }}
          >
            MUI
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "flex" }, flexGrow: 1 }}>
            <NavLink to="../" style={{ textDecoration: "none" }}>
              <Button
                sx={{
                  ml: "30px",
                  color: "gray",
                  position: "relative",
                }}
              >
                About
              </Button>
            </NavLink>

            <NavLink to="../products" style={{ textDecoration: "none" }}>
              <Button
                sx={{
                  ml: "30px",
                  color: "gray",
                  position: "relative",
                }}
              >
                Products
              </Button>
            </NavLink>
            <NavLink to="../cart" style={{ textDecoration: "none" }}>
              <Button
                sx={{
                  ml: "30px",
                  color: "gray",
                  position: "relative",
                }}
              >
                Cart
              </Button>
            </NavLink>
          </Box>
          <Box
            sx={{
              display: { xs: "none", sm: "flex" },
              flexGrow: 0,
            }}
          >
            {/* <Button
              sx={{
                color: "#fff",
                position: "relative",
              }}
            >
              <LightModeIcon sx={{ color: "white" }} />
            </Button> */}
            <Button
              sx={{
                color: "#fff",
                position: "relative",
              }}
            >
              <DarkModeIcon sx={{ color: "white" }} />
            </Button>

            <NavLink to="../login" style={{ textDecoration: "none" }}>
              <Button
                sx={{
                  ml: "5px",
                  color: "#fff",
                  position: "relative",
                  textTransform: "capitalize",
                }}
              >
                Login
              </Button>
            </NavLink>
            <NavLink to="../register" style={{ textDecoration: "none" }}>
              <Button
                sx={{
                  ml: "5px",
                  color: "#fff",
                  position: "relative",
                  textTransform: "capitalize",
                  bgcolor: " gray",
                }}
              >
                Register
              </Button>
            </NavLink>
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
        ></Typography>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>

      <Toolbar />
    </Box>
  );
}

Navbar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Navbar;
