import { useRef } from "react";
import { Html } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { scrollState, trapezoid } from "./scrollStore";
import { PROFILE } from "../content/profile";
import { ROOM, ZONE_X } from "./roomConfig";
import "./WallNameplate.css";

// Name + intro rendered as a CSS-3D object locked to the back wall (via
// drei's <Html transform>), so it reads as painted on the wall rather than
// a flat overlay floating over the scene. Visible while roughly centered.
export default function WallNameplate() {
  const ref = useRef<HTMLDivElement>(null);

  useFrame(() => {
    if (ref.current) {
      const opacity = trapezoid(scrollState.current, 0.28, 0.4, 0.6, 0.72);
      ref.current.style.opacity = String(opacity);
    }
  });

  const wallZ = -ROOM.depth / 2;
  const x = ZONE_X.center - 1.9;
  const y = 0.95;
  const z = wallZ + 0.12;

  return (
    <Html transform position={[x, y, z]} scale={0.22} style={{ pointerEvents: "none" }}>
      <div ref={ref} className="wall-nameplate">
        <h1>{PROFILE.name}</h1>
        <p>{PROFILE.intro}</p>
      </div>
    </Html>
  );
}
