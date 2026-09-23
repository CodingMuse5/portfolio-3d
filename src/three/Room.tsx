import { ROOM } from "./roomConfig";
import Furniture from "./Furniture";

const PALETTE = {
  floor: "#c7a476",
  floorAccent: "#b58f61",
  wallBack: "#7d6f9b",
  wallSide: "#6d5f8a",
  ceiling: "#5b4f78",
  rug: "#cdb9a4",
  glow: "#ffd9a0",
};

// A compact, boxy room in a dusty-lavender palette with a warm light glow
// on one side (the camera orbits around this rather than sliding past it).
// Deliberately undecorated — this is the stage; furniture/sections slot in
// once the layout is set.
export default function Room() {
  const { width, depth, height } = ROOM;
  const halfW = width / 2;
  const halfD = depth / 2;

  return (
    <group>
      {/* Floor */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]} receiveShadow>
        <planeGeometry args={[width, depth]} />
        <meshStandardMaterial color={PALETTE.floor} roughness={0.85} />
      </mesh>

      {/* Floor plank seams */}
      {Array.from({ length: Math.floor(width / 1.1) }).map((_, i) => (
        <mesh
          key={i}
          rotation={[-Math.PI / 2, 0, 0]}
          position={[-halfW + i * 1.1, 0.001, 0]}
        >
          <planeGeometry args={[0.02, depth]} />
          <meshStandardMaterial color={PALETTE.floorAccent} roughness={0.9} />
        </mesh>
      ))}

      {/* Rug */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[width * 0.12, 0.005, depth * 0.12]} receiveShadow>
        <planeGeometry args={[5, 3.4]} />
        <meshStandardMaterial color={PALETTE.rug} roughness={0.95} />
      </mesh>

      {/* Back wall */}
      <mesh position={[0, height / 2, -halfD]} receiveShadow>
        <boxGeometry args={[width, height, 0.2]} />
        <meshStandardMaterial color={PALETTE.wallBack} roughness={0.9} />
      </mesh>

      {/* Warm glow panel on the back wall (window/lamp light source), with a soft halo */}
      <mesh position={[width * 0.22, height * 0.6, -halfD + 0.1]}>
        <planeGeometry args={[3.6, 4.2]} />
        <meshBasicMaterial color={PALETTE.glow} transparent opacity={0.22} />
      </mesh>
      <mesh position={[width * 0.22, height * 0.6, -halfD + 0.11]}>
        <planeGeometry args={[2.2, 2.6]} />
        <meshStandardMaterial
          color={PALETTE.glow}
          emissive={PALETTE.glow}
          emissiveIntensity={0.8}
          toneMapped={false}
        />
      </mesh>

      {/* End walls (cap the room on both sides) */}
      <mesh position={[-halfW, height / 2, 0]} receiveShadow>
        <boxGeometry args={[0.2, height, depth]} />
        <meshStandardMaterial color={PALETTE.wallSide} roughness={0.9} />
      </mesh>
      <mesh position={[halfW, height / 2, 0]} receiveShadow>
        <boxGeometry args={[0.2, height, depth]} />
        <meshStandardMaterial color={PALETTE.wallSide} roughness={0.9} />
      </mesh>

      {/* Ceiling */}
      <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, height, 0]} receiveShadow>
        <planeGeometry args={[width, depth]} />
        <meshStandardMaterial color={PALETTE.ceiling} roughness={0.95} />
      </mesh>

      {/* Soft ceiling light strip */}
      <mesh position={[0, height - 0.05, 0]}>
        <boxGeometry args={[width * 0.6, 0.06, 0.4]} />
        <meshStandardMaterial
          color="#fff3dd"
          emissive="#fff0d2"
          emissiveIntensity={0.6}
          toneMapped={false}
        />
      </mesh>

      <Furniture />
    </group>
  );
}
