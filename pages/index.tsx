import { Box, Container, Flex, position } from "@chakra-ui/react";
import { Canvas } from "@react-three/fiber";
import type { NextPage } from "next";
import { OrbitControls } from "@react-three/drei";
import Coke from "../components/three/Coke";
import { Suspense } from "react";
import Heading from "../components/element/heading";
import { Content } from "../components/element/content";
const Home: NextPage = () => {
  return (
    <Flex
      justify="center"
      align="start"
      sx={{ position: "relative", height: "100%" }}
      bg="primary">
      <Canvas
        style={{
          height: "570px",
          width: "420px",
          position: "absolute",
          right: "21%",
          top: "50%",
          transform: "translateY(-50%)"
        }}>
        <Suspense fallback={null}>
          <OrbitControls enableZoom={false} />
          <ambientLight intensity={0.5} />
          <directionalLight position={[-2, 5, 2]} intensity={1} />
          <Coke />
        </Suspense>
      </Canvas>
      <Heading />
      <Box sx={{ flex: 1, height: "100%", position: "relative" }}>
        <Content />
      </Box>
    </Flex>
  );
};

export default Home;
