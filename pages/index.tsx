import { Box } from "@chakra-ui/react";
import type { NextPage } from "next";
import { useEffect, useState } from "react";
import Scene1 from "../components/Scene/scene1";
import Scene2 from "../components/Scene/scene2";
const Home: NextPage = () => {
  const [scene, setScene] = useState(1);

  // console.log(scene);
  // useEffect(() => {
  //   document.addEventListener("click", () => {
  //     setScene(scene + 1 >= 2 ? 0 : scene + 1);
  //   });
  //   return () => document.removeEventListener("click", null);
  // }, [scene]);
  return (
    <Box
      sx={{
        height: "300%",
        transform: `translateY(-${scene * 33}%)`,
        transition: "transform 1s linear"
      }}>
      <Box height="33%">{scene === 0 && <Scene1 />}</Box>
      <Box height="33%">{scene === 1 && <Scene2 />}</Box>
    </Box>
  );
};

export default Home;
