import { Box } from "@chakra-ui/react";
import React from "react";
import { useTrail, animated } from "react-spring";

export const TrailText: React.FC<{ open: boolean }> = ({ open, children }) => {
  const items = React.Children.toArray(children);
  const trail = useTrail(items.length, {
    config: { mass: 5, tension: 2000, friction: 200, duration: 700 },
    opacity: open ? 1 : 0,
    // y: open ? 0 : 200,
    transform: open ? `translateY(0px)` : `translateY(150px)`,
    height: open ? 110 : 0,
    from: { opacity: 1, height: 0, transform: `translateY(150px)` }
  });
  return (
    <div>
      {trail.map(({ height, transform, ...style }, index) => (
        <animated.div
          key={index}
          style={{
            ...style,
            position: "relative",
            width: "100%",
            height: "130px",
            lineHeight: "80px",
            color: "black",
            fontSize: "10em",
            fontWeight: "800",
            willChange: "transform, opacity",
            overflow: "hidden"
          }}>
          <animated.div style={{ height, transform }}>
            {items[index]}
          </animated.div>
        </animated.div>
      ))}
    </div>
  );
};

export const TrailButton: React.FC<{ open: boolean }> = ({
  open,
  children
}) => {
  const items = React.Children.toArray(children);
  const trail = useTrail(items.length, {
    config: { mass: 5, tension: 2000, friction: 200, duration: 700 },
    opacity: open ? 1 : 0,
    height: open ? 110 : 0,
    delay: 0,
    from: { opacity: 0, height: 0 }
  });
  return (
    <div>
      {trail.map(({ height, ...style }, index) => (
        <animated.div
          key={index}
          style={{
            ...style,
            position: "relative",
            width: "100%",
            height: "130px",
            lineHeight: "80px",
            color: "black",
            fontSize: "10em",
            fontWeight: "800",
            letterSpacing: "-0.05em",
            willChange: "transform, opacity",
            overflow: "hidden"
          }}>
          <animated.div style={{ height }}>{items[index]}</animated.div>
        </animated.div>
      ))}
    </div>
  );
};

export const TrailCoke: React.FC<{ open: boolean }> = ({ open, children }) => {
  const items = React.Children.toArray(children);
  const trail = useTrail(items.length, {
    config: { mass: 5, tension: 2000, friction: 200, duration: 900 },
    opacity: open ? 1 : 0,
    // y: open ? 0 : 200,
    transform: open ? `translateY(0%)` : `translateY(100%)`,
    height: open ? "100%" : "0",
    from: { opacity: 0, transform: `translateY(100%)`, height: "0%" }
    // loop: true
  });
  return (
    <Box
      sx={{
        height: "100%",
        position: "relative"
      }}>
      {trail.map(({ height, opacity, transform, ...style }, index) => (
        <animated.div
          key={index}
          style={{
            ...style,
            // position: "relative",
            // width: "100%",
            // height: "130px",
            // lineHeight: "80px",
            // color: "black",
            // fontSize: "10em",
            // fontWeight: "800",
            // letterSpacing: "-0.05em",
            // willChange: "transform, opacity",
            // overflow: "hidden"
            height: "75%",
            position: "absolute",
            width: "100%",
            overflow: "hidden"
          }}>
          <animated.div
            style={{ opacity, transform, overflow: "hidden", height: "100%" }}>
            {items[index]}
          </animated.div>
        </animated.div>
      ))}
    </Box>
  );
};
