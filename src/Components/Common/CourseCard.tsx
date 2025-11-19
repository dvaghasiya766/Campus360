import React, { useState } from "react";
import {
  Card,
  CardContent,
  Avatar,
  Typography,
  Button,
  Box,
} from "@mui/material";
import Colors from "../../Const/Colors";
import { Visibility, School } from "@mui/icons-material";

interface CourseCardProps {
  courseName?: string;
  courseCode?: string;
  facultyName?: string;
  instructorName?: string;
  color?: string;
  credits?: number;
  onView?: () => void;
}

const CourseCard: React.FC<CourseCardProps> = ({
  courseName = "Course Name",
  courseCode = "CS101",
  facultyName = "Faculty Name",
  instructorName = "Instructor Name",
  color = Colors.Blue,
  credits = 3,
  onView = () => {},
}) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <Card
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      sx={{
        flexGrow: 1,
        display: "flex",
        alignItems: "center",
        gap: 2,
        padding: 2,
        overflow: "visible",
        marginRight: 2,
        borderRadius: 3,
        backgroundColor: Colors.LightGray,
        border: `2px solid ${color}20`,
        borderLeft: `4px solid ${color}`,
        position: "relative",
        cursor: "pointer",
        transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
        boxShadow: "0 2px 6px rgba(0,0,0,0.06)",
        "&:hover": {
          boxShadow: `0 8px 25px ${color}25`,
          transform: "translateY(-4px) scale(1.02)",
          backgroundColor: `${color}02`,
          border: `2px solid ${color}`,
          borderLeft: `6px solid ${color}`,
        },
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `linear-gradient(135deg, ${color}08, transparent)`,
          borderRadius: 3,
          opacity: isHovered ? 1 : 0,
          transition: "opacity 0.3s ease",
        },
      }}
    >
      {/* Animated Avatar */}
      <Box sx={{ position: "relative", zIndex: 1 }}>
        <Avatar
          sx={{
            bgcolor: color + "15",
            color: color,
            width: 64,
            height: 64,
            fontSize: 14,
            fontWeight: 700,
            textTransform: "uppercase",
            border: `2px solid ${color}30`,
            transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
            transform: isHovered
              ? "rotate(5deg) scale(1.1)"
              : "rotate(0deg) scale(1)",
            boxShadow: isHovered ? `0 4px 15px ${color}40` : "none",
          }}
        >
          {courseCode}
        </Avatar>
        <School
          sx={{
            position: "absolute",
            top: -5,
            right: -5,
            fontSize: 16,
            color: color,
            opacity: isHovered ? 1 : 0,
            transform: isHovered
              ? "scale(1) rotate(15deg)"
              : "scale(0) rotate(0deg)",
            transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
          }}
        />
      </Box>

      {/* Animated Info Section */}
      <CardContent
        sx={{
          flexGrow: 1,
          padding: "0 !important",
          minWidth: 0,
          position: "relative",
          zIndex: 1,
        }}
      >
        <Typography
          variant="h6"
          sx={{
            fontWeight: 600,
            color: "#333",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            transition: "all 0.3s ease",
            transform: isHovered ? "translateX(5px)" : "translateX(0px)",
          }}
        >
          {courseName}
        </Typography>

        <Typography
          variant="caption"
          sx={{
            color: color,
            fontWeight: 600,
            mb: 1,
            display: "block",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            transition: "all 0.3s ease 0.1s",
            transform: isHovered ? "translateX(5px)" : "translateX(0px)",
          }}
        >
          {courseCode} • {credits} Credits
        </Typography>

        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            mb: 0.5,
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            transition: "all 0.3s ease 0.2s",
            maxWidth: 150,
            overflowX: "clip",
            transform: isHovered ? "translateX(5px)" : "translateX(0px)",
          }}
        >
          <strong>Faculty:</strong> {facultyName}
        </Typography>

        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            transition: "all 0.3s ease 0.3s",
            maxWidth: 153,
            overflowX: "clip",
            transform: isHovered ? "translateX(5px)" : "translateX(0px)",
          }}
        >
          <strong>Instructor:</strong> {instructorName}
        </Typography>
      </CardContent>

      {/* Animated View Button */}
      <Box sx={{ position: "relative", zIndex: 1 }}>
        <Button
          variant="contained"
          size="small"
          onClick={onView}
          sx={{
            minWidth: 40,
            width: 40,
            height: 40,
            padding: 0,
            backgroundColor: color,
            borderRadius: 2,
            boxShadow: `0 2px 8px ${color}40`,
            transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
            transform: isHovered
              ? "scale(1.1) rotate(5deg)"
              : "scale(1) rotate(0deg)",
            "&:hover": {
              backgroundColor: color,
              transform: "scale(1.15) rotate(10deg)",
              boxShadow: `0 6px 20px ${color}60`,
            },
            "&:active": {
              transform: "scale(0.95)",
            },
          }}
        >
          <Visibility
            sx={{
              fontSize: 18,
              color: "white",
              transition: "transform 0.2s ease",
              transform: isHovered ? "scale(1.2)" : "scale(1)",
            }}
          />
        </Button>
      </Box>
    </Card>
  );
};

export default CourseCard;
