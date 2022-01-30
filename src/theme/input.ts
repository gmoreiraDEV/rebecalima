import { transparentize } from "@chakra-ui/theme-tools";

export const Input = {
  baseStyle: {},
  sizes: {},
  variants: {
    gray: {
      field: {
        position: "relative",
        bg: "brand.gray.100",
        color: "brand.red",
        textTransform: "uppercase",
        fontFamily: "Roboto",
        border: "0",
        borderRadius: "0",
        outline: "unset",

        _focus: {
          boxShadow: "none",
          bg: transparentize("brand.gray.300", 0.5),
        },
      },
    },
  },
  defaultProps: {
    variant: "gray",
  },
};
