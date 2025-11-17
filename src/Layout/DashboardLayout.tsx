import React from "react";
import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import Navigation from "./Navigation";

interface DashboardLayoutProps {
  userType: "student" | "admin" | "faculty";
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ userType }) => {
  return (
    <Box sx={{ display: "flex" }}>
      <Navigation userType={userType} />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          ml: { xs: 0, md: "250px" },
          mt: { xs: "64px", md: 0 },
          minHeight: "100vh",
          backgroundColor: "#f5f5f5",
        }}
      >
        <Outlet />
      </Box>
    </Box>
  );
};

export default DashboardLayout;
