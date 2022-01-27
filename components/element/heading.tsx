import { Box, Button, Flex, Text } from "@chakra-ui/react";
import React, { useCallback, useEffect, useState } from "react";
import cup from "../../assets/cup.svg";
import face from "../../assets/Facebook.svg";
import ins from "../../assets/Instagram.svg";
import Head from "../common/head";
import { TrailButton, TrailText } from "../spring/trail";

interface Props {}
export const Icon = ({
  icon,
  height,
  width,
  color
}: {
  icon: string;
  height: string;
  width: string;
  color?: string;
}) => {
  return (
    <Box>
      <Box
        background={cup}
        sx={{
          height,
          width,
          color,
          background: `url(${icon}) no-repeat`,
          backgroundSize: "cover"
        }}
      />
    </Box>
  );
};

const Footer = () => {
  return (
    <Flex width="100%" gap={5} align="center" justify="flex-start">
      <Text fontSize="24px" sx={{ fontWeight: "bold" }}>
        Social media
      </Text>
      <Box
        sx={{
          height: "30px",
          width: "30px",
          //   background: "url(/assets/Facebook.svg)",
          background: "url(/assets/Facebook.svg) no-repeat",

          backgroundSize: "cover"
        }}
      />
      <Box
        sx={{
          height: "30px",
          width: "30px",
          background: "url(/assets/Instagram.svg) no-repeat",
          backgroundSize: "cover"
        }}
      />
    </Flex>
  );
};

const Heading = (props: Props) => {
  const [open, setOpen] = useState(true);

  return (
    <Flex
      width="50%"
      height="100%"
      justify="space-around"
      flexDirection="column"
      ml="40px">
      <Flex align="right" flexDirection="column" ml="33.5%" pt="92px">
        <TrailText open={open}>
          <Head size={150}>COCACOLA</Head>
          {/* <Head size={150}>MANGO</Head> */}
        </TrailText>

        <TrailText open={open}>
          <Head size={150} style={{ padding: "5px 0" }}>
            DRINKS
          </Head>
        </TrailText>
        <TrailButton open={open}>
          <Button
            sx={{
              width: "165px",
              height: "60px",
              borderRadius: "50",
              mt: "10px",
              ml: "7px",
              bg: "secondary",
              fontSize: "18px",
              fontWeight: "bold",
              fontFamily: "Poppins",
              letterSpacing: "-0.5px"
            }}>
            Explore More
          </Button>
        </TrailButton>
      </Flex>
    </Flex>
  );
};

export default Heading;
