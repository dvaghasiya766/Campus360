import React, { useState } from "react";
import {
  Card,
  CardContent,
  Avatar,
  Typography,
  Button,
  Box,
} from "@mui/material";
import { Visibility, Announcement as AnnouncementIcon } from "@mui/icons-material";
import DateChip from "./DateChip";
import Colors from "../../Const/Colors";
import { AnnouncementItem } from "./AnnouncementModal";

interface AnnouncementCardProps {
  announcement: AnnouncementItem;
  onView: (announcement: AnnouncementItem) => void;
  color?: string;
}

const AnnouncementCard: React.FC<AnnouncementCardProps> = ({
  announcement,
  onView,
  color = Colors.Blue,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 2,
        padding: 2,
        overflow: "visible",
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
      <Box sx={{ position: "relative", zIndex: 1 }}>
        <Avatar
          sx={{
            bgcolor: color + "15",
            color: color,
            width: 64,
            height: 64,
            fontSize: 14,
            fontWeight: 700,
            border: `2px solid ${color}30`,
            transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
            transform: isHovered
              ? "rotate(5deg) scale(1.1)"
              : "rotate(0deg) scale(1)",
            boxShadow: isHovered ? `0 4px 15px ${color}40` : "none",
          }}
        >
          <AnnouncementIcon />
        </Avatar>
      </Box>

      <CardContent
        sx={{
          flexGrow: 1,
          padding: "0 !important",
          minWidth: 0,
          position: "relative",
          zIndex: 1,
        }}
      >
        <Box display="flex" justifyContent="space-between" alignItems="flex-start" mb={1}>
          <Typography
            variant="h6"
            sx={{
              fontFamily: "Oswald",
              fontWeight: 600,
              color: "#333",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
              transition: "all 0.3s ease",
              transform: isHovered ? "translateX(5px)" : "translateX(0px)",
              flex: 1,
              mr: 2,
            }}
          >
            {announcement.title}
          </Typography>
          <DateChip date={announcement.date} color={color} />
        </Box>

        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            textOverflow: "ellipsis",
            transition: "all 0.3s ease 0.1s",
            transform: isHovered ? "translateX(5px)" : "translateX(0px)",
            lineHeight: 1.4,
          }}
        >
          {announcement.content}
        </Typography>
      </CardContent>

      <Box sx={{ position: "relative", zIndex: 1 }}>
        <Button
          variant="contained"
          size="small"
          onClick={() => onView(announcement)}
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

export default AnnouncementCard;