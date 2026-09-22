import { useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { scrollState } from "./scrollStore";
import { ORBIT } from "./roomConfig";

const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

// Swings the camera on a circular arc around a pivot near the room's
// center — scrolling left/right rotates the view around the room rather
// than sliding it, plus a small mouse-parallax tilt for depth.
export default function CameraRig() {
  const { camera, pointer } = useThree();
  const mouseInfluence = useRef({ x: 0, y: 0 });

  useFrame((_, delta) => {
    const smoothing = 1 - Math.pow(0.001, delta);
    scrollState.current = lerp(scrollState.current, scrollState.target, smoothing);

    mouseInfluence.current.x = lerp(mouseInfluence.current.x, pointer.x, smoothing);
    mouseInfluence.current.y = lerp(mouseInfluence.current.y, pointer.y, smoothing);

    // progress in [0, 1] -> angle in [-maxAngle, +maxAngle]
    const angle = lerp(-ORBIT.maxAngle, ORBIT.maxAngle, scrollState.current);
    const wobble = mouseInfluence.current.x * 0.05;

    camera.position.x = ORBIT.pivot.x + ORBIT.radius * Math.sin(angle + wobble);
    camera.position.z = ORBIT.pivot.z + ORBIT.radius * Math.cos(angle + wobble);
    camera.position.y = ORBIT.eyeHeight + mouseInfluence.current.y * 0.15;

    camera.lookAt(ORBIT.pivot.x, ORBIT.pivot.y, ORBIT.pivot.z);
  });

  return null;
}
