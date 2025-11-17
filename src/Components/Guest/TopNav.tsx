import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  DialogActions,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { Menu, Login, Close } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import Pages from "../../Const/Pages";

const TopNav = () => {
  const [loginOpen, setLoginOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const navItems = [
    { label: "Home", id: "home" },
    { label: "Features", id: "features" },
    { label: "About", id: "about" },
    { label: "Contact", id: "contact" },
  ];

  const scrollToSection = (sectionId: string) => {
    if (sectionId === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const loginAction = () => {
    // Placeholder for login action
    console.log("Login action triggered");
    navigate(Pages.STUDENT_DASHBOARD);
  };

  return (
    <>
      <AppBar
        position="sticky"
        sx={{
          background: "linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)",
          boxShadow: "0 2px 20px rgba(0,0,0,0.1)",
          color: "#333333",
        }}
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          {/* Logo */}
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Box
              sx={{
                width: 40,
                height: 40,
                borderRadius: "10px",
                background: "linear-gradient(45deg, #4CAF50, #2196F3)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                mr: 2,
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  color: "white",
                  fontWeight: 800,
                  fontFamily: "Oswald",
                }}
              >
                C
              </Typography>
            </Box>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 700,
                color: "#333333",
                fontFamily: "Oswald",
              }}
            >
              Campus360
            </Typography>
          </Box>

          {/* Navigation Links */}
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
            {navItems.map((item) => (
              <Button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                sx={{
                  color: "#333333",
                  fontWeight: 500,
                  fontFamily: "Roboto Condensed",
                  "&:hover": { color: "#4CAF50" },
                }}
              >
                {item.label}
              </Button>
            ))}
          </Box>

          {/* Auth Buttons */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Button
              startIcon={<Login />}
              onClick={() => setLoginOpen(true)}
              variant="contained"
              sx={{
                background: "linear-gradient(45deg, #4CAF50, #2196F3)",
                color: "white",
                fontWeight: 600,
                fontFamily: "Roboto Condensed",
                display: { xs: "none", sm: "flex" },
                px: 3,
                py: 1,
                borderRadius: 3,
                boxShadow: "0 4px 15px rgba(76, 175, 80, 0.3)",
                transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                position: "relative",
                overflow: "hidden",
                "&::before": {
                  content: '""',
                  position: "absolute",
                  top: 0,
                  left: "-100%",
                  width: "100%",
                  height: "100%",
                  background:
                    "linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)",
                  transition: "left 0.5s",
                },
                "&:hover": {
                  transform: "translateY(-2px)",
                  boxShadow: "0 8px 25px rgba(76, 175, 80, 0.4)",
                  "&::before": {
                    left: "100%",
                  },
                },
                "&:active": {
                  transform: "translateY(0px)",
                },
              }}
            >
              Login
            </Button>
            <IconButton
              sx={{
                display: { xs: "flex", md: "none" },
                color: "#333333",
                background: "linear-gradient(45deg, #4CAF50, #2196F3)",
                // color: "white",
                "&:hover": {
                  background: "linear-gradient(45deg, #45a049, #1976d2)",
                  transform: "scale(1.05)",
                },
              }}
              onClick={() => setMobileMenuOpen(true)}
            >
              <Menu />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Login Dialog */}
      <Dialog
        open={loginOpen}
        onClose={() => setLoginOpen(false)}
        maxWidth="sm"
        fullWidth
      >
        <DialogTitle
          sx={{
            fontFamily: "Oswald",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          Login to Campus360
          <IconButton onClick={() => setLoginOpen(false)}>
            <Close />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Email"
            type="email"
            fullWidth
            variant="outlined"
            sx={{ mb: 2, "& label": { fontFamily: "Roboto Condensed" } }}
          />
          <TextField
            margin="dense"
            label="Password"
            type="password"
            fullWidth
            variant="outlined"
            sx={{ "& label": { fontFamily: "Roboto Condensed" } }}
          />
        </DialogContent>
        <DialogActions sx={{ p: 3 }}>
          <Button
            onClick={() => setLoginOpen(false)}
            sx={{ fontFamily: "Roboto Condensed" }}
          >
            Cancel
          </Button>
          <Button
            variant="contained"
            sx={{
              background: "linear-gradient(45deg, #4CAF50, #2196F3)",
              fontFamily: "Roboto Condensed",
            }}
            onClick={loginAction}
          >
            Login
          </Button>
        </DialogActions>
      </Dialog>

      {/* Mobile Menu Drawer */}
      <Drawer
        anchor="right"
        open={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      >
        <Box sx={{ width: 250, pt: 2 }}>
          <List>
            {navItems.map((item) => (
              <ListItem key={item.id} disablePadding>
                <ListItemButton
                  onClick={() => {
                    setMobileMenuOpen(false);
                    scrollToSection(item.id);
                  }}
                >
                  <ListItemText
                    primary={item.label}
                    sx={{
                      "& .MuiTypography-root": {
                        fontFamily: "Roboto Condensed",
                      },
                    }}
                  />
                </ListItemButton>
              </ListItem>
            ))}
            <ListItem disablePadding>
              <ListItemButton
                onClick={() => {
                  setMobileMenuOpen(false);
                  setLoginOpen(true);
                }}
              >
                <ListItemText
                  primary="Login"
                  sx={{
                    "& .MuiTypography-root": {
                      fontFamily: "Roboto Condensed",
                    },
                  }}
                />
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default TopNav;
