import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import Vazir from "./fonts/Vazirmatn.ttf";

const theme = createTheme({
  cssVariables: true,
  direction: "rtl",
  palette: {
    primary: {
      // main: "#002709",
      main: "#194119",
    },
    secondary: {
      main: "#B0EBB1",
      // main: "#bfcea8",
    },
    third: {
      main: "#AAC0AA",
    },
  },
  typography: {
    fontFamily: "Vazir",
    fontSize: 12,
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
