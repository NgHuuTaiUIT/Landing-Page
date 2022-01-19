import { Box, Flex, Text } from "@chakra-ui/react";
import { Canvas } from "@react-three/fiber";
import React, { Suspense, useEffect, useState } from "react";
import { animated, useSpring, useTrail, useTransition } from "react-spring";
import Coke from "../three/Coke";
import { TrailButton, TrailCoke } from "../spring/trail";

interface Props {}

export const CokeWrap = (props: Props) => {
  const [open, setOpen] = useState(true);
  //   const transitions = useTransition(open, {
  //     loop: true,
  //     reverse: open,
  //     delay: 200,
  //     to: [
  //       { opacity: 1, transform: `translateY(200px)` },
  //       { opacity: 0, transform: `translateY(0px)` }
  //     ],
  //     from: { opacity: 1, height: 0, transform: `translateY(200px)` },
  //     onRest: () => setOpen(!open)
  //   });

  return (
    <Box
      sx={{
        height: "100%",
        position: "absolute",
        width: "100%",
        overflow: "hidden"
      }}>
      <TrailCoke open={open}>
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

          style={{
            // height: "580px",
            // width: "420px",
            height: "100%",
            width: "100%",
            position: "absolute",
            left: "-20%",
            bottom: "-20%"
            // transform: "translateY(20%)"
            // transform: "translateY(100px)"
          }}>
          <Suspense fallback={null}>
            {/* <OrbitControls enableZoom={false} /> */}
            <ambientLight intensity={0.5} />
            <directionalLight position={[-2, 5, 2]} intensity={1} />
            <Coke />
          </Suspense>
        </Canvas>
        <Flex
          sx={{
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "flex-end",
            opacity: 1,
            //   backgroundColor: "primary",
            position: "absolute",
            bottom: "0%",
            left: "18px",
            height: "30%",
            //   width: "280px",
            width: "100%",
            fontWeight: "bold",
            color: "black",
            fontSize: "20px",
            lineHeight: "20px",
            letterSpacing: "1px",
            background: `linear-gradient(180deg, rgba(245,244,233,0) 0%,
            rgba(245,244,233,0.5) 50%,
            rgba(245,244,233,0.9) 65%,
             rgba(245,244,233,1) 100%)`
          }}>
          Healthy and delicious. <br />
          Headlthy
          <Text
            sx={{
              color: "gray",
              // fontSize: "24px",
              lineHeight: "35px",
              fontWeight: "500",
              pt: "0px"
            }}>
            Express a fresh and fun feel to <br />
            add the other taste add
          </Text>
        </Flex>
      </TrailCoke>
    </Box>
  );
};
