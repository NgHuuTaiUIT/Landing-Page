import { Box } from "@chakra-ui/react";
import styled from "@emotion/styled";
import React, { Component } from "react";

interface Props {}

const Outer = styled.div`
  margin: auto;
  margin-top: 15%;
  background: "primary";
  height: 100px;
  width: 100px;
  border-radius: 15px;
`;
const Middle = styled.div`
  height: 60px;
  width: 60px;
  margin: auto;
  position: relative;
  top: 20px;
  border-radius: 50%;
  background-image: linear-gradient(150deg, transparent 50%, #154e7d 50%),
    linear-gradient(90deg, #154e7d 50%, white 50%);
  -webkit-animation: rotation 1200ms infinite linear;
  transform-origin: 50% 50%;
  animation-timing-function: ease;
  @-webkit-keyframes rotation {
    from {
      -webkit-transform: rotate(270deg);
    }
    to {
      -webkit-transform: rotate(630deg);
    }
  }
`;

const Inner = styled.div`
  background: primary;
  height: 48px;
  width: 48px;
  margin: auto;
  position: relative;
  top: 6px;
  border-radius: 50%;
`;
const Loading = () => {
  console.log("Loading");
  return (
    <Box
      sx={{
        position: "absolute",
        zIndex: 99,
        height: "100%",
        width: "100%",
        top: 0,
        left: 0
      }}>
      <Outer>
        <Middle>
          <Inner />
        </Middle>
      </Outer>
    </Box>
  );
};
export default Loading;
