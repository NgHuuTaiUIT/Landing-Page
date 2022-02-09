import { Box, Flex } from "@chakra-ui/react";
import { Descriptions } from "../element/descriptions";
import Heading from "../element/heading";
const Scene1 = ({ scene }: { scene: number }) => {
  return (
    <Flex
      justify="center"
      align="start"
      sx={{ position: "relative", height: "100%", overflow: "hidden" }}>
      <Heading />

      <Box sx={{ flex: 1, height: "100%", position: "relative" }}>
        <Box
          sx={{
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "flex-end",
            opacity: 1,
            //   backgroundColor: "primary",
            position: "absolute",
            bottom: "0%",
            height: "50%",
            //   width: "280px",
            width: "100%",
            background:
              scene === 0
                ? `linear-gradient(180deg, rgba(245,244,233,0) 0%,
            rgba(245,244,233,0.5) 10%,
            rgba(245,244,233,0.7) 20%, rgba(245,244,233,1) 30%,
             rgba(245,244,233,1) 100%)`
                : "rgba(245,244,233,0)",
            left: "-30px"
          }}
        />
        <Descriptions scene={scene} />
      </Box>
    </Flex>
  );
};

export default Scene1;
