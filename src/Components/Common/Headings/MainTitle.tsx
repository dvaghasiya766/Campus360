import React from "react";
import { Typography, Box } from "@mui/material";
import Colors from "../../../Const/Colors";

interface MainTitleProps {
  title: string;
  subtitle?: string;
  color?: string;
}

const MainTitle: React.FC<MainTitleProps> = ({
  title,
  subtitle,
  color = Colors.primary,
}) => {
  return (
    <Box sx={{ mb: 3 }} marginLeft={3} marginTop={1} marginBottom={0}>
      <Typography
        variant="h4"
        sx={{
          fontFamily: "Oswald",
          fontWeight: 700,
          color: color,
          mb: subtitle ? 1 : 0,
        }}
      >
        {title}
      </Typography>
      {subtitle && (
        <Typography
          variant="body1"
          sx={{
            color: "#666",
            fontFamily: "Roboto Condensed",
          }}
        >
          {subtitle}
        </Typography>
      )}
    </Box>
  );
};

export default MainTitle;
