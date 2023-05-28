import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#00D3D5",
      contrastText: "#000",
      light: "#ffa726",
      dark: "#ef6c00",
    },
    text: {
      primary: "#fff",
      secondary: "#aaa",
      disabled: "#aaa",
    },
    background: {
      paper: "#222",
      default: "#222",
    },
    common: {
      black: "#00D3D5",
    },
  },
});

export default theme;
