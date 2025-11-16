import React from "react";
import { Box } from "@mui/material";
import TopNav from "../Components/Guest/TopNav";
import HeroSection from "../Components/Guest/HeroSection";
import StatsSection from "../Components/Guest/StatsSection";
import FeatureCards from "../Components/Guest/FeatureCards";
import AboutSection from "../Components/Guest/AboutSection";
import ContactSection from "../Components/Guest/ContactSection";
import CTASection from "../Components/Guest/CTASection";
import BottomNav from "../Components/Guest/BottomNav";

const Home = () => {
  return (
    <Box id="home">
      <TopNav />
      <HeroSection />
      <StatsSection />
      <FeatureCards />
      <AboutSection />
      <CTASection />
      <ContactSection />
      <BottomNav />
    </Box>
  );
};

export default Home;
