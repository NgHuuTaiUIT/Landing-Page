import { Box, Flex, Text } from "@chakra-ui/react";
import { ReactNode } from "react";

const Head = ({
  children,
  size = 100,
  lineHeight = 135,
  style
}: {
  children: ReactNode;
  size?: number;
  lineHeight?: number;
  style?: {};
}) => {
  return (
    <Text
      fontSize={`${size}px`}
      sx={{ ...style, fontWeight: "bold", lineHeight: `${lineHeight}px` }}>
      {children}
    </Text>
  );
};

export default Head;
