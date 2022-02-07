import { Box } from "@chakra-ui/react";
import React from "react";
import { animated, useSpring } from "react-spring";

type Props = {};

const Wave = ({
  show,
  top,
  translateY = 120,
  duration = 1000,
  delay = 100,
  backgroundColor = "#E54B4F"
}: {
  show: boolean;
  top: string;
  translateY?: number;
  duration?: number;
  delay?: number;
  backgroundColor?: string;
}) => {
  const waveAnimated = useSpring({
    config: { mass: 5, tension: 2000, friction: 200, duration },
    from: { transform: "translateY(10%)" },
    transform: show ? `translateY(-${translateY}%)` : "translateY(10%)",
    delay
  });
  return (
    <animated.div
      style={{
        ...waveAnimated,
        position: "absolute",
        height: "100%",
        width: "102%",
        alignItems: "center",
        zIndex: -1
      }}>
      <Box
        sx={{
          height: "50%",
          width: "100%",
          backgroundColor,
          position: "absolute",
          top,
          left: "0"
        }}
      />
      <svg
        width="100%"
        height="110%"
        viewBox="0 0 1922 986"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M421.93 76.8697C326.294 98.2489 101.462 37.9557 1 5.13679V890.553C97.4139 917.943 151.986 932.336 262.515 933.5C515.921 915.863 534.907 879.012 794.873 855.382C1119.83 825.845 1345.45 991.815 1550.86 984.783C1715.19 979.156 1860.11 936.492 1912.02 915.863C1912.02 576.194 1932.22 -56.0378 1912.02 5.13663C1831.33 249.431 1629.53 206.036 1449 172.523C1388.38 161.271 1111.41 65.6174 959.036 32.5641C837.135 6.12138 790.945 3.26142 783.087 5.13679C710.687 -2.5991 541.474 50.1456 421.93 76.8697Z"
          fill={backgroundColor}
        />
      </svg>
    </animated.div>
  );
};

export default Wave;
