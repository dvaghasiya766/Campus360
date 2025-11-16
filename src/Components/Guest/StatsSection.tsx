import React from "react";
import { Box, Typography, Container, Grid } from "@mui/material";
import { School, People, Event, Star } from "@mui/icons-material";

const stats = [
  { icon: <School />, number: "50+", label: "Universities" },
  { icon: <People />, number: "10K+", label: "Active Students" },
  { icon: <Event />, number: "500+", label: "Events Hosted" },
  { icon: <Star />, number: "4.9", label: "User Rating" },
];

const StatsSection = () => {
  return (
    <Box sx={{ py: 6, backgroundColor: "#f8f9fa" }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {stats.map((stat, index) => (
            <Grid size={{ xs: 6, md: 3 }} key={index}>
              <Box sx={{ textAlign: "center" }}>
                <Box
                  sx={{
                    width: 60,
                    height: 60,
                    borderRadius: "50%",
                    background: "linear-gradient(45deg, #4CAF50, #2196F3)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    mx: "auto",
                    mb: 2,
                    color: "white",
                  }}
                >
                  {stat.icon}
                </Box>
                <Typography
                  variant="h3"
                  sx={{
                    fontFamily: "Oswald",
                    fontWeight: 700,
                    color: "#333333",
                    mb: 1,
                  }}
                >
                  {stat.number}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    fontFamily: "Roboto Condensed",
                    color: "#666666",
                  }}
                >
                  {stat.label}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default StatsSection;
