import { Box, Flex, Text } from "@chakra-ui/react";
import { Canvas } from "@react-three/fiber";
import { Suspense, useState } from "react";
import { CokeWrap } from "../element/coke-wrap";
import Heading from "../element/heading";
import Coke from "../three/Coke1";
const Scene1 = () => {
  //   const [open, setOpen] = useState(true);

  return (
    <Box
      sx={{
        position: "relative",
        height: "100%",
        width: "100%",
        overflow: "hidden"
      }}
      // bg="primary"
    >
      <Heading />

      <Box
        sx={{
          position: "absolute",
          inset: 0,
          left: "calc(48% + 3px)",
          //   top: "calc(60% + 3px)",
          //   bottom: 0,
          height: "100%",
          background: `linear-gradient(180deg, rgba(245,244,233,0) 0%,
          rgba(245,244,233,0.5) 10%,
          rgba(245,244,233,0.8) 15%,
          rgba(245,244,233,0.9) 25%,
          rgba(245,244,233,1) 30%,

           rgba(245,244,233,1) 100%)`
          //   transform: "translateY(40%)"
          // pl: "67px"
        }}>
        <Flex
          sx={{
            flexDirection: "column",
            alignItems: "flex-start",
            opacity: 1,
            //   backgroundColor: "primary",
            height: "100%",
            //   width: "280px",
            width: "100%",
            fontWeight: "bold",
            color: "black",
            fontSize: "18px",
            lineHeight: "20px",

            fontFamily: "Poppins",
            gap: 8,
            letterSpacing: "-0.8px",
            // pb: "40px",
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
    </Box>
  );
};

export default Scene1;
