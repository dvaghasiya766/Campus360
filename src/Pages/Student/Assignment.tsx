import React from "react";
import { Box, Typography, Container } from "@mui/material";

const Assignment = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h4" sx={{ fontFamily: "Oswald", mb: 3 }}>
        Assignments
      </Typography>
      <Box sx={{ p: 3, backgroundColor: "white", borderRadius: 2 }}>
        <Typography variant="body1" sx={{ fontFamily: "Roboto Condensed" }}>
          Your assignments will appear here.
        </Typography>
      </Box>
    </Container>
  );
};

export default Assignment;