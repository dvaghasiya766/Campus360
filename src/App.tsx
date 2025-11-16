import React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import Home from "./Pages/Home";

const theme = createTheme({
  typography: {
    fontFamily: [
      "Roboto Condensed",
      "Oswald",
      "Arial",
      "sans-serif",
    ].join(","),
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Home />
    </ThemeProvider>
  );
};

export default App;
