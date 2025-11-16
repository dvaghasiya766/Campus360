import React from "react";
import {
  Box,
  Typography,
  IconButton,
  Container,
  Divider,
  Grid,
} from "@mui/material";
import {
  Facebook,
  Twitter,
  Instagram,
  LinkedIn,
  Email,
  Phone,
} from "@mui/icons-material";

const BottomNav = () => {
  return (
    <Box
      component="footer"
      sx={{
        background:
          "linear-gradient(135deg, #333333 0%, #2a2a2a 50%, #1a1a1a 100%)",
        color: "#FFFFFF",
        mt: 6,
        position: "relative",
        overflow: "hidden",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "3px",
          background:
            "linear-gradient(90deg, #4CAF50, #2196F3, #FF9800, #E91E63)",
        },
      }}
    >
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Grid container spacing={4} alignItems="center">
          {/* Logo Section */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: { xs: "center", md: "flex-start" },
              }}
            >
              <Box
                sx={{
                  width: 50,
                  height: 50,
                  borderRadius: "12px",
                  background: "linear-gradient(45deg, #4CAF50, #2196F3)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  mr: 2,
                  boxShadow: "0 4px 15px rgba(76, 175, 80, 0.3)",
                }}
              >
                <Typography
                  variant="h5"
                  sx={{ color: "white", fontWeight: 800, fontFamily: "Oswald" }}
                >
                  C
                </Typography>
              </Box>
              <Box>
                <Typography
                  variant="h5"
                  sx={{ fontWeight: 700, mb: 0.5, fontFamily: "Oswald" }}
                >
                  Campus360
                </Typography>
                <Typography
                  variant="caption"
                  sx={{ opacity: 0.7, fontFamily: "Roboto Condensed" }}
                >
                  Your Campus, Connected
                </Typography>
              </Box>
            </Box>
          </Grid>

          {/* Contact Info */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Box sx={{ textAlign: { xs: "center", md: "left" } }}>
              <Typography
                variant="h6"
                sx={{ mb: 2, fontWeight: 600, fontFamily: "Oswald" }}
              >
                Get in Touch
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  mb: 1,
                  justifyContent: { xs: "center", md: "flex-start" },
                }}
              >
                <Email sx={{ mr: 1, fontSize: 18, opacity: 0.8 }} />
                <Typography
                  variant="body2"
                  sx={{ fontFamily: "Roboto Condensed" }}
                >
                  contact@campus360.com
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: { xs: "center", md: "flex-start" },
                }}
              >
                <Phone sx={{ mr: 1, fontSize: 18, opacity: 0.8 }} />
                <Typography
                  variant="body2"
                  sx={{ fontFamily: "Roboto Condensed" }}
                >
                  +1 (555) 123-4567
                </Typography>
              </Box>
            </Box>
          </Grid>

          {/* Social Media */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Box sx={{ textAlign: { xs: "center", md: "right" } }}>
              <Typography
                variant="h6"
                sx={{ mb: 2, fontWeight: 600, fontFamily: "Oswald" }}
              >
                Follow Us
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: { xs: "center", md: "flex-end" },
                }}
              >
                {[
                  { icon: <Facebook />, color: "#1877F2" },
                  { icon: <Twitter />, color: "#1DA1F2" },
                  { icon: <Instagram />, color: "#E4405F" },
                  { icon: <LinkedIn />, color: "#0A66C2" },
                ].map((social, index) => (
                  <IconButton
                    key={index}
                    sx={{
                      color: "#FFFFFF",
                      mx: 0.5,
                      transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                      "&:hover": {
                        color: social.color,
                        transform: "translateY(-3px) scale(1.1)",
                        boxShadow: `0 8px 25px ${social.color}40`,
                      },
                    }}
                  >
                    {social.icon}
                  </IconButton>
                ))}
              </Box>
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ my: 3, borderColor: "rgba(255,255,255,0.1)" }} />

        {/* Bottom Section */}
        <Box sx={{ textAlign: "center" }}>
          <Typography
            variant="body2"
            sx={{ opacity: 0.7, mb: 1, fontFamily: "Roboto Condensed" }}
          >
            © 2024 Campus360. All rights reserved.
          </Typography>
          <Typography
            variant="caption"
            sx={{ opacity: 0.5, fontFamily: "Roboto Condensed" }}
          >
            Made with ❤️ for students, by students
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default BottomNav;
