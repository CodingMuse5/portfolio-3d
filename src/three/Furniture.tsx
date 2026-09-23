import { ROOM } from "./roomConfig";

const PALETTE = {
  wood: "#9c7b52",
  woodDark: "#7c6040",
  chair: "#372c50",
  chairPad: "#e8ded0",
  laptop: "#2b2b33",
  screen: "#bcd6ff",
};

const DESK = { width: 2.3, thickness: 0.08, depth: 0.95, topY: 0.75 };
const LEG = { size: 0.07, height: 0.68 };
const SEAT = { size: 0.55, thickness: 0.07, y: 0.46 };
const BACKREST = { width: 0.55, height: 0.6, thickness: 0.07 };
const CHAIR_LEG = { size: 0.06, height: 0.46 };
const LAPTOP = { width: 0.55, baseThickness: 0.02, baseDepth: 0.38, screenHeight: 0.34 };

// Desk + chair + laptop, set against the back wall under the glow panel.
export default function Furniture() {
  const wallZ = -ROOM.depth / 2;
  const deskX = ROOM.width * 0.22;
  const deskZ = wallZ + 0.65;
  const chairZ = deskZ + 0.7;

  const legOffsetX = DESK.width / 2 - 0.12;
  const legOffsetZ = DESK.depth / 2 - 0.1;

  return (
    <group>
      {/* Desk */}
      <group position={[deskX, 0, deskZ]}>
        <mesh position={[0, DESK.topY, 0]} castShadow receiveShadow>
          <boxGeometry args={[DESK.width, DESK.thickness, DESK.depth]} />
          <meshStandardMaterial color={PALETTE.wood} roughness={0.6} />
        </mesh>
        {[-1, 1].map((sx) =>
          [-1, 1].map((sz) => (
            <mesh
              key={`${sx}-${sz}`}
              position={[sx * legOffsetX, LEG.height / 2, sz * legOffsetZ]}
              castShadow
            >
              <boxGeometry args={[LEG.size, LEG.height, LEG.size]} />
              <meshStandardMaterial color={PALETTE.woodDark} roughness={0.7} />
            </mesh>
          )),
        )}

        {/* Laptop, hinge sits on the desk surface toward the back edge */}
        <group position={[0, DESK.topY + DESK.thickness / 2, -0.05]}>
          <mesh position={[0, LAPTOP.baseThickness / 2, LAPTOP.baseDepth / 2]} castShadow>
            <boxGeometry args={[LAPTOP.width, LAPTOP.baseThickness, LAPTOP.baseDepth]} />
            <meshStandardMaterial color={PALETTE.laptop} roughness={0.4} metalness={0.3} />
          </mesh>
          <group rotation={[-0.3, 0, 0]}>
            <mesh position={[0, LAPTOP.screenHeight / 2, 0]} castShadow>
              <boxGeometry args={[LAPTOP.width, LAPTOP.screenHeight, 0.02]} />
              <meshStandardMaterial color={PALETTE.laptop} roughness={0.5} />
            </mesh>
            <mesh position={[0, LAPTOP.screenHeight / 2, 0.011]}>
              <planeGeometry args={[LAPTOP.width * 0.86, LAPTOP.screenHeight * 0.8]} />
              <meshStandardMaterial
                color={PALETTE.screen}
                emissive={PALETTE.screen}
                emissiveIntensity={0.5}
                toneMapped={false}
              />
            </mesh>
          </group>
        </group>
      </group>

      {/* Chair, facing the desk */}
      <group position={[deskX, 0, chairZ]}>
        <mesh position={[0, SEAT.y, 0]} castShadow receiveShadow>
          <boxGeometry args={[SEAT.size, SEAT.thickness, SEAT.size]} />
          <meshStandardMaterial color={PALETTE.chairPad} roughness={0.8} />
        </mesh>
        <mesh position={[0, SEAT.y + BACKREST.height / 2, SEAT.size / 2 - 0.03]} castShadow>
          <boxGeometry args={[BACKREST.width, BACKREST.height, BACKREST.thickness]} />
          <meshStandardMaterial color={PALETTE.chair} roughness={0.7} />
        </mesh>
        {[-1, 1].map((sx) =>
          [-1, 1].map((sz) => (
            <mesh
              key={`${sx}-${sz}`}
              position={[
                sx * (SEAT.size / 2 - 0.05),
                CHAIR_LEG.height / 2,
                sz * (SEAT.size / 2 - 0.05),
              ]}
              castShadow
            >
              <boxGeometry args={[CHAIR_LEG.size, CHAIR_LEG.height, CHAIR_LEG.size]} />
              <meshStandardMaterial color={PALETTE.chair} roughness={0.7} />
            </mesh>
          )),
        )}
      </group>
    </group>
  );
}
