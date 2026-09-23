import { Canvas } from "@react-three/fiber";
import { ContactShadows } from "@react-three/drei";
import Room from "./Room";
import CameraRig from "./CameraRig";
import WallNameplate from "./WallNameplate";
import { DOLLY, ROOM, ZONE_X } from "./roomConfig";

const wallZ = -ROOM.depth / 2;

export default function Experience() {
  return (
    <Canvas
      shadows
      dpr={[1, 2]}
      camera={{
        fov: 55,
        near: 0.1,
        far: 100,
        position: [-DOLLY.travel, DOLLY.eyeHeight, wallZ + DOLLY.distance],
      }}
    >
      <color attach="background" args={["#4b3f66"]} />
      <fog attach="fog" args={["#4b3f66", 7, 15]} />

      <ambientLight intensity={0.85} color="#8f86c9" />
      <directionalLight position={[-4, 5, 2.5]} intensity={1.0} color="#9a91d1" />

      {/* Warm accent near the desk zone */}
      <pointLight
        position={[ZONE_X.center + 1.6, ROOM.height * 0.6, wallZ + 1.5]}
        intensity={16}
        color="#ffcf8f"
        distance={5.5}
        decay={2}
        castShadow
        shadow-mapSize={[1024, 1024]}
      />
      {/* Soft fill near the sofa zone */}
      <pointLight
        position={[ZONE_X.right, ROOM.height * 0.7, wallZ + 1.8]}
        intensity={10}
        color="#d9c8ff"
        distance={5.5}
        decay={2}
      />
      {/* Soft fill near the art wall */}
      <pointLight
        position={[ZONE_X.left, ROOM.height * 0.7, wallZ + 1.2]}
        intensity={8}
        color="#ffe4c2"
        distance={5}
        decay={2}
      />

      <Room />
      <WallNameplate />
      <ContactShadows position={[0, 0.01, 0]} opacity={0.35} scale={ROOM.width} blur={2.2} far={4} />

      <CameraRig />
    </Canvas>
  );
}
