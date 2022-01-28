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

  const waveAnimated = useSpring({
    config: { mass: 5, tension: 2000, friction: 200, duration: 1000 },
    from: { transform: "translateY(100%)" },
    transform: show ? "translateY(-12%)" : "translateY(100%)",
    // top: show ? "50%" : "70%",
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
          //   top: "50%",
          //   left: "50%",
          zIndex: -2
        }}>
        <svg
          width="1442"
          height="951"
          viewBox="0 0 1442 651"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M10.1282 537.343L49.9024 549.97C89.6766 562.459 169.225 587.713 248.773 588.536C328.322 589.497 407.87 566.165 487.419 550.793C566.967 535.559 646.516 528.147 726.064 532.265C805.613 536.382 882.418 560.497 948.251 588.536C1014.08 616.575 1143.85 651 1216.01 651C1314.42 651 1362.45 599.981 1402.23 575.963L1442 537.343V0.000683734L1355.37 70.5004C1355.37 70.5004 1366.5 61.4439 1282.37 104C1198.24 146.557 1151.37 135.001 1057.87 135.001C964.372 135.001 841.872 86.0005 750.872 39.5005C672.286 -0.656101 644.488 0.000406439 546.372 0.000683734C461.179 0.000924503 401 35.0004 321 70.5004C248.773 124 190.872 113 134 70.5004L0 0.000683734L10.1282 537.343Z"
            fill="#E54B4F"
          />
        </svg>
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
