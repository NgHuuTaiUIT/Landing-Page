import { Box, Flex } from "@chakra-ui/react";
import { useState } from "react";
import { CokeWrap } from "../element/coke-wrap";
import Heading from "../element/heading";

const Scene1 = () => {
  //   const [open, setOpen] = useState(true);

  return (
    <Flex
      justify="center"
      align="start"
      sx={{ position: "relative", height: "100%", overflow: "hidden" }}
      // bg="primary"
    >
      <Heading />
      {/* <TrailCoke open={true}> */}

      {/* </TrailCoke> */}
      <Box sx={{ flex: 1, height: "100%", position: "relative" }}>
        <CokeWrap />
      </Box>
    </Flex>
  );
};

export default Scene1;
