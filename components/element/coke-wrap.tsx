import { Box, Flex, Text } from "@chakra-ui/react";
import { Canvas } from "@react-three/fiber";
import React, { Suspense, useEffect, useState } from "react";
import { animated, useSpring, useTrail, useTransition } from "react-spring";
import Coke from "../three/Coke1";
import { TrailButton, TrailCoke, TrailText } from "../spring/trail";
import Loading from "../common/loading";
import Rotate from "../three/Rotate";

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
    <TrailCoke open={open}>
      <Box
        sx={{
          height: "100%",
          position: "absolute",
          width: "100%",
          overflow: "hidden"
        }}>
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
          camera={{ position: [-3.5, 3.5, 0], fov: 70 }}
          style={{
            // height: "580px",
            // width: "420px",
            height: "100%",
            width: "100%",
            position: "absolute",
            left: "-27%",
            bottom: "-24%"
            // transform: "translateY(20%)"
            // transform: "translateY(100px)"
          }}>
          <Suspense fallback={null}>
            {/* <OrbitControls enableZoom={false} /> */}
            <ambientLight intensity={0.5} />
            <directionalLight position={[-2, 5, 2]} intensity={1} />
            {/* <Coke /> */}
            <Rotate>
              {/* <Coke rotation={[0.2, 2, 0.2]} position={[0, 0, 0]} scale={1.5} /> */}
            </Rotate>
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
            height: "40%",
            //   width: "280px",
            width: "100%",
            fontWeight: "bold",
            color: "black",
            fontSize: "18px",
            lineHeight: "20px",
            background: `linear-gradient(180deg, rgba(245,244,233,0) 0%,
            rgba(245,244,233,0.5) 50%,
            rgba(245,244,233,0.9) 65%,
             rgba(245,244,233,1) 100%)`,
            fontFamily: "Poppins",
            gap: 8,
            letterSpacing: "-0.8px",
            pb: "40px",
            pl: "67px"
          }}>
          Healthy and delicious.
          <Text
            sx={{
              color: "gray",
              // fontSize: "24px",
              lineHeight: "28px",
              fontWeight: "500",
              pt: "0px",
              letterSpacing: "0px",
              fontSize: "17px",
              mb: "22px"
            }}>
            Express a fresh and fun feel to <br />
            add the other taste add
          </Text>
        </Flex>
      </Box>
    </TrailCoke>
  );
};
