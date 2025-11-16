import React from "react";
import { Box, Typography, Button, Container } from "@mui/material";
import { GetApp, ArrowForward } from "@mui/icons-material";

const CTASection = () => {
  return (
    <Box
      sx={{
        background: "linear-gradient(135deg, #333333 0%, #1a1a1a 100%)",
        color: "white",
        py: 8,
        position: "relative",
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ textAlign: "center", maxWidth: "600px", mx: "auto" }}>
          <Typography
            variant="h3"
            sx={{
              fontFamily: "Oswald",
              fontWeight: 700,
              mb: 3,
              fontSize: { xs: "2rem", md: "3rem" },
            }}
          >
            Ready to Transform Your Campus Experience?
          </Typography>
          <Typography
            variant="h6"
            sx={{
              fontFamily: "Roboto Condensed",
              mb: 4,
              opacity: 0.9,
              lineHeight: 1.6,
            }}
          >
            Join thousands of students already using Campus360 to enhance their
            academic journey
          </Typography>
          <Box
            sx={{
              display: "flex",
              gap: 2,
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
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
              Join Now
            </Button>
            <Button
              variant="outlined"
              size="large"
              startIcon={<GetApp />}
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
              Download App
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default CTASection;
