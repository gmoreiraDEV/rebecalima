import { ReactElement } from "react";
import { Global } from "@emotion/react";
import "@fontsource/roboto";

const Fonts = (): ReactElement => {
  return (
    <Global
      styles={`
        @import url("https://use.typekit.net/gvl5dkf.css");
        `}
    />
  );
};

export default Fonts;
