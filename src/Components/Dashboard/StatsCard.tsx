import React from "react";
import { Card, CardContent, Typography, Box } from "@mui/material";

interface StatsCardProps {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  color: string;
  trend?: string;
}

const StatsCard: React.FC<StatsCardProps> = ({ title, value, icon, color, trend }) => {
  return (
    <Card
      sx={{
        background: `linear-gradient(135deg, ${color}20 0%, ${color}10 100%)`,
        border: `1px solid ${color}30`,
        borderRadius: 3,
        transition: "all 0.3s ease",
        "&:hover": {
          transform: "translateY(-4px)",
          boxShadow: `0 8px 25px ${color}40`,
        },
      }}
    >
      <CardContent sx={{ p: 2 }}>
        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <Box>
            <Typography variant="body2" sx={{ color: "#666", fontFamily: "Roboto Condensed", mb: 1 }}>
              {title}
            </Typography>
            <Typography variant="h5" sx={{ fontFamily: "Oswald", fontWeight: 700, color: "#333" }}>
              {value}
            </Typography>
            {trend && (
              <Typography variant="caption" sx={{ color: "#4CAF50", fontFamily: "Roboto Condensed" }}>
                {trend}
              </Typography>
            )}
          </Box>
          <Box
            sx={{
              width: 50,
              height: 50,
              borderRadius: "50%",
              background: `linear-gradient(45deg, ${color}, ${color}80)`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
            }}
          >
            {icon}
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default StatsCard;