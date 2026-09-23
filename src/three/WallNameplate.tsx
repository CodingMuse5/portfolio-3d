import { useRef } from "react";
import { Html } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { scrollState, trapezoid } from "./scrollStore";
import { PROFILE } from "../content/profile";
import { ROOM, ZONE_X } from "./roomConfig";
import "./WallNameplate.css";

// Name + intro anchored to a point on the wall, billboarded to always face
// the camera — the dolly camera only slides sideways and never turns to
// face this point, so a true rotated 3D plane here would look skewed
// (like a picture frame seen from an angle). Visible while roughly centered.
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
  const y = 1.55;
  const z = wallZ + 0.12;

  return (
    <Html position={[x, y, z]} style={{ pointerEvents: "none" }}>
      <div ref={ref} className="wall-nameplate">
        <h1>{PROFILE.name}</h1>
        <p>{PROFILE.intro}</p>
      </div>
    </Html>
  );
}
