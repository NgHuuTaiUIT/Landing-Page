import { Box } from "@chakra-ui/react";
import { Canvas } from "@react-three/fiber";
import type { NextPage } from "next";
import { Suspense, useEffect, useState } from "react";
import Background from "../components/common/background-icon";
import Wave from "../components/common/wave";
import Scene1 from "../components/Scene/scene1";
import Scene2 from "../components/Scene/scene2";
import Scene3 from "../components/Scene/scene3";
import { AnimatedCoke } from "../components/spring/trail";
import Coke from "../components/three/Coke1";
const Home: NextPage = () => {
  const [scene, setScene] = useState(0);

  // console.log(scene);
  useEffect(() => {
    document.addEventListener("click", () => {
      setScene(scene + 1 >= 3 ? scene : scene + 1);
    });
  }, [scene]);

  return (
    <>
      <Wave show={scene === 2} top="-10%" delay={800} duration={800} />

      <Box
        sx={{
          maxWidth: "1500px",
          width: "1424px",
          height: "891px",
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
            }}>
            <Suspense fallback={null}>
              <ambientLight intensity={0.5} />
              <directionalLight position={[-2, 5, 2]} intensity={1} />

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
            <Scene1 scene={scene} />
          </Box>
          <Box height="33.33%">
            <Scene2 show={scene === 1} />
          </Box>

          <Box height="33.33%">
            <Scene3 show={scene === 2} />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Home;
