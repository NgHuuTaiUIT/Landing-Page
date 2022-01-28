import { Box, Container } from "@chakra-ui/react";
import { Canvas } from "@react-three/fiber";
import type { NextPage } from "next";
import { Suspense, useEffect, useState } from "react";
import { animated, useSpring } from "react-spring";
import BackgroundColor from "../components/common/background-color";
import Background from "../components/common/background-icon";
import Scene1 from "../components/Scene/scene1";
import Scene2 from "../components/Scene/scene2";
import Scene3 from "../components/Scene/scene3";
import { AnimatedCoke, TrailCoke } from "../components/spring/trail";
import Coke from "../components/three/Coke1";
import Rotate from "../components/three/Rotate";
const Home: NextPage = () => {
  const [scene, setScene] = useState(0);

  // console.log(scene);
  useEffect(() => {
    document.addEventListener("click", () => {
      setScene(scene + 1 >= 3 ? scene : scene + 1);
    });
  }, [scene]);
  const waveAnimated = useSpring({
    config: { mass: 5, tension: 2000, friction: 200, duration: 1000 },
    from: { transform: "translateY(100%)" },
    transform: scene === 2 ? "translateY(-13%)" : "translateY(100%)",
    // top: show ? "50%" : "70%",
    delay: 100
  });

  return (
    <>
      <BackgroundColor index={scene} />
      {/* <animated.div
        style={{
          ...waveAnimated,
          position: "absolute",
          // inset: 0,
          height: "132%",
          width: "102%",
          // background: `linear-gradient(180deg, rgba(245,244,233,0) 0%,
          //   rgba(245,244,233,0) 50%,
          //   rgba(229, 75, 79,1) 51%,

          //    rgba(229, 75, 79,1) 100%)`,
          //   top: "50%",
          //   left: "50%",
          zIndex: -2
        }}>
        <svg
          width="1920"
          height="951"
          viewBox="0 0 1442 651"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M10.1282 537.343L49.9024 549.97C89.6766 562.459 169.225 587.713 248.773 588.536C328.322 589.497 407.87 566.165 487.419 550.793C566.967 535.559 646.516 528.147 726.064 532.265C805.613 536.382 882.418 560.497 948.251 588.536C1014.08 616.575 1143.85 651 1216.01 651C1314.42 651 1362.45 599.981 1402.23 575.963L1442 537.343V0.000683734L1355.37 70.5004C1355.37 70.5004 1366.5 61.4439 1282.37 104C1198.24 146.557 1151.37 135.001 1057.87 135.001C964.372 135.001 841.872 86.0005 750.872 39.5005C672.286 -0.656101 644.488 0.000406439 546.372 0.000683734C461.179 0.000924503 401 35.0004 321 70.5004C248.773 124 190.872 113 134 70.5004L0 0.000683734L10.1282 537.343Z"
            fill="#E54B4F"
          />
        </svg>
      </animated.div> */}
      {/* <Container
        maxW="100vw"
       
        // bg="secondary"
        position="relative"
        // overflow="hidden"
        // mt={10}
      > */}
      <Box
        sx={{
          maxWidth: "1500px",
          width: "1424px",
          height: "891px",
          // height: "100%",
          // width: "100%",
          backgroundColor: scene !== 2 ? "primary" : "primary",
          overflow: "hidden",
          position: "relative",
          m: "auto",
          top: "50%",
          transform: "translateY(-50%)"
        }}>
        <Background />

        <AnimatedCoke open={true} scene={scene}>
          <Canvas
            camera={{ position: [0, 0, 6], fov: 70, near: 0.02 }}
            style={{
              height: "100%",
              width: "100%",
              position: "absolute",
              left: 0
              // zIndex: scene === 2 ? 9 : 0
            }}>
            <Suspense fallback={null}>
              <ambientLight intensity={0.5} />
              <directionalLight position={[-2, 5, 2]} intensity={1} />
              {/* <Coke
            rotation={[0, -2.3, 0]}
            position={[0, -0.2, 0]}
            scale={[1.5, 1.5, 1.5]}
          /> */}
              {/* <Rotate> */}
              <Coke
                scene={scene}
                rotation={[0.6, -0.7, -0.2]}
                position={[1.8, -0.2, -0.3]}
                scale={[1.5, 1.5, 1.5]}
              />
              {/* </Rotate> */}
            </Suspense>
          </Canvas>
        </AnimatedCoke>

        <Box
          sx={{
            height: "300%",
            transform: `translateY(-${scene * 33.33}%)`,
            transition: "transform 1s linear"
          }}>
          <Box height="33.33%">
            <Scene1 />
          </Box>
          <Box height="33.33%">
            <Scene2 show={scene === 1} />
          </Box>

          <Box
            height="33.33%"
            // bg="white"
          >
            <Scene3 show={scene === 2} />
          </Box>
        </Box>
      </Box>
      {/* </Container> */}
    </>
  );
};

export default Home;
