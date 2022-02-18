import { Box } from "@chakra-ui/react";
import cup from "../../assets/cup.svg";

const Icon = ({
  icon,
  height,
  width,
  color
}: {
  icon: string;
  height: string;
  width: string;
  color?: string;
}) => {
  return (
    <Box>
      <Box
        background={cup}
        sx={{
          height,
          width,
          color,
          background: `url(${icon}) no-repeat`,
          backgroundSize: "cover"
        }}
      />
    </Box>
  );
};
export default Icon;
