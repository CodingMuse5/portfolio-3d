import { ROOM, ZONE_X } from "./roomConfig";
import Furniture from "./Furniture";

const PALETTE = {
  floor: "#c7a476",
  floorAccent: "#b58f61",
  wallBack: "#9089c4",
  wallSide: "#8078b0",
  ceiling: "#5b4f78",
  rug: "#cdb9a4",
};

// One long back wall the camera dollies past — deliberately undecorated
// beyond the shell; Furniture places the three zones (art wall, desk, sofa)
// along it.
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
      {Array.from({ length: Math.floor(width / 0.6) }).map((_, i) => (
        <mesh
          key={i}
          rotation={[-Math.PI / 2, 0, 0]}
          position={[-halfW + i * 0.6, 0.001, 0]}
        >
          <planeGeometry args={[0.015, depth]} />
          <meshStandardMaterial color={PALETTE.floorAccent} roughness={0.9} />
        </mesh>
      ))}

      {/* Rug under the desk zone */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[ZONE_X.center, 0.005, depth * 0.12]} receiveShadow>
        <planeGeometry args={[2.6, 1.7]} />
        <meshStandardMaterial color={PALETTE.rug} roughness={0.95} />
      </mesh>

      {/* Back wall */}
      <mesh position={[0, height / 2, -halfD]} receiveShadow>
        <boxGeometry args={[width, height, 0.2]} />
        <meshStandardMaterial color={PALETTE.wallBack} roughness={0.9} />
      </mesh>

      {/* End walls (cap the room; rarely if ever in frame with the dolly camera) */}
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

      <Furniture />
    </group>
  );
}
