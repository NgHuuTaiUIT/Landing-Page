import { Box, Flex, Text } from "@chakra-ui/react";
import { animated, useSpring } from "react-spring";
import Head from "../common/head";
import Lottie from "react-lottie";
import animationData from "../../lotties/liquid-splash.json";
import { useEffect, useState } from "react";

const Scene2 = ({ show }: { show: boolean }) => {
  const [isStopped, setIsStopped] = useState(false);

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
  });

  const textAnimated = useSpring({
    config: { mass: 5, tension: 2000, friction: 200, duration: 1000 },
    from: { opacity: 0 },
    opacity: show ? 1 : 0,
    delay: 800
  });

  const defaultOptions = {
    loop: false,
    autoplay: false,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  return (
    <Flex
      justify="center"
      align="start"
      sx={{ position: "relative", height: "100%", overflow: "hidden" }}>
      <Box sx={{ width: "60%", height: "100%" }}>
        <Lottie
          isStopped={isStopped}
          options={defaultOptions}
          height={400}
          width={400}
          speed={0.8}
          // eventListeners={[
          //   {
          //     eventName: "complete",
          //     callback: () => console.log("the animation completed:")
          //   }
          // ]}
          style={{
            marginTop: "40%",
            marginLeft: "25%",
            width: "60%",
            height: "50%"
          }}
        />
      </Box>
      <Flex
        sx={{
          width: "53%",
          height: "100%",
          flexDirection: "column",
          justifyContent: "center",
          flexShrink: 1
        }}>
        <Box
          sx={{
            width: "60%",
            height: "33%",
            ml: "-5px",
            mt: "-6px"
          }}>
          <Box sx={{ overflow: "hidden" }}>
            <animated.div style={{ ...headAnimated }}>
              <Head size={85} lineHeight={100}>
                NEW FLAVOUR
              </Head>
            </animated.div>
          </Box>

          <animated.div style={{ ...textAnimated }}>
            <Text
              sx={{
                fontSize: "17px",
                fontWeight: "bold",
                letterSpacing: 0.2,
                lineHeight: 1.3,
                pb: "32px",
                pt: "10px",
                fontFamily: "Poppins"
              }}>
              100% Young green mango
              <br /> and aromatic yuzu
            </Text>
            <Text
              sx={{
                fontSize: "17px",
                lineHeight: 1.5,
                fontWeight: "500",
                fontFamily: "Poppins"
              }}>
              No matter which sport is your passion - everyone needs hydration.
              So why not choose a natural and delicious option with
              CocoCoast&apos; s range of coconut water. No added sugar or
              preservatives.
            </Text>
          </animated.div>
        </Box>
      </Flex>
    </Flex>
  );
};

export default Scene2;
