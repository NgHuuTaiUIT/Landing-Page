import { Box, Flex, position } from "@chakra-ui/react";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Head from "../common/head";
import Coke from "../three/Coke1";

const Scene3 = () => {
  return (
    <Flex
      justify="center"
      align="center"
      sx={{
        position: "relative",
        height: "100%",
        overflow: "hidden",
        zIndex: "-2"
      }}>
      {/* <Canvas
        camera={{ position: [0, 0, 6], fov: 70, near: 0.02 }}
        style={{
          height: "100%",
          width: "100%",
          position: "absolute",
          left: 0
        }}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[-2, 5, 2]} intensity={1} />
          <Coke
            rotation={[0, -2.3, 0]}
            position={[0, -0.2, 0]}
            scale={[1.5, 1.5, 1.5]}
          />
        </Suspense>
      </Canvas> */}
      <Box
        sx={{
          position: "absolute",
          height: "500px",
          width: "500px",
          //   top: "50%",
          //   left: "50%",
          background: "white",
          borderRadius: "50%",
          zIndex: -1
        }}
      />
      <Box sx={{ width: "50%", textAlign: "center" }}>
        <Head size={150} lineHeight={100}>
          FRESH
        </Head>
      </Box>
      <Box sx={{ width: "50%", textAlign: "center" }}>
        <Head size={150} lineHeight={100}>
          FRESH
        </Head>
      </Box>
    </Flex>
  );
};

export default Scene3;
