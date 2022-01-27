import { Box, Flex, position } from "@chakra-ui/react";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { animated, useSpring } from "react-spring";
import Head from "../common/head";
import Coke from "../three/Coke1";

const Scene3 = ({ show }: { show: boolean }) => {
  const circleAnimated = useSpring({
    config: { mass: 5, tension: 2000, friction: 200, duration: 800 },
    from: { transform: "scale(0) translateY(-50%)", top: "70%" },
    transform: show ? "scale(1) translateY(-50%)" : "scale(0) translateY(-50%)",
    top: show ? "50%" : "70%",
    delay: 100
  });
  const headAnimated = useSpring({
    config: { mass: 5, tension: 2000, friction: 200, duration: 800 },
    opacity: show ? 1 : 0,
    transform: show ? `translateY(0px)` : `translateY(150px)`,
    // height: show ? 110 : 0,
    from: {
      opacity: 1,
      height: "150px",
      transform: `translateY(150px)`,
      overflow: "hidden"
    },
    delay: 600
  });
  const head2Animated = useSpring({
    config: { mass: 5, tension: 2000, friction: 200, duration: 800 },
    opacity: show ? 1 : 0,
    transform: show ? `translateY(0px)` : `translateY(150px)`,
    // height: show ? 110 : 0,
    from: {
      opacity: 1,
      height: "150px",
      transform: `translateY(150px)`,
      overflow: "hidden"
    },
    delay: 700
  });
  return (
    <Flex
      justify="center"
      align="center"
      sx={{
        position: "relative",
        height: "100%",
        overflow: "hidden",
        zIndex: "0"
      }}>
      <animated.div
        style={{
          ...circleAnimated,
          position: "absolute",
          height: "500px",
          width: "500px",
          //   top: "50%",
          //   left: "50%",
          background: "white",
          borderRadius: "50%",
          zIndex: -1
        }}>
        {/* <Box
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
        /> */}
      </animated.div>
      <Box sx={{ width: "50%", textAlign: "center" }}>
        <Box sx={{ overflow: "auto" }}>
          <animated.div style={{ ...headAnimated }}>
            <Head
              size={150}
              lineHeight={150}
              style={{ pb: "20px", pr: "210px" }}>
              FRESH
            </Head>
          </animated.div>
        </Box>
      </Box>
      <Box sx={{ width: "50%", textAlign: "center" }}>
        <Box sx={{ overflow: "hidden" }}>
          <animated.div style={{ ...head2Animated }}>
            <Head
              size={150}
              lineHeight={150}
              style={{ pb: "20px", pl: "210px" }}>
              JUICE
            </Head>
          </animated.div>
        </Box>
      </Box>
    </Flex>
  );
};

export default Scene3;
