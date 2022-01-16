import { extendTheme } from "@chakra-ui/react";

const defaultTheme = {
  colors: {
    brand: {
      blue: "#9AC6DA",
      red: "#400522",
      pink: "#72062F",
      salmon: "#D8A492",
      gray: {
        100: "#F5F5F5",
        300: "#CFCFCF",
        500: "#808080",
      },
    },
  },
  fonts: {
    heading: "Shelby",
    body: "Beloved Sans",
  },
};

const theme = extendTheme(defaultTheme);

export default theme;
