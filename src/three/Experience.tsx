import { Canvas } from "@react-three/fiber";
import { ContactShadows } from "@react-three/drei";
import Room from "./Room";
import CameraRig from "./CameraRig";
import WallNameplate from "./WallNameplate";
import { ORBIT, ROOM } from "./roomConfig";

export default function Experience() {
  return (
    <Canvas
      shadows
      dpr={[1, 2]}
      camera={{
        fov: 44,
        near: 0.1,
        far: 100,
        position: [ORBIT.pivot.x, ORBIT.eyeHeight, ORBIT.pivot.z + ORBIT.radius],
      }}
    >
      <color attach="background" args={["#4b3f66"]} />
      <fog attach="fog" args={["#4b3f66", 7, 15]} />

      {/* cool ambient fill so the un-lit (left) side of the room stays moody, not black */}
      <ambientLight intensity={0.9} color="#8f86c9" />
      <directionalLight
        position={[-4, 5, 2.5]}
        intensity={1.2}
        color="#9a91d1"
      />
      {/* warm key light, offset to the right — matches the glow panel on the wall */}
      <pointLight
        position={[ROOM.width * 0.24, ROOM.height * 0.55, -ROOM.depth * 0.05]}
        intensity={22}
        color="#ffcf8f"
        distance={6}
        decay={2}
        castShadow
        shadow-mapSize={[1024, 1024]}
      />
      <pointLight position={[0, ROOM.height - 0.15, 0]} intensity={4.5} decay={2} distance={5} color="#fff0d2" />

      <Room />
      <WallNameplate />
      <ContactShadows
        position={[0, 0.01, 0]}
        opacity={0.35}
        scale={ROOM.width}
        blur={2.2}
        far={4}
      />

      <CameraRig />
    </Canvas>
  );
}
