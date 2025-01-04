import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import Vazir from "./fonts/Vazir.woff2";
import VazirBold from "./fonts/Vazir-Bold.woff2";
import VazirLight from "./fonts/Vazir-Light.woff2";
import VazirThin from "./fonts/Vazir-Thin.woff2";
import VazirMedium from "./fonts/Vazir-Medium.woff2";
import { faIR } from "@mui/material/locale";

const theme = createTheme({
  cssVariables: true,
  direction: "rtl",
  palette: {
    primary: {
      main: "#194119",
    },
    secondary: {
      main: "#B0EBB1",
    },
    third: {
      main: "#AAC0AA",
    },
  },
  typography: {
    fontFamily: "Vazir",
    fontSize: 10,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'Vazir';
          font-style: normal;
          font-weight: 100;
          src: url(${VazirThin});
        }

        @font-face {
          font-family: 'Vazir';
          font-style: normal;
          font-weight: 300;
          src: url(${VazirLight});
        }

        @font-face {
          font-family: 'Vazir';
          font-style: normal;
          font-weight: 400;
          src: url(${Vazir});
        }

        @font-face {
          font-family: 'Vazir';
          font-style: normal;
          font-weight: 500;
          src: url(${VazirMedium});
        }

        @font-face {
          font-family: 'Vazir';
          font-style: normal;
          font-weight: 700;
          src: url(${VazirBold});
        }

        *::-webkit-scrollbar {
          width: 8px;
          height: 8px;
        }

        *::-webkit-scrollbar-track {
          background-color: var(--mui-palette-secondary-main);
        }

        *::-webkit-scrollbar-thumb {
          background-color: var(--mui-palette-primary-main);
          border-radius: 4px;
        }
      `,
    },
  },
  faIR,
});

const el = document.getElementById("root");
const root = ReactDOM.createRoot(el);

root.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <App />
  </ThemeProvider>
);
