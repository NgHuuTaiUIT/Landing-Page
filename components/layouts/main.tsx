import { Box, Container, useColorModeValue } from "@chakra-ui/react";
import Head from "next/head";
import React from "react";
import Background from "../common/background-icon";
import Icon from "../common/icon";

const MainLayout = (props: any) => {
  const { children, router } = props;
  return (
    <Box as="main">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Landing Page</title>
      </Head>
      <Container
        maxW="100vw"
        // width={"1424px"}
        // height="891px"
        width="100vw"
        height="100vh"
        // bg="secondary"
        position="relative"
        // overflow="hidden"
        // mt={10}
      >
        {/* <Background /> */}
        {children}
      </Container>
    </Box>
  );
};

export default MainLayout;
