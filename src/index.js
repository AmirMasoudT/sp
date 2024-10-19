import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import Vazir from "./fonts/Vazirmatn.ttf";

const theme = createTheme({
  direction: "rtl",
  palette: {
    primary: {
      main: "#002709",
    },
    secondary: {
      main: "#b0eab1",
    },
  },
  typography: {
    fontFamily: "Vazir",
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'Vazir';
          font-style: normal;
          font-weight: 400;
          src: url(${Vazir});
        }
      `,
    },
  },
});

const el = document.getElementById("root");
const root = ReactDOM.createRoot(el);

root.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <App />
  </ThemeProvider>
);
