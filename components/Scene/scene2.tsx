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
      <Canvas
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
          {/* <Rotate> */}
          {/* <OrbitControls enableZoom={false} /> */}
          <Rotate>
            <Coke
              rotation={[0, -2.3, 0]}
              position={[0, -0.2, 0]}
              scale={[1.5, 1.5, 1.5]}
            />
            {/* <Coke
              rotation={[0, -2.3, 0]}
              position={[0, -0.2, 0]}
              scale={[1.65, 1.5, 1.5]}
            /> */}
            {/* <Coke
              rotation={[-0.2, -3.2, 1.5]}
              position={[-1, 1.7, 0]}
              scale={1.5}
            /> */}

            {/* <Coke
              rotation={[-0.2, -3.3, 0.5]}
              position={[-1, 1.5, -2.5]}
              scale={1.5}
            /> */}
          </Rotate>

          {
            //NOTE: Scene 1
            /* <Coke
              // rotation={[0.3, 1.1, 0.5]}
              // position={[-0.5, 1, 2]}
              rotation={[0.5, 3.8, 0.5]}
              position={[-1, 1.4, 1.8]}
              scale={1.5}
            /> */
            //NOTE: Scene 2
            // <Coke
            //   rotation={[-0.2, -3.3, 0.5]}
            //   position={[-1, 1.5, -2.5]}
            //   scale={1.5}
            // />
          }
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
