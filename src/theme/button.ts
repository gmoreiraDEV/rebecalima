export const Button = {
  baseStyle: {},
  sizes: {},
  variants: {
    withBorder: {
      position: "relative",
      bg: "white",
      color: "brand.salmon.500",
      fontWeight: "bold",
      textAlign: "center",
      rounded: "0",
      outline: "unset",
      textShadow:
        "-0.5px 0 #D8A492, 0 0.5px #D8A492, 0.5px 0 #D8A492, 0 -0.5px #D8A492",

      _after: {
        content: `""`,
        width: "100%",
        height: "100%",
        position: "absolute",
        top: "5px",
        left: "5px",
        borderWidth: "2px",
        borderColor: "brand.salmon.500",
        zIndex: -1,
      },
      _focus: {
        boxShadow: "none",
      },
    },
    withBorderDark: {
      position: "relative",
      bg: "white",
      color: "brand.pink",
      fontWeight: "bold",
      textAlign: "center",
      rounded: "0",
      outline: "unset",
      textShadow:
        "-0.5px 0 #D8A492, 0 0.5px #D8A492, 0.5px 0 #D8A492, 0 -0.5px #D8A492",

      _after: {
        content: `""`,
        width: "100%",
        height: "100%",
        position: "absolute",
        top: "5px",
        right: "5px",
        borderWidth: "2px",
        borderColor: "brand.pink",
        zIndex: -1,
      },
      _focus: {
        boxShadow: "none",
      },
    },
  },
  defaultProps: {},
};
