import React, { CSSProperties, useCallback, useEffect, useState } from "react";
import { Box } from "@chakra-ui/react";
import {
  useTransition,
  animated,
  AnimatedProps,
  useSpringRef
} from "@react-spring/web";

const pages: ((
  props: AnimatedProps<{ style: CSSProperties }>
) => React.ReactElement)[] = [
  ({ style }) => (
    <animated.div style={{ ...style, background: "#E54B4F" }}></animated.div>
  ),
  ({ style }) => (
    <animated.div style={{ ...style, background: "#E54B4F" }}></animated.div>
  ),
  ({ style }) => (
    <animated.div style={{ ...style, background: "#F5F4E9" }}></animated.div>
  )
];

const BackgroundColor = ({ index }: { index: number }) => {
  //   const [index, set] = useState(0);
  //   const onClick = useCallback(() => set(state => (state + 1) % 3), []);
  const transRef = useSpringRef();
  const transitions = useTransition(index, {
    ref: transRef,
    keys: null,
    from: { transform: "translate3d(0,100%,0)" },
    enter: { transform: "translate3d(0%,0,0)" },
    leave: { transform: "translate3d(0,-50%,0)" }
  });
  useEffect(() => {
    transRef.start();
  }, [index]);
  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        position: "absolute",
        // top: "-10%",
        // left: "-18%",
        left: 0,
        top: 0,
        zIndex: -1
      }}>
      {transitions((style, i) => {
        const Page = pages[i];
        return <Page style={{ ...style, height: "100%" }} />;
      })}
    </Box>
  );
};

export default BackgroundColor;
