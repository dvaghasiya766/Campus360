import React from "react";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  Box,
  Grow,
  Container,
} from "@mui/material";
import {
  Palette,
  PhoneIphone,
  Settings,
  Bolt,
  Bookmark,
  Description,
} from "@mui/icons-material";
import Colors from "../../Const/Colors";

const features = [
  {
    title: "Colourful Palette",
    desc: "Carefully selected colors that work in harmony, including vibrant pinks, yellows, and greens that pop on light backgrounds.",
    icon: <Palette />,
    bg: Colors.LightPinch,
    iconColor: Colors.Pinch,
  },
  {
    title: "Fully Responsive",
    desc: "Looks great on any device, from mobile phones to large desktop displays, with adaptive components.",
    icon: <PhoneIphone />,
    bg: Colors.LightGreen,
    iconColor: Colors.Green,
  },
  {
    title: "Easy Customization",
    desc: "Change colors, fonts, and components with simple CSS variables. No complex overrides needed.",
    icon: <Settings />,
    bg: Colors.LightPurple,
    iconColor: Colors.Purple,
  },
  {
    title: "Performance Optimized",
    desc: "Lightweight code that loads fast and doesn't bog down your application with unnecessary bloat.",
    icon: <Bolt />,
    bg: Colors.LightBlue,
    iconColor: Colors.Blue,
  },
  {
    title: "Component Library",
    desc: "Pre-built components for buttons, cards, forms, modals and more — all styled consistently.",
    icon: <Bookmark />,
    bg: Colors.LightBrown,
    iconColor: Colors.Brown,
  },
  {
    title: "Comprehensive Docs",
    desc: "Detailed documentation with examples for every component and customization option.",
    icon: <Description />,
    bg: Colors.LightCyan,
    iconColor: Colors.Cyan,
  },
];

const FeatureCards = () => {
  return (
    <>
      <Box id="features" sx={{ pt: 8, backgroundColor: "white" }}>
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
              Why Choose Campus360?
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
              Discover the features that make Campus360 the perfect platform for
              your academic success
            </Typography>
          </Box>
        </Container>
      </Box>
      <Grid container spacing={3} sx={{ px: { xs: 2, md: 8 }, mb: 8 }}>
        {features.map((item, index) => (
          <Grow in={true} timeout={500 + index * 200} key={index}>
            <Grid size={{ xs: 12, sm: 6, md: 4 }}>
              <Card
                elevation={0}
                sx={{
                  height: "100%",
                  borderRadius: 4,
                  border: `1px solid ${item.bg}`,
                  background:
                    "linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)",
                  transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                  cursor: "pointer",
                  position: "relative",
                  overflow: "hidden",
                  "&::before": {
                    content: '""',
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: "4px",
                    background: `linear-gradient(90deg, ${item.iconColor}, ${item.bg})`,
                    transform: "scaleX(0)",
                    transformOrigin: "left",
                    transition: "transform 0.3s ease",
                  },
                  "&:hover": {
                    transform: "translateY(-8px)",
                    boxShadow: `0 20px 40px rgba(0,0,0,0.1), 0 0 0 1px ${item.bg}`,
                    "&::before": {
                      transform: "scaleX(1)",
                    },
                    "& .icon-container": {
                      transform: "scale(1.1) rotate(5deg)",
                      boxShadow: `0 8px 25px ${item.iconColor}40`,
                    },
                    "& .feature-title": {
                      color: item.iconColor,
                    },
                  },
                }}
              >
                <CardContent
                  sx={{
                    p: 3,
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Box
                    className="icon-container"
                    sx={{
                      width: 56,
                      height: 56,
                      borderRadius: "16px",
                      backgroundColor: item.bg,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      mb: 3,
                      transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                      position: "relative",
                      "&::after": {
                        content: '""',
                        position: "absolute",
                        inset: -2,
                        borderRadius: "18px",
                        background: `linear-gradient(45deg, ${item.iconColor}, ${item.bg})`,
                        zIndex: -1,
                        opacity: 0,
                        transition: "opacity 0.3s ease",
                      },
                    }}
                  >
                    <Box
                      sx={{ color: item.iconColor, fontSize: 28, zIndex: 1 }}
                    >
                      {item.icon}
                    </Box>
                  </Box>

                  <Typography
                    className="feature-title"
                    variant="h6"
                    fontWeight={700}
                    gutterBottom
                    sx={{
                      transition: "color 0.3s ease",
                      mb: 2,
                    }}
                  >
                    {item.title}
                  </Typography>

                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{
                      lineHeight: 1.6,
                      flexGrow: 1,
                    }}
                  >
                    {item.desc}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grow>
        ))}
      </Grid>
    </>
  );
};

FeatureCards.displayName = "FeatureCards";

export default FeatureCards;
