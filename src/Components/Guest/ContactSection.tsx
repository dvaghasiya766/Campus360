import React from "react";
import {
  Box,
  Typography,
  Container,
  Grid,
  TextField,
  Button,
} from "@mui/material";
import { Email, Phone, LocationOn, Send } from "@mui/icons-material";

const ContactSection = () => {
  return (
    <Box id="contact" sx={{ py: 8, backgroundColor: "white" }}>
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
            Get In Touch
          </Typography>
          <Typography
            variant="h6"
            sx={{
              fontFamily: "Roboto Condensed",
              color: "#666666",
              maxWidth: "600px",
              mx: "auto",
            }}
          >
            Have questions? We'd love to hear from you. Send us a message and
            we'll respond as soon as possible.
          </Typography>
        </Box>

        <Grid container spacing={6}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Box>
              <Typography
                variant="h5"
                sx={{ fontFamily: "Oswald", fontWeight: 600, mb: 3 }}
              >
                Contact Information
              </Typography>

              <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
                <Box
                  sx={{
                    width: 50,
                    height: 50,
                    borderRadius: "50%",
                    background: "linear-gradient(45deg, #4CAF50, #2196F3)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    mr: 3,
                    color: "white",
                  }}
                >
                  <Email />
                </Box>
                <Box>
                  <Typography variant="h6" sx={{ fontFamily: "Oswald" }}>
                    Email
                  </Typography>
                  <Typography
                    sx={{ fontFamily: "Roboto Condensed", color: "#666666" }}
                  >
                    contact@campus360.com
                  </Typography>
                </Box>
              </Box>

              <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
                <Box
                  sx={{
                    width: 50,
                    height: 50,
                    borderRadius: "50%",
                    background: "linear-gradient(45deg, #FF9800, #F44336)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    mr: 3,
                    color: "white",
                  }}
                >
                  <Phone />
                </Box>
                <Box>
                  <Typography variant="h6" sx={{ fontFamily: "Oswald" }}>
                    Phone
                  </Typography>
                  <Typography
                    sx={{ fontFamily: "Roboto Condensed", color: "#666666" }}
                  >
                    +1 (555) 123-4567
                  </Typography>
                </Box>
              </Box>

              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Box
                  sx={{
                    width: 50,
                    height: 50,
                    borderRadius: "50%",
                    background: "linear-gradient(45deg, #9C27B0, #673AB7)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    mr: 3,
                    color: "white",
                  }}
                >
                  <LocationOn />
                </Box>
                <Box>
                  <Typography variant="h6" sx={{ fontFamily: "Oswald" }}>
                    Address
                  </Typography>
                  <Typography
                    sx={{ fontFamily: "Roboto Condensed", color: "#666666" }}
                  >
                    123 Campus Street, University City, UC 12345
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <Box
              component="form"
              sx={{ display: "flex", flexDirection: "column", gap: 3 }}
            >
              <TextField
                fullWidth
                label="Name"
                variant="outlined"
                sx={{ "& label": { fontFamily: "Roboto Condensed" } }}
              />
              <TextField
                fullWidth
                label="Email"
                type="email"
                variant="outlined"
                sx={{ "& label": { fontFamily: "Roboto Condensed" } }}
              />
              <TextField
                fullWidth
                label="Message"
                multiline
                rows={4}
                variant="outlined"
                sx={{ "& label": { fontFamily: "Roboto Condensed" } }}
              />
              <Button
                variant="contained"
                size="large"
                endIcon={<Send />}
                sx={{
                  background: "linear-gradient(45deg, #4CAF50, #2196F3)",
                  fontFamily: "Roboto Condensed",
                  fontWeight: 600,
                  py: 1.5,
                  borderRadius: 2,
                }}
              >
                Send Message
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ContactSection;
