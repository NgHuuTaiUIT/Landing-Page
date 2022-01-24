import { useFrame } from "@react-three/fiber";
import React, { useRef } from "react";
export default function Rotate({ children, ...props }) {
  const group = useRef();
  const group1 = useRef();

  useFrame(state => {
    const t = state.clock.getElapsedTime();
    group.current.position.y = 0 + (1 + Math.sin(t / 0.4)) / 10;
    group.current.rotation.y = -0 + (1 + Math.sin(t / 0.4)) / 10;
  });
  return (
    <group ref={group} {...props} dispose={null}>
      {children}
    </group>
  );
}
