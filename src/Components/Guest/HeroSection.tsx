import React from "react";
import { Box, Typography, Button, Container } from "@mui/material";
import { ArrowForward, PlayArrow } from "@mui/icons-material";

const HeroSection = () => {
  return (
    <Box
      sx={{
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        color: "white",
        py: 8,
        position: "relative",
        overflow: "hidden",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: "url('data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 100\"><circle cx=\"20\" cy=\"20\" r=\"2\" fill=\"%23ffffff\" opacity=\"0.1\"/><circle cx=\"80\" cy=\"80\" r=\"2\" fill=\"%23ffffff\" opacity=\"0.1\"/><circle cx=\"40\" cy=\"60\" r=\"1\" fill=\"%23ffffff\" opacity=\"0.1\"/></svg>')",
        },
      }}
    >
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Box sx={{ textAlign: "center", maxWidth: "800px", mx: "auto" }}>
          <Typography
            variant="h2"
            sx={{
              fontFamily: "Oswald",
              fontWeight: 700,
              mb: 3,
              fontSize: { xs: "2.5rem", md: "3.5rem" },
            }}
          >
            Connect Your Campus
          </Typography>
          <Typography
            variant="h5"
            sx={{
              fontFamily: "Roboto Condensed",
              mb: 4,
              opacity: 0.9,
              lineHeight: 1.6,
            }}
          >
            The ultimate platform for students to connect, collaborate, and thrive in their academic journey
          </Typography>
          <Box sx={{ display: "flex", gap: 2, justifyContent: "center", flexWrap: "wrap" }}>
            <Button
              variant="contained"
              size="large"
              endIcon={<ArrowForward />}
              sx={{
                background: "linear-gradient(45deg, #4CAF50, #2196F3)",
                fontFamily: "Roboto Condensed",
                fontWeight: 600,
                px: 4,
                py: 1.5,
                borderRadius: 3,
              }}
            >
              Get Started
            </Button>
            <Button
              variant="outlined"
              size="large"
              startIcon={<PlayArrow />}
              sx={{
                color: "white",
                borderColor: "white",
                fontFamily: "Roboto Condensed",
                fontWeight: 600,
                px: 4,
                py: 1.5,
                borderRadius: 3,
                "&:hover": {
                  borderColor: "white",
                  backgroundColor: "rgba(255,255,255,0.1)",
                },
              }}
            >
              Watch Demo
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default HeroSection;