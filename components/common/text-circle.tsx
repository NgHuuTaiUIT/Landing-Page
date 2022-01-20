import { Box } from "@chakra-ui/react";
import { keyframes } from "@emotion/react";
const TextCircle = ({ text, width }: { text: string; width: number }) => {
  const rotate360deg = keyframes`
      0% {
        transform: rotate(360deg);
      }
      100% {
        transform: rotate(0deg);
      }
    `;
  return (
    <Box
      sx={{
        position: "absolute",
        width: "100%",
        height: "100%",
        animation: `${rotate360deg} 10s linear infinite`
      }}>
      {text.split("").map((char, idx) => (
        <span
          key={idx}
          style={{
            transform: `rotate(${idx * (360 / text.length)}deg)`,
            position: "absolute",
            left: "50%",
            fontSize: "1.2em",
            transformOrigin: `0 ${width / 2}px`
          }}>
          {char}
        </span>
      ))}
    </Box>
  );
};
export default TextCircle;
