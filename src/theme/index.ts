import { extendTheme } from "@chakra-ui/react";

import { Button } from "./button";
import { Input } from "./input";

const defaultTheme = {
  colors: {
    brand: {
      blue: "#9AC6DA",
      red: "#400522",
      pink: "#72062F",
      salmon: {
        100: "#E7D2C9",
        500: "#D8A492",
      },
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
  components: { Button, Input },
};

const theme = extendTheme(defaultTheme);

export default theme;
