import { createTheme } from "@mui/material";
import { blueGrey, cyan, pink } from "@mui/material/colors";

export const testTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: pink["A200"],
    },
    secondary: {
      main: cyan["A400"],
    },
    background: {
      default: blueGrey["800"],
      paper: blueGrey["700"],
    },
  },
});