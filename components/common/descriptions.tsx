import { Box, Flex, Text } from "@chakra-ui/react";
import { Canvas } from "@react-three/fiber";
import React, { Suspense, useEffect, useState } from "react";
import { animated, useSpring, useTrail, useTransition } from "react-spring";
import Coke from "../three/Coke1";
import { TrailButton, TrailDescriptions, TrailText } from "../spring/trail";
import Loading from "./loading";
import Rotate from "../three/Rotate";

interface Props {}

export const Descriptions = ({ scene }: { scene: number }) => {
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
    // <TrailDescriptions open={open}>
    <Box
      sx={{
        height: "100%",
        position: "absolute",
        width: "100%",
        overflow: "hidden"
      }}>
      <Flex
        sx={{
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-end",
          opacity: 1,
          position: "absolute",
          bottom: "27%",
          height: "50%",
          width: "100%",
          fontFamily: "Poppins",
          fontSize: "17px",
          gap: 8,
          // pb: "34%",
          pl: "61px"
        }}>
        <TrailDescriptions open={open}>
          <Text
            sx={{
              fontWeight: "bold",
              color: "black",
              fontSize: "18px",
              lineHeight: "20px",
              letterSpacing: "-0.8px",
              mb: "30px"
            }}>
            Healthy and delicious.
          </Text>
          <Text
            sx={{
              color: "gray",
              // fontSize: "24px",
              lineHeight: "28px",
              fontWeight: "500",
              pt: "0px",
              letterSpacing: "0px",
              mb: "15px"
            }}>
            Express a fresh and fun feel to <br />
            add the other taste add
          </Text>
        </TrailDescriptions>
      </Flex>
    </Box>
    // </TrailDescriptions>
  );
};
