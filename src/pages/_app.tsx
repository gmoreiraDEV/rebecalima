import { ChakraProvider } from "@chakra-ui/react";
import Fonts from "src/styles/Fonts";
import theme from "src/styles/theme";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider resetCSS={true} theme={theme}>
      <Fonts />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
