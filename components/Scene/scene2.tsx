import { Box, Flex, Text } from "@chakra-ui/react";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Head from "../common/head";
import { CokeWrap } from "../element/coke-wrap";
import Heading from "../element/heading";
import Coke from "../three/Coke1";
import Rotate from "../three/Rotate2";

const Scene2 = () => {
  return (
    <Flex
      justify="center"
      align="start"
      sx={{ position: "relative", height: "100%", overflow: "hidden" }}>
      <Box sx={{ width: "60%" }}></Box>
      <Flex
        sx={{
          width: "53%",
          height: "100%",
          flexDirection: "column",
          justifyContent: "center",
          flexShrink: 1
        }}>
        <Box sx={{ width: "60%", height: "33%" }}>
          <Head size={85} lineHeight={100}>
            NEW FLAVOUR
          </Head>
          <Text
            sx={{
              fontSize: "24px",
              fontWeight: "bold",
              letterSpacing: 2,
              lineHeight: 1,
              pb: 8
            }}>
            100% Young green mango
            <br /> and aromatic yuzu
          </Text>
          <Text sx={{ fontSize: "22px", lineHeight: 1.28, fontWeight: "600" }}>
            No matter which sport is your passion - everyone needs hydration. So
            why not choose a natural and delicious option with CocoCoast&apos; s
            range of coconut water. No added sugar or preservatives.
          </Text>
        </Box>
      </Flex>
    </Flex>
  );
};

export default Scene2;
