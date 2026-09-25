import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Float, MeshDistortMaterial } from "@react-three/drei";

const SHAPES: {
  position: [number, number, number];
  scale: number;
  geometry: "icosahedron" | "torus" | "sphere";
  speed: number;
}[] = [
  { position: [3.2, 0.6, -1], scale: 1.1, geometry: "icosahedron", speed: 1.4 },
  { position: [4.3, -0.8, -2], scale: 0.7, geometry: "torus", speed: 1.8 },
  { position: [2.2, -1.2, 0], scale: 0.5, geometry: "sphere", speed: 2.2 },
];

function Shape({ position, scale, geometry, speed }: (typeof SHAPES)[number]) {
  return (
    <Float speed={speed} rotationIntensity={1.1} floatIntensity={1.6}>
      <mesh position={position} scale={scale}>
        {geometry === "icosahedron" && <icosahedronGeometry args={[1, 0]} />}
        {geometry === "torus" && <torusGeometry args={[0.7, 0.26, 16, 48]} />}
        {geometry === "sphere" && <sphereGeometry args={[1, 32, 32]} />}
        <MeshDistortMaterial
          color="#6d5acd"
          distort={0.3}
          speed={1.5}
          roughness={0.2}
          metalness={0.3}
          transparent
          opacity={0.55}
        />
      </mesh>
    </Float>
  );
}

// Purely decorative floating shapes behind the hero text. Non-interactive
// (pointer-events disabled on the wrapper) so it never competes with the
// page's real content or scroll behavior.
export default function HeroCanvas() {
  return (
    <div className="pointer-events-none absolute inset-0" aria-hidden>
      <Canvas
        camera={{ position: [0, 0, 6], fov: 45 }}
        dpr={[1, 1.5]}
        gl={{ alpha: true, antialias: true }}
      >
        <ambientLight intensity={0.7} />
        <directionalLight position={[3, 3, 4]} intensity={1.2} color="#a996ff" />
        <Suspense fallback={null}>
          {SHAPES.map((s, i) => (
            <Shape key={i} {...s} />
          ))}
        </Suspense>
      </Canvas>
    </div>
  );
}
