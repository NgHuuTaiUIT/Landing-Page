import { Box, Flex, Text } from "@chakra-ui/react";
import { keyframes } from "@emotion/react";
import React from "react";
import { Icon } from "./heading";

interface Props {}
const Heading = ({
  active,
  children,
  duration = "450ms"
}: React.PropsWithChildren<{ active?: boolean; duration?: string }>) => {
  const commonStyles = {
    fontWeight: "bold",
    fontSize: active ? "7.8vw" : "4.7vw",
    letterSpacing: "-1px",
    transition: `font-size ${duration} ease-out,opacity ${duration} ease-out`,
    color: "black"
  };

  return (
    <Box sx={{ position: "relative" }}>
      <Text
        sx={{
          opacity: active ? 1 : 1,
          backgroundImage:
            "linear-gradient(rgba(255, 255, 255, 0.6),rgba(255, 255, 255, 0))",
          backgroundClip: "text",
          textFillColor: "transparent" as any,
          webkitBackgroundClip: "text" as any,
          webkitTextFillColor: "transparent" as any,

          ...commonStyles
        }}>
        {children}
      </Text>
      <Text
        sx={{
          opacity: active ? 1 : 1,
          //   backgroundColor: "primary",
          position: "absolute",
          top: "100%",
          left: 0,
          //   height: "50%",
          ...commonStyles
        }}>
        {children}
      </Text>
    </Box>
  );
};

const TextCircle = ({ text, width }: { text: string; width: number }) => {
  const rotate360deg = keyframes`
    0% {
      transform: rotate(360deg);
    }
    100% {
      transform: rotate(0deg);
    }
  `;
  return (
    <Box
      sx={{
        position: "absolute",
        width: "100%",
        height: "100%",
        animation: `${rotate360deg} 10s linear infinite`
      }}>
      {text.split("").map((char, idx) => (
        <span
          key={idx}
          style={{
            transform: `rotate(${idx * (360 / text.length)}deg)`,
            position: "absolute",
            left: "50%",
            fontSize: "1.2em",
            transformOrigin: `0 ${width / 2}px`
          }}>
          {char}
        </span>
      ))}
    </Box>
  );
};
export const Content = (props: Props) => {
  return (
    <Box
      sx={{
        position: "relative",
        top: 0,
        left: 0,
        height: "100%",
        background:
          "linear-gradient(180deg, rgba(245,244,233,0) 0%,rgba(245,244,233,0) 50%,rgba(245,244,233,0.9) 70%, rgba(245,244,233,1) 100%)"
      }}>
      {/* <Heading>Healthy and delicious. Headlthy</Heading> */}

      <Flex
        sx={{
          position: "absolute",
          top: 10,
          right: 10,
          height: "60px",
          width: "60px",
          alignItems: "center",
          justifyContent: "center",
          bg: "white",
          borderRadius: "50%"
        }}>
        <Icon
          width="30px"
          height="30px"
          icon="/assets/align-right.svg"
          color="gray"
        />
      </Flex>
      <Text
        sx={{
          opacity: 1,
          //   backgroundColor: "primary",
          position: "absolute",
          bottom: "27%",
          left: "18px",
          //   height: "40%",
          width: "280px",
          fontWeight: "bold",
          color: "black",
          fontSize: "20px",
          lineHeight: "20px",
          letterSpacing: "1px"
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
          Express a fresh and fun feel to add t othe taste add
        </Text>
      </Text>
      <Flex
        sx={{
          position: "absolute",
          bottom: 0,
          right: 0,
          height: "165px",
          width: "165px",
          alignItems: "center",
          justifyContent: "center",
          pb: "90px",
          pr: "70px"
        }}>
        <TextCircle text="100% PULPED WATERMELON " width={165} />
        <Icon width="65px" height="65px" icon="/assets/leaf.svg" color="gray" />
      </Flex>
    </Box>
  );
};
