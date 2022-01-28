import { ReactElement } from "react";
import { Global } from "@emotion/react";
import "@fontsource/roboto";

const GlobalStyles = (): ReactElement => {
  return (
    <Global
      styles={`
        @import url("https://use.typekit.net/gvl5dkf.css");
        
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          list-style: none;
        }
        /* App fit Height */ 
        html, body, #__next {
          min-height: 100vh;
          display: flex;
          flex: 1;
        }
        #__next {
          flex: 1;
        }
        #__next > * {
          flex: 1;
        }
        /* ./App fit Height */ 
        `}
    />
  );
};

export default GlobalStyles;
