import { Box, Button, Flex, Text } from "@chakra-ui/react";
import React, { useCallback, useEffect, useState } from "react";
import cup from "../../assets/cup.svg";
import face from "../../assets/Facebook.svg";
import ins from "../../assets/Instagram.svg";
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
  useEffect(() => {
    // setOpen(false);
    // const a = setInterval(() => setOpen(!open), 3000);
    // return () => clearInterval(a);
  }, []);

  // console.log(open);
  return (
    <Flex
      width="50%"
      height="100%"
      justify="space-around"
      flexDirection="column"
      ml="40px">
      <Icon height="30px" width="30px" icon="/assets/cup.svg" />
      <Flex align="right" flexDirection="column" ml="30%" pt="35px">
        <TrailText open={open}>
          <Text
            // fontSize="150px"
            sx={{ fontWeight: "bold", lineHeight: "135px" }}>
            COCA COLA
          </Text>
        </TrailText>

        <TrailText open={open}>
          <Text
            // fontSize="150px"
            sx={{ fontWeight: "bold", lineHeight: "135px" }}>
            DRINKS
          </Text>
          {/* <Text fontSize="150px" sx={{ fontWeight: "bold" }}></Text> */}
        </TrailText>
        <TrailButton open={open}>
          <Button
            sx={{
              width: "165px",
              height: "60px",
              borderRadius: "50",
              mt: "20px",
              bg: "secondary",
              fontSize: "20px",
              fontWeight: "bold"
            }}>
            Explore More
          </Button>
        </TrailButton>
      </Flex>
      <Footer />
    </Flex>
  );
};

export default Heading;
