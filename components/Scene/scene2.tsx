import { Box, Flex, Text } from "@chakra-ui/react";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { animated, useSpring } from "react-spring";
import Head from "../common/head";
import { CokeWrap } from "../element/coke-wrap";
import Heading from "../element/heading";
import { TrailText } from "../spring/trail";
import Coke from "../three/Coke1";
import Rotate from "../three/Rotate2";

const Scene2 = ({ show }: { show: boolean }) => {
  const headAnimated = useSpring({
    config: { mass: 5, tension: 2000, friction: 200, duration: 1000 },
    opacity: show ? 1 : 0,
    transform: show ? `translateY(0px)` : `translateY(150px)`,
    // height: show ? 110 : 0,
    from: {
      opacity: 1,
      height: "100px",
      transform: `translateY(150px)`,
      overflow: "hidden"
    }
    // delay: 400
  });

  const textAnimated = useSpring({
    config: { mass: 5, tension: 2000, friction: 200, duration: 1000 },
    from: { opacity: 0 },
    opacity: show ? 1 : 0,
    delay: 800
  });
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
          {/* <TrailText open={show}> */}
          <Box sx={{ overflow: "hidden" }}>
            <animated.div style={{ ...headAnimated }}>
              <Head size={85} lineHeight={100}>
                NEW FLAVOUR
              </Head>
              {/* </TrailText> */}
            </animated.div>
          </Box>

          <animated.div style={{ ...textAnimated }}>
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
            <Text
              sx={{ fontSize: "22px", lineHeight: 1.28, fontWeight: "600" }}>
              No matter which sport is your passion - everyone needs hydration.
              So why not choose a natural and delicious option with
              CocoCoast&apos; s range of coconut water. No added sugar or
              preservatives.
            </Text>
          </animated.div>

          {/* </TrailText> */}
        </Box>
      </Flex>
    </Flex>
  );
};

export default Scene2;
