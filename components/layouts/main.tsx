import { Box, Container, useColorModeValue } from "@chakra-ui/react";
import Head from "next/head";
import React from "react";

const MainLayout = (props: any) => {
  const { children, router } = props;
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Landing Page</title>
      </Head>
      <Container
        maxW="1500px"
        width={"1424px"}
        height="891px"
        // bg="secondary"
        mt={10}>
        {children}
      </Container>
    </Box>
  );
};

export default MainLayout;
