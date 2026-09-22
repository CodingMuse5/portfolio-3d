import { Canvas } from "@react-three/fiber";
import { ContactShadows } from "@react-three/drei";
import Room from "./Room";
import CameraRig from "./CameraRig";
import { ROOM } from "./roomConfig";

export default function Experience() {
  return (
    <Canvas
      shadows
      dpr={[1, 2]}
      camera={{ fov: 42, near: 0.1, far: 100, position: [0, ROOM.height * 0.5, ROOM.depth * 1.35] }}
    >
      <color attach="background" args={["#efe3d0"]} />
      <fog attach="fog" args={["#efe3d0", 14, 30]} />

      <ambientLight intensity={0.55} />
      <directionalLight
        position={[6, 10, 6]}
        intensity={1.1}
        castShadow
        shadow-mapSize={[2048, 2048]}
        shadow-camera-left={-16}
        shadow-camera-right={16}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
      />
      <pointLight position={[0, ROOM.height - 0.3, 0]} intensity={0.6} color="#ffe9c4" />

      <Room />
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
