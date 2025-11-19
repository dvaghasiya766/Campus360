import React, { useState } from "react";
import { Button, Menu, MenuItem, ListItemIcon, ListItemText } from "@mui/material";
import { Logout, KeyboardArrowDown, ExitToApp } from "@mui/icons-material";
import Colors from "../../Const/Colors";

interface LogoutButtonProps {
  onLogout?: () => void;
}

const LogoutButton: React.FC<LogoutButtonProps> = ({ onLogout }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    handleClose();
    if (onLogout) {
      onLogout();
    }
  };

  const handleExitApp = () => {
    handleClose();
    // For web browsers
    if (window.confirm('Are you sure you want to exit the application?')) {
      window.close();
      // Fallback for browsers that don't allow window.close()
      if (!window.closed) {
        window.location.href = 'about:blank';
      }
    }
  };

  return (
    <>
      <Button
        variant="contained"
        onClick={handleClick}
        startIcon={<Logout />}
        endIcon={<KeyboardArrowDown />}
        fullWidth
        sx={{
          backgroundColor: Colors.DarkRed,
          color: "white",
          fontWeight: "600",
          borderRadius: 2,
          py: 1.2,
          textTransform: "none",
          fontFamily: "Roboto Condensed",
          fontSize: "0.95rem",
          boxShadow: "0 2px 8px rgba(183, 28, 28, 0.3)",
          border: `1px solid ${Colors.Rose}`,
          transition: "all 0.3s ease",
          "&:hover": {
            backgroundColor: Colors.Rose,
            transform: "translateX(3px)",
            boxShadow: "0 4px 12px rgba(244, 63, 94, 0.4)",
          },
          "&:active": {
            transform: "translateX(0px)",
          },
        }}
      >
        Logout
      </Button>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        transformOrigin={{ horizontal: "center", vertical: "top" }}
        anchorOrigin={{ horizontal: "center", vertical: "bottom" }}
        sx={{
          "& .MuiPaper-root": {
            borderRadius: 2,
            minWidth: 200,
            boxShadow: "0 8px 32px rgba(0,0,0,0.15)",
            border: `1px solid ${Colors.EnglishGray}`,
            mt: 1,
          },
        }}
      >
        <MenuItem
          onClick={handleLogout}
          sx={{
            py: 1.2,
            fontFamily: "Roboto Condensed",
            "&:hover": {
              backgroundColor: Colors.SoftBlue,
              transform: "translateX(2px)",
            },
            transition: "all 0.2s ease",
          }}
        >
          <ListItemIcon sx={{ minWidth: 36 }}>
            <Logout sx={{ color: Colors.DarkRed, fontSize: 20 }} />
          </ListItemIcon>
          <ListItemText 
            primary="Sign Out" 
            sx={{
              "& .MuiTypography-root": {
                fontFamily: "Roboto Condensed",
                fontWeight: 500,
              },
            }}
          />
        </MenuItem>
        <MenuItem
          onClick={handleExitApp}
          sx={{
            py: 1.2,
            fontFamily: "Roboto Condensed",
            "&:hover": {
              backgroundColor: Colors.LightBeige,
              transform: "translateX(2px)",
            },
            transition: "all 0.2s ease",
          }}
        >
          <ListItemIcon sx={{ minWidth: 36 }}>
            <ExitToApp sx={{ color: Colors.DarkOrange, fontSize: 20 }} />
          </ListItemIcon>
          <ListItemText 
            primary="Exit Application" 
            sx={{
              "& .MuiTypography-root": {
                fontFamily: "Roboto Condensed",
                fontWeight: 500,
              },
            }}
          />
        </MenuItem>
      </Menu>
    </>
  );
};

export default LogoutButton;