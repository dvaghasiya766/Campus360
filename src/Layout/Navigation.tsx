import React from "react";
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
} from "@mui/icons-material";
import { useLocation, NavLink } from "react-router-dom";

interface NavigationProps {
  userType: "student" | "admin" | "faculty";
}

const Navigation: React.FC<NavigationProps> = ({ userType = "student" }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const location = useLocation();

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
        width: isMobile ? "100%" : 250,
        height: "100vh",
        background: "linear-gradient(180deg, #333333 0%, #1a1a1a 100%)",
        color: "white",
      }}
    >
      {/* Logo */}
      <Box sx={{ p: 3, borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
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
            >
              <ListItemButton
                // onClick={() => navigate(`/${userType}/${item.id}`)}
                sx={{
                  borderRadius: 2,
                  transition: "all 0.3s ease",
                  backgroundColor:
                    selectedItem === item.label
                      ? "rgba(76, 175, 80, 0.2)"
                      : "transparent",
                  border:
                    selectedItem === item.label
                      ? "1px solid #4CAF50"
                      : "1px solid transparent",
                  "&:hover": {
                    backgroundColor:
                      selectedItem === item.label
                        ? "rgba(76, 175, 80, 0.3)"
                        : "rgba(255,255,255,0.1)",
                    transform: "translateX(5px)",
                  },
                }}
              >
                <ListItemIcon
                  sx={{
                    color:
                      selectedItem === item.label
                        ? "#4CAF50"
                        : "rgba(255,255,255,0.7)",
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
                        selectedItem === item.label
                          ? "#4CAF50"
                          : "rgba(255,255,255,0.9)",
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
      <Drawer
        variant="temporary"
        open={true}
        sx={{
          "& .MuiDrawer-paper": {
            width: 250,
            boxSizing: "border-box",
          },
        }}
      >
        <NavigationContent />
      </Drawer>
    );
  }

  return (
    <Box
      sx={{
        position: "fixed",
        left: 0,
        top: 0,
        zIndex: 1000,
      }}
    >
      <NavigationContent />
    </Box>
  );
};

export default Navigation;
