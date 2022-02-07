import { Box, Flex } from "@chakra-ui/react";
import { animated, useSpring } from "react-spring";
import Head from "../common/head";
import Wave from "../common/wave";

const Scene3 = ({ show }: { show: boolean }) => {
  const circleAnimated = useSpring({
    config: { mass: 5, tension: 2000, friction: 200, duration: 1000 },
    from: { transform: "scale(0) translateY(-50%)", top: "70%" },
    transform: show ? "scale(1) translateY(-50%)" : "scale(0) translateY(-50%)",
    top: show ? "50%" : "70%",
    delay: 100
  });

  const waveAnimated = useSpring({
    config: { mass: 5, tension: 2000, friction: 200, duration: 1000 },
    from: { transform: "translateY(100%)" },
    transform: show ? "translateY(-12%)" : "translateY(100%)",
    delay: 100
  });

  const headAnimated = useSpring({
    config: { mass: 5, tension: 2000, friction: 200, duration: 800 },
    opacity: show ? 1 : 0,
    transform: show ? `translateY(0px)` : `translateY(150px)`,
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
          background: "white",
          borderRadius: "50%",
          zIndex: -1
        }}></animated.div>
      <animated.div
        style={{
          ...waveAnimated,
          position: "absolute",
          // inset: 0,
          height: "132%",
          width: "102%",
          background: `linear-gradient(180deg, rgba(245,244,233,0) 0%,
            rgba(245,244,233,0) 50%,
            rgba(229, 75, 79,1) 51%,

             rgba(229, 75, 79,1) 100%)`,

          zIndex: -2
        }}>
        <Wave show={show} top="50%" translateY={20} duration={200} />
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
