import { createTheme } from "@mui/material";
import { blueGrey, cyan, blue } from "@mui/material/colors";

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: blue["A200"],
    },
    secondary: {
      main: cyan["A400"],
    },
    background: {
      default: blue[100],
      paper: blueGrey["700"],
    },
  },
});