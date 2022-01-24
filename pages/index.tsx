import { Box } from "@chakra-ui/react";
import { Canvas } from "@react-three/fiber";
import type { NextPage } from "next";
import { Suspense, useEffect, useState } from "react";
import Scene1 from "../components/Scene/scene1";
import Scene2 from "../components/Scene/scene2";
import Scene3 from "../components/Scene/scene3";
import Coke from "../components/three/Coke1";
import Rotate from "../components/three/Rotate";
const Home: NextPage = () => {
  const [scene, setScene] = useState(0);

  // console.log(scene);
  useEffect(() => {
    document.addEventListener("click", () => {
      setScene(scene + 1 >= 3 ? 0 : scene + 1);
    });
  }, [scene]);
  return (
    <Box
      sx={{
        height: "300%",
        transform: `translateY(-${scene * 33}%)`,
        transition: "transform 1s linear",
        backgroundColor: scene !== 2 ? "primary" : "secondary"
      }}>
      <Canvas
        camera={{ position: [0, 0, 6], fov: 70, near: 0.02 }}
        style={{
          height: "33%",
          width: "100%",
          position: "absolute",
          left: 0
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

      <Box height="33%">{scene === 0 && <Scene1 />}</Box>
      <Box height="33%">{scene === 1 && <Scene2 />}</Box>
      <Box height="33%">{scene === 2 && <Scene3 />}</Box>
    </Box>
  );
};

export default Home;
