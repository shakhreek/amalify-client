// theme.js
import { createTheme } from "@mui/material/styles";

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#1976d2", // Blue color for example
    },
    secondary: {
      main: "#dc004e", // Pink color for example
    },
    background: {
      default: "#ffffff", // White background for light mode
      paper: "#f4f6f8",
    },
  },
  typography: {
    fontFamily: "Mulish, sans-serif",
    h1: { fontWeight: 700 },
    h2: { fontWeight: 700 },
    h3: { fontWeight: 700 },
    h4: { fontWeight: 700 },
    h5: { fontWeight: 700 },
    h6: { fontWeight: 700 },
    subtitle1: { fontWeight: 700 },
    subtitle2: { fontWeight: 700 },
    body1: { fontWeight: 700 },
    body2: { fontWeight: 700 },
    button: { fontWeight: 700 },
    caption: { fontWeight: 700 },
    overline: { fontWeight: 700 },
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#90caf9", // Blue color for dark mode
    },
    secondary: {
      main: "#f48fb1", // Pink color for dark mode
    },
    background: {
      default: "#121212", // Dark background for dark mode
      paper: "#1d1d1d",
    },
  },
  typography: {
    fontFamily: "Mulish, sans-serif",
    h1: { fontWeight: 700 },
    h2: { fontWeight: 700 },
    h3: { fontWeight: 700 },
    h4: { fontWeight: 700 },
    h5: { fontWeight: 700 },
    h6: { fontWeight: 700 },
    subtitle1: { fontWeight: 700 },
    subtitle2: { fontWeight: 700 },
    body1: { fontWeight: 700 },
    body2: { fontWeight: 700 },
    button: { fontWeight: 700 },
    caption: { fontWeight: 700 },
    overline: { fontWeight: 700 },
  },
});
