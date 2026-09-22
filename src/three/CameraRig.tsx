import { useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { scrollState } from "./scrollStore";
import { CAMERA_TRAVEL, ROOM } from "./roomConfig";

const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

// Drives the camera horizontally through the room based on scroll progress,
// plus a small subtle mouse-parallax tilt for depth.
export default function CameraRig() {
  const { camera, pointer } = useThree();
  const mouseInfluence = useRef({ x: 0, y: 0 });

  useFrame((_, delta) => {
    // Smooth (damped) approach to the scroll target — frame-rate independent.
    const smoothing = 1 - Math.pow(0.001, delta);
    scrollState.current = lerp(scrollState.current, scrollState.target, smoothing);

    mouseInfluence.current.x = lerp(mouseInfluence.current.x, pointer.x, smoothing);
    mouseInfluence.current.y = lerp(mouseInfluence.current.y, pointer.y, smoothing);

    const x = lerp(-CAMERA_TRAVEL, CAMERA_TRAVEL, scrollState.current);
    camera.position.x = x + mouseInfluence.current.x * 0.35;
    camera.position.y = ROOM.height * 0.5 + mouseInfluence.current.y * 0.15;
    camera.position.z = ROOM.depth * 1.35;

    camera.lookAt(x, ROOM.height * 0.42, 0);
  });

  return null;
}
