import { Box, ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import { Fonts } from "../components/common/fonts";
import Icon from "../components/common/icon";
import Layout from "../components/layouts/main";
import theme from "../utils/theme";
function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <Layout router={router}>
        <Component {...pageProps} key={router.route} />
      </Layout>
    </ChakraProvider>
  );
}

export default MyApp;
