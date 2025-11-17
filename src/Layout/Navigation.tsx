import React, { useState } from "react";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  Drawer,
  useMediaQuery,
  useTheme,
  IconButton,
  AppBar,
  Toolbar,
} from "@mui/material";
import {
  Dashboard,
  School,
  Forum,
  Campaign,
  Person,
  People,
  Assessment,
  Assignment,
  Menu as MenuIcon,
  Close as CloseIcon,
} from "@mui/icons-material";
import { useLocation, NavLink } from "react-router-dom";
import Colors from "../Const/Colors";

interface NavigationProps {
  userType: "student" | "admin" | "faculty";
  onDrawerToggle?: () => void;
}

const Navigation: React.FC<NavigationProps> = ({
  userType = "student",
  onDrawerToggle,
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
    onDrawerToggle?.();
  };

  const navigationConfig = {
    student: [
      { label: "Dashboard", icon: <Dashboard />, id: "dashboard" },
      { label: "Courses", icon: <School />, id: "courses" },
      { label: "Announcement", icon: <Campaign />, id: "announcement" },
      { label: "Assignment", icon: <Assignment />, id: "assignment" },
      { label: "Discussion", icon: <Forum />, id: "discussion" },
      { label: "Profile", icon: <Person />, id: "profile" },
    ],
    admin: [
      { label: "Dashboard", icon: <Dashboard />, id: "dashboard" },
      { label: "Courses", icon: <School />, id: "courses" },
      { label: "Users", icon: <People />, id: "users" },
      { label: "Notice", icon: <Campaign />, id: "notice" },
      { label: "Reports", icon: <Assessment />, id: "reports" },
      { label: "Profile", icon: <Person />, id: "profile" },
    ],
    faculty: [
      { label: "Dashboard", icon: <Dashboard />, id: "dashboard" },
      { label: "Courses", icon: <School />, id: "courses" },
      { label: "Assignment", icon: <Assignment />, id: "assignment" },
      { label: "Discussion", icon: <Forum />, id: "discussion" },
      { label: "Announcement", icon: <Campaign />, id: "announcement" },
      { label: "Profile", icon: <Person />, id: "profile" },
    ],
  };

  const navItems = navigationConfig[userType];
  const currentPath = location.pathname.split("/").pop() || navItems[0].id;
  const selectedItem =
    navItems.find((item) => item.id === currentPath)?.label ||
    navItems[0].label;

  const NavigationContent = () => (
    <Box
      sx={{
        width: 250,
        height: "100vh",
        background: `linear-gradient(180deg, ${Colors.WhiteSmoke} 0%, ${Colors.LightGray} 100%)`,
        color: "#333",
        borderRight: `1px solid ${Colors.LightBeige}`,
      }}
    >
      {/* Logo */}
      <Box
        sx={{
          p: 3,
          borderBottom: `1px solid ${Colors.LightBeige}`,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
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
              sx={{ color: "white", fontWeight: 800, fontFamily: "Oswald" }}
            >
              C
            </Typography>
          </Box>
          <Typography
            variant="h6"
            sx={{ fontWeight: 700, fontFamily: "Oswald" }}
          >
            Campus360
          </Typography>
        </Box>
        {isMobile && (
          <IconButton onClick={handleDrawerToggle} sx={{ color: "#333" }}>
            <CloseIcon />
          </IconButton>
        )}
      </Box>

      {/* Navigation Items */}
      <List sx={{ p: 2 }}>
        {navItems.map((item) => (
          <ListItem key={item.id} disablePadding sx={{ mb: 1 }}>
            <NavLink
              to={`/${userType}/${item.id}`}
              style={{
                textDecoration: "none",
                color: "inherit",
                width: "100%",
              }}
              onClick={isMobile ? handleDrawerToggle : undefined}
            >
              <ListItemButton
                // onClick={() => navigate(`/${userType}/${item.id}`)}
                sx={{
                  borderRadius: 2,
                  transition: "all 0.3s ease",
                  backgroundColor:
                    selectedItem === item.label
                      ? Colors.LogoGreen + "20"
                      : "transparent",
                  border:
                    selectedItem === item.label
                      ? `1px solid ${Colors.LogoGreen}`
                      : "1px solid transparent",
                  "&:hover": {
                    backgroundColor:
                      selectedItem === item.label
                        ? Colors.PaleGreen
                        : Colors.LogoBlue + "20",
                    // : Colors.LightBeige,
                    transform: "translateX(5px)",
                  },
                }}
              >
                <ListItemIcon
                  sx={{
                    color: selectedItem === item.label ? Colors.Green : "#666",
                    minWidth: 40,
                  }}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={item.label}
                  sx={{
                    "& .MuiTypography-root": {
                      fontFamily: "Roboto Condensed",
                      fontWeight: selectedItem === item.label ? 600 : 400,
                      color:
                        selectedItem === item.label ? Colors.Green : "#555",
                    },
                  }}
                />
              </ListItemButton>
            </NavLink>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  if (isMobile) {
    return (
      <>
        <AppBar
          position="fixed"
          sx={{
            background: `linear-gradient(90deg, ${Colors.WhiteSmoke} 0%, ${Colors.primary} 100%)`,
            color: "#333",
            boxShadow: `0 2px 4px ${Colors.EnglishGray}`,
          }}
        >
          <Toolbar>
            <IconButton
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, color: "#333" }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              sx={{ fontFamily: "Oswald", fontWeight: 700 }}
            >
              Campus360
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          sx={{
            "& .MuiDrawer-paper": {
              width: 250,
              boxSizing: "border-box",
            },
          }}
        >
          <NavigationContent />
        </Drawer>
      </>
    );
  }

  return (
    <Box
      sx={{
        position: "fixed",
        left: 0,
        top: 0,
        zIndex: 1000,
        borderRight: `3px solid ${Colors.Gray}`,
      }}
    >
      <NavigationContent />
    </Box>
  );
};

export { Navigation };
export default Navigation;
