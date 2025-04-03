import { createTheme } from "@mui/material/styles";

const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "hsla(42, 20%, 53%, 1)", // lion
      light: "hsla(42, 20%, 63%, 1)",
      dark: "hsla(42, 20%, 43%, 1)",
    },
    secondary: {
      main: "hsla(38, 44%, 29%, 1)", // field-drab
      light: "hsla(38, 44%, 39%, 1)",
      dark: "hsla(38, 44%, 19%, 1)",
    },
    success: {
      main: "hsla(13, 69%, 55%, 1)", // cinnabar
      light: "hsla(13, 69%, 65%, 1)",
      dark: "hsla(13, 69%, 45%, 1)",
    },
    info: {
      main: "hsla(37, 38%, 68%, 1)", // tan
      light: "hsla(37, 38%, 78%, 1)",
      dark: "hsla(37, 38%, 58%, 1)",
    },
    warning: {
      main: "hsla(37, 38%, 68%, 1)", // tan
      light: "hsla(37, 38%, 78%, 1)",
      dark: "hsla(37, 38%, 58%, 1)",
    },
    background: {
      default: "#f5f5f5",
      paper: "#ffffff",
    },
  },
  typography: {
    fontFamily: [
      "Inter",
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
    ].join(","),
  },
});

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "hsla(42, 20%, 53%, 1)", // lion
      light: "hsla(42, 20%, 63%, 1)",
      dark: "hsla(42, 20%, 43%, 1)",
    },
    secondary: {
      main: "hsla(38, 44%, 29%, 1)", // field-drab
      light: "hsla(38, 44%, 39%, 1)",
      dark: "hsla(38, 44%, 19%, 1)",
    },
    success: {
      main: "hsla(13, 69%, 55%, 1)", // cinnabar
      light: "hsla(13, 69%, 65%, 1)",
      dark: "hsla(13, 69%, 45%, 1)",
    },
    info: {
      main: "hsla(37, 38%, 68%, 1)", // tan
      light: "hsla(37, 38%, 78%, 1)",
      dark: "hsla(37, 38%, 58%, 1)",
    },
    warning: {
      main: "hsla(37, 38%, 68%, 1)", // tan
      light: "hsla(37, 38%, 78%, 1)",
      dark: "hsla(37, 38%, 58%, 1)",
    },
    background: {
      default: "#121212",
      paper: "#1e1e1e",
    },
  },
  typography: {
    fontFamily: [
      "Inter",
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
    ].join(","),
  },
});

export { lightTheme, darkTheme };
