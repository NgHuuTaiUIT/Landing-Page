import { Box, Flex } from "@chakra-ui/react";
import cup from "../../assets/cup.svg";
import Footer from "./footer";
import Icon from "./icon";
import TextCircle from "./text-circle";

const Background = () => {
  const commonStyles = {
    width: "50%",
    height: "100%",
    justifyContent: "space-between",
    flexDirection: "column",
    ml: "40px",
    pt: "50px",
    pb: "50px"
  };
  return (
    <Flex position="absolute" sx={{ inset: 0 }} bg="primary">
      <Flex sx={commonStyles}>
        <Icon height="30px" width="30px" icon="/assets/cup.svg" />
        <Footer />
      </Flex>
      <Flex sx={{ ...commonStyles, alignItems: "flex-end", mr: "40px" }}>
        <Flex
          sx={{
            // position: "absolute",
            // top: 10,
            // right: 10,
            height: "57px",
            width: "57px",
            alignItems: "center",
            justifyContent: "center",
            bg: "white",
            borderRadius: "50%",
            mr: "40px",
            mt: "-15px"
          }}>
          <Icon
            width="30px"
            height="30px"
            icon="/assets/align-right.svg"
            color="gray"
          />
        </Flex>
        <Flex
          sx={{
            position: "absolute",
            bottom: 0,
            right: 0,
            height: "165px",
            width: "165px",
            alignItems: "center",
            justifyContent: "center",
            pb: "113px",
            pr: "140px"
          }}>
          <TextCircle text="100% PULPED WATERMELON " width={165} />
          <Icon
            width="65px"
            height="65px"
            icon="/assets/leaf.svg"
            color="gray"
          />
        </Flex>
      </Flex>
    </Flex>
  );
};
export default Background;
