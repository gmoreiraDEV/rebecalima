import { ChakraProvider } from "@chakra-ui/react";
import Fonts from "src/theme/Fonts";
import theme from "src/theme";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider resetCSS={true} theme={theme}>
      <Fonts />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
