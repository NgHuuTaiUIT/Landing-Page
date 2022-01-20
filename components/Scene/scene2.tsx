import { Box, Flex, Text } from "@chakra-ui/react";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Head from "../common/head";
import { CokeWrap } from "../element/coke-wrap";
import Heading from "../element/heading";
import Coke from "../three/Coke1";
import Rotate from "../three/Rotate";

const Scene2 = () => {
  return (
    <Flex
      justify="center"
      align="start"
      sx={{ position: "relative", height: "100%", overflow: "hidden" }}>
      <Canvas
        // camera={{ position: [-3, -2.5, 2], fov: 75 }}
        /*
        NOTE:Scene 1
         canvas position: 0,-2.5,5 
         <group rotation={[-0.85, 0.3, -0.8]}>
        <group position={[-0.3, 0.4, -0.4]} scale={0.65}>
        */
        /*
        NOTE:Scene 3
         canvas position: 0,-2.5,5 
         <group rotation={[-1, 0, -0.4]}>
         <group position={[0, 0, -0.8]} scale={0.65}>
        */
        camera={{ position: [-4, 5, 0], fov: 70 }}
        style={{
          height: "100%",
          width: "60%",
          position: "absolute",
          left: 0
        }}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[-2, 5, 2]} intensity={1} />
          <Rotate>
            <Coke
              rotation={[-0.4, -3.3, 0.2]}
              position={[0, 0, 0]}
              scale={1.5}
            />
          </Rotate>
        </Suspense>
      </Canvas>
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
