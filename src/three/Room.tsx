import { ROOM } from "./roomConfig";

const PALETTE = {
  floor: "#c8a780",
  floorAccent: "#b8946a",
  wall: "#eee3d3",
  wallAccent: "#e3d5bf",
  trim: "#8a6f52",
  rug: "#a8402f",
};

// A long, warm, minimal room shell: floor, back wall, two end walls, a
// window glow and a ceiling strip of light. Deliberately undecorated —
// this is the stage; sections/furniture slot in once the layout is set.
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

      {/* Floor plank seams (subtle visual rhythm along the scroll axis) */}
      {Array.from({ length: Math.floor(width / 1.2) }).map((_, i) => (
        <mesh
          key={i}
          rotation={[-Math.PI / 2, 0, 0]}
          position={[-halfW + i * 1.2, 0.001, 0]}
        >
          <planeGeometry args={[0.02, depth]} />
          <meshStandardMaterial color={PALETTE.floorAccent} roughness={0.9} />
        </mesh>
      ))}

      {/* Rug (a calm focal patch near the center) */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.005, halfD * 0.25]} receiveShadow>
        <planeGeometry args={[5.5, 3.2]} />
        <meshStandardMaterial color={PALETTE.rug} roughness={0.95} />
      </mesh>

      {/* Back wall */}
      <mesh position={[0, height / 2, -halfD]} receiveShadow>
        <boxGeometry args={[width, height, 0.2]} />
        <meshStandardMaterial color={PALETTE.wall} roughness={0.95} />
      </mesh>

      {/* Baseboard trim on back wall */}
      <mesh position={[0, 0.25, -halfD + 0.11]}>
        <boxGeometry args={[width, 0.5, 0.06]} />
        <meshStandardMaterial color={PALETTE.trim} roughness={0.8} />
      </mesh>

      {/* End walls (cap the room on both sides) */}
      <mesh position={[-halfW, height / 2, 0]} receiveShadow>
        <boxGeometry args={[0.2, height, depth]} />
        <meshStandardMaterial color={PALETTE.wallAccent} roughness={0.95} />
      </mesh>
      <mesh position={[halfW, height / 2, 0]} receiveShadow>
        <boxGeometry args={[0.2, height, depth]} />
        <meshStandardMaterial color={PALETTE.wallAccent} roughness={0.95} />
      </mesh>

      {/* Ceiling light strip (soft glow, no full ceiling so the room stays open/legible) */}
      <mesh position={[0, height - 0.05, 0]}>
        <boxGeometry args={[width * 0.9, 0.06, 0.4]} />
        <meshStandardMaterial
          color="#fff6e5"
          emissive="#fff2d6"
          emissiveIntensity={1.4}
          toneMapped={false}
        />
      </mesh>
    </group>
  );
}
