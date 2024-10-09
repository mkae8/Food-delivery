import { PaletteOptions } from "@mui/material";

declare module "@mui/material/styles" {
  interface TypeText {
    primary: string;
    secondary: string;
    disabled: string;
    helper: string;
    info: string;
  }
}

export const palette: PaletteOptions = {
  primary: {
    main: "#18BA51",
    contrastText: "#FFFFFF",
  },
  //Ene bol Log Inputiin colors
  secondary: {
    main: "#EEEFF2",
    light: "#F7F7F8",
  },
  text: {
    primary: "#000000",
    secondary: "#FFFFFF",
    // Waiting iin color Progress
    helper: "#ECEDF0",
  },
  background: {
    paper: "#18BA51",
  },
  //Main pizza nii text bg
  divider: "#F6F6F6",

  //Alert message
  success: {
    light: "#C9AE00",
    dark: "#670E13",
    main: "#0A4E22",
  },

  warning: {
    light: "#FCF4D6",
    dark: "#684E00",
    main: "#FFC107",
  },

  //Admin dashboard iin progress inn color
  info: {
    light: "#C1E6CF",
    dark: "#FCBABE",
    main: "##FDF4B6",
  },
};
