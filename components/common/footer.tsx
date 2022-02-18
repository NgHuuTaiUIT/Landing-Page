import { Box, Flex, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Flex
      width="100%"
      gap={4}
      align="center"
      justify="flex-start"
      sx={{
        mb: "16px",
        ml: "8px"
      }}>
      <Text
        fontSize="14px"
        sx={{
          fontWeight: "900",
          fontFamily: "Poppins",
          letterSpacing: "-0.5px"
        }}>
        Social media
      </Text>
      <Box
        sx={{
          height: "30px",
          width: "30px",
          background: "url(/assets/Instagram.svg) no-repeat",
          backgroundSize: "cover",
          ml: "2px"
        }}
      />
      <Box
        sx={{
          height: "30px",
          width: "30px",
          //   background: "url(/assets/Facebook.svg)",
          background: "url(/assets/Facebook.svg) no-repeat",

          backgroundSize: "cover"
        }}
      />
    </Flex>
  );
};

export default Footer;
