import { Box, Container, Flex, position } from "@chakra-ui/react";
import { Canvas } from "@react-three/fiber";
import type { NextPage } from "next";
import { OrbitControls } from "@react-three/drei";
import Coke from "../components/three/Coke";
import { Suspense } from "react";
import Heading from "../components/element/heading";
import { Content } from "../components/element/content";
import { CokeWrap } from "../components/element/coke-wrap";
import { TrailCoke } from "../components/spring/trail";
const Home: NextPage = () => {
  return (
    <Flex
      justify="center"
      align="start"
      sx={{ position: "relative", height: "100%", overflow: "hidden" }}
      bg="primary">
      <Heading />
      {/* <TrailCoke open={true}> */}

      {/* </TrailCoke> */}
      <Box sx={{ flex: 1, height: "100%", position: "relative" }}>
        <CokeWrap />
        <Content />
      </Box>
    </Flex>
  );
};

export default Home;
