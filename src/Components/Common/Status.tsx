import React from "react";
import { Chip } from "@mui/material";
import {
  CheckCircle,
  Cancel,
  Schedule,
  Done,
  Close,
} from "@mui/icons-material";
import Colors from "../../Const/Colors";

type StatusType = "active" | "inactive" | "pending" | "completed" | "missed";

interface StatusProps {
  type: StatusType;
  size?: "small" | "medium";
}

const Status: React.FC<StatusProps> = ({ type, size = "medium" }) => {
  const getStatusColor = (status: StatusType) => {
    switch (status) {
      case "active":
        return {
          backgroundColor: Colors.LightChillyGreen,
          color: Colors.ChillyGreen,
        };
      case "inactive":
        return {
          backgroundColor: Colors.BackgroundGray,
          color: Colors.Gray,
        };
      case "pending":
        return { backgroundColor: "#fff3e0", color: "#f57c00" };
      case "completed":
        return { backgroundColor: "#e3f2fd", color: "#1976d2" };
      case "missed":
        return { backgroundColor: "#ffebee", color: "#d32f2f" };
      default:
        return { backgroundColor: "#f5f5f5", color: "#616161" };
    }
  };

  const getStatusIcon = (status: StatusType) => {
    switch (status) {
      case "active":
        return (
          <CheckCircle
            sx={{ fontSize: 16, color: `${Colors.ChillyGreen} !important` }}
          />
        );
      case "inactive":
        return <Cancel sx={{ fontSize: 16, color: "#616161 !important" }} />;
      case "pending":
        return <Schedule sx={{ fontSize: 16, color: "#f57c00 !important" }} />;
      case "completed":
        return <Done sx={{ fontSize: 16, color: "#1976d2 !important" }} />;
      case "missed":
        return <Close sx={{ fontSize: 16, color: "#d32f2f !important" }} />;
      default:
        return <Cancel sx={{ fontSize: 16, color: "#616161 !important" }} />;
    }
  };

  return (
    <Chip
      icon={getStatusIcon(type)}
      label={type.charAt(0).toUpperCase() + type.slice(1)}
      size={size}
      sx={getStatusColor(type)}
    />
  );
};

export default Status;
