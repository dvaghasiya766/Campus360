import React from "react";
import { Box, Typography } from "@mui/material";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import Colors from "../../Const/Colors";

interface DateChipProps {
  date: string;
  color?: string;
}

const DateChip: React.FC<DateChipProps> = ({ date, color = Colors.Gray }) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 0.5,
        backgroundColor: `${color}10`,
        color: color,
        px: 1.5,
        py: 0.5,
        borderRadius: 2,
        border: `1px solid ${color}30`,
      }}
    >
      <CalendarTodayIcon sx={{ fontSize: 14 }} />
      <Typography variant="caption" sx={{ fontWeight: 500 }}>
        {date}
      </Typography>
    </Box>
  );
};

export default DateChip;
