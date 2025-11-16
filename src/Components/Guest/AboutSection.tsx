import React from "react";
import { Box, Typography, Container, Grid } from "@mui/material";
import { Lightbulb, Group, Rocket } from "@mui/icons-material";

const AboutSection = () => {
  return (
    <Box id="about" sx={{ py: 8, backgroundColor: "#f8f9fa" }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: "center", mb: 6 }}>
          <Typography
            variant="h3"
            sx={{
              fontFamily: "Oswald",
              fontWeight: 700,
              color: "#333333",
              mb: 2,
            }}
          >
            About Campus360
          </Typography>
          <Typography
            variant="h6"
            sx={{
              fontFamily: "Roboto Condensed",
              color: "#666666",
              maxWidth: "800px",
              mx: "auto",
              lineHeight: 1.6,
            }}
          >
            We're revolutionizing campus life by connecting students, faculty,
            and resources through innovative technology solutions
          </Typography>
        </Box>

        <Grid container spacing={4}>
          <Grid size={{ xs: 12, md: 4 }}>
            <Box sx={{ textAlign: "center", p: 3 }}>
              <Box
                sx={{
                  width: 80,
                  height: 80,
                  borderRadius: "50%",
                  background: "linear-gradient(45deg, #FF9800, #F44336)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  mx: "auto",
                  mb: 3,
                  color: "white",
                }}
              >
                <Lightbulb sx={{ fontSize: 40 }} />
              </Box>
              <Typography
                variant="h5"
                sx={{ fontFamily: "Oswald", fontWeight: 600, mb: 2 }}
              >
                Innovation
              </Typography>
              <Typography
                variant="body1"
                sx={{ fontFamily: "Roboto Condensed", color: "#666666" }}
              >
                Cutting-edge solutions designed to enhance your academic
                experience
              </Typography>
            </Box>
          </Grid>

          <Grid size={{ xs: 12, md: 4 }}>
            <Box sx={{ textAlign: "center", p: 3 }}>
              <Box
                sx={{
                  width: 80,
                  height: 80,
                  borderRadius: "50%",
                  background: "linear-gradient(45deg, #4CAF50, #2196F3)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  mx: "auto",
                  mb: 3,
                  color: "white",
                }}
              >
                <Group sx={{ fontSize: 40 }} />
              </Box>
              <Typography
                variant="h5"
                sx={{ fontFamily: "Oswald", fontWeight: 600, mb: 2 }}
              >
                Community
              </Typography>
              <Typography
                variant="body1"
                sx={{ fontFamily: "Roboto Condensed", color: "#666666" }}
              >
                Building stronger connections between students and faculty
              </Typography>
            </Box>
          </Grid>

          <Grid size={{ xs: 12, md: 4 }}>
            <Box sx={{ textAlign: "center", p: 3 }}>
              <Box
                sx={{
                  width: 80,
                  height: 80,
                  borderRadius: "50%",
                  background: "linear-gradient(45deg, #9C27B0, #673AB7)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  mx: "auto",
                  mb: 3,
                  color: "white",
                }}
              >
                <Rocket sx={{ fontSize: 40 }} />
              </Box>
              <Typography
                variant="h5"
                sx={{ fontFamily: "Oswald", fontWeight: 600, mb: 2 }}
              >
                Growth
              </Typography>
              <Typography
                variant="body1"
                sx={{ fontFamily: "Roboto Condensed", color: "#666666" }}
              >
                Empowering students to reach their full potential
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default AboutSection;
