import { ChakraProvider } from "@chakra-ui/react";
import GlobalStyles from "@theme/GlobalStyles";
import theme from "src/theme";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider resetCSS={true} theme={theme}>
      <GlobalStyles />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
