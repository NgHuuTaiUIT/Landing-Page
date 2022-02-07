import { Box, Flex } from "@chakra-ui/react";
import { Canvas } from "@react-three/fiber";
import { Suspense, useState } from "react";
import { CokeWrap } from "../element/coke-wrap";
import Heading from "../element/heading";
import Coke from "../three/Coke1";
const Scene1 = ({ scene }: { scene: number }) => {
  return (
    <Flex
      justify="center"
      align="start"
      sx={{ position: "relative", height: "100%", overflow: "hidden" }}>
      <Heading />

      <Box sx={{ flex: 1, height: "100%", position: "relative" }}>
        <CokeWrap scene={scene} />
      </Box>
    </Flex>
  );
};

export default Scene1;
