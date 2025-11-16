import React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import AppRoutes from "./Routes/AppRoutes";

const theme = createTheme({
  typography: {
    fontFamily: ["Roboto Condensed", "Oswald", "Arial", "sans-serif"].join(","),
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppRoutes />
    </ThemeProvider>
  );
};

export default App;
