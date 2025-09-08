"use client";

import { Canvas, useFrame, extend } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";
import { useSelector } from "react-redux";
import { shaderMaterial } from "@react-three/drei";

// Custom shader material
const StarMaterial = shaderMaterial(
  { uTime: 0, uColor: new THREE.Color("#8b5cf6") }, // default purple
  `
  uniform float uTime;
  void main() {
    vec3 pos = position;

    pos.y += mod(uTime * 0.5 + pos.y + 20.0, 40.0) - 20.0;

    float angle = uTime * 0.1;
    float x = pos.x * cos(angle) - pos.z * sin(angle);
    float z = pos.x * sin(angle) + pos.z * cos(angle);
    pos.x = x;
    pos.z = z;

    vec4 modelPosition = modelMatrix * vec4(pos, 1.0);
    vec4 viewPosition = viewMatrix * modelPosition;
    vec4 projectionPosition = projectionMatrix * viewPosition;
    gl_Position = projectionPosition;

    gl_PointSize = 2.0 + 1.5 * sin(uTime * 2.0 + pos.x * 10.0);
  }
  `,
  `
  uniform vec3 uColor;
  void main() {
    float dist = distance(gl_PointCoord, vec2(0.5));
    if (dist > 0.5) discard;
    gl_FragColor = vec4(uColor, 1.0);
  }
  `
);

extend({ StarMaterial });

function StarField({ count, color }) {
  const ref = useRef();
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 40;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 40;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 40;
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

export default function NeonBackground(props) {
  console.log(props,"boolean_check")
  const theme = useSelector((state) => state.theme.mode);
  const effect = useSelector((state) => state.effect.enabled);
  console.log(effect,"effect")
  const starColorPrimary =
    theme === "dark" ? "#8b5cf6" /* purple-500 */ : "#a855f7"; /* purple-400 */
  const starColorSecondary =
    theme === "dark" ? "#f97316" /* orange-500 */ : "#fb923c"; /* orange-400 */

  return (
    <>
    {effect ?
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
    </Canvas> : <> </>}
    </>
  );
}
