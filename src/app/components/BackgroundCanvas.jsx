"use client";

import { Canvas, useFrame, extend } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";
import { useSelector } from "react-redux";
import { shaderMaterial } from "@react-three/drei";

// Custom shader material for twinkling & drifting stars
const StarMaterial = shaderMaterial(
  { uTime: 0, uColor: new THREE.Color("#14a314") },
);

extend({ StarMaterial });

function StarField({ count, color }) {
  const ref = useRef();
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 40; // x
      arr[i * 3 + 1] = (Math.random() - 0.5) * 40; // y
      arr[i * 3 + 2] = (Math.random() - 0.5) * 40; // z
    }
    return arr;
  }, [count]);

  useFrame((state) => {
    if (ref.current) ref.current.uTime = state.clock.getElapsedTime();
  });

  return (
    <points>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          array={positions}
          count={positions.length / 3}
          itemSize={3}
        />
      </bufferGeometry>
      <starMaterial ref={ref} uColor={new THREE.Color(color)} />
    </points>
  );
}

export default function NeonGreenBackground() {
  const theme = useSelector((state) => state.theme.mode);
  const starColorPrimary = theme === "dark" ? "#14a314" : "#27c93f";
  const starColorSecondary = theme === "dark" ? "#0b3b0b" : "#39ff14";

  return (
    <Canvas
      camera={{ position: [0, 0, 25], fov: 60 }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: -1,
        pointerEvents: "none",
        userSelect: "none",
      }}
    >
      <ambientLight intensity={theme === "dark" ? 0.3 : 0.15} />
      <StarField count={300} color={starColorPrimary} />
      <StarField count={400} color={starColorSecondary} />
    </Canvas>
  );
}
