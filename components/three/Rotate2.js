import { useFrame } from "@react-three/fiber";
import React, { useEffect, useRef } from "react";
export default function Rotate({ children, ...props }) {
  const group = useRef();
  const group1 = useRef();
  let show = true;
  useEffect(() => {
    //NOTE:Scene 1
    group.current.position.x = 1.8;
    group.current.position.z = -0.3;

    group.current.rotation.x = 0.6;
    // group.current.rotation.y = -0.7;
    group.current.rotation.z = -0.2;
  }, []);
  useFrame(state => {
    const t = state.clock.getElapsedTime();
    const x = group.current.rotation.x;
    const y = group.current.rotation.y;
    const z = group.current.rotation.z;

    group.current.position.x > 0 ? (group.current.position.x += -0.03) : null;
    group.current.position.z > 0 ? (group.current.position.z += 0.03) : null;
    //0, -2.3, 0
    group.current.rotation.x > 0 ? (group.current.rotation.x += -0.03) : null;
    group.current.rotation.z < 0 ? (group.current.rotation.z += 0.03) : null;
    // group.current.rotation.y += 0.05;
  });

  useFrame(state => {
    // console.log("rotation.x", group.current.rotation.x);
    // console.log("rotation.y", group.current.rotation.y);
    // console.log("rotation.z", group.current.rotation.z);
    // group.current.position.x = -2.7;
    // group.current.position.z = -0;
    // group.current.position.y = 0;
    // group.current.rotation.x = 0.7;
    // group.current.rotation.y = 0.2;
    // group.current.rotation.z = 0;

    group.current.position.x < -2.7
      ? (group.current.position.x += -0.03)
      : null;
    // group.current.position.z > 0 ? (group.current.position.z += 0.03) : null;
    //0, -2.3, 0
    group.current.rotation.x < 0.7 ? (group.current.rotation.x += 0.03) : null;
    // group.current.rotation.z < 0 ? (group.current.rotation.z += 0.03) : null;
    // group.current.rotation.y += 0.05;
    group.current.rotation.y < 0.2 ? (group.current.rotation.y += 0.03) : null;
  });
  return (
    <group ref={group} {...props} dispose={null}>
      {children}
    </group>
  );
}
