import { useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { scrollState } from "./scrollStore";
import { DOLLY, ROOM } from "./roomConfig";

const wallZ = -ROOM.depth / 2;
const cameraZ = wallZ + DOLLY.distance;

const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

// Slides the camera sideways in front of the wall, always facing straight
// ahead into it (no rotation) — a tracking-shot dolly, not an orbit. This
// keeps the wall filling the frame edge to edge at every scroll position.
export default function CameraRig() {
  const { camera, pointer } = useThree();
  const mouseInfluence = useRef({ x: 0, y: 0 });

  useFrame((_, delta) => {
    const smoothing = 1 - Math.pow(0.001, delta);
    scrollState.current = lerp(scrollState.current, scrollState.target, smoothing);

    mouseInfluence.current.x = lerp(mouseInfluence.current.x, pointer.x, smoothing);
    mouseInfluence.current.y = lerp(mouseInfluence.current.y, pointer.y, smoothing);

    const x = lerp(-DOLLY.travel, DOLLY.travel, scrollState.current);

    camera.position.x = x + mouseInfluence.current.x * 0.15;
    camera.position.y = DOLLY.eyeHeight + mouseInfluence.current.y * 0.08;
    camera.position.z = cameraZ;

    camera.lookAt(camera.position.x, DOLLY.lookY, wallZ);
  });

  return null;
}
