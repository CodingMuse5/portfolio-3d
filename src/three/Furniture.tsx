import { ROOM, ZONE_X } from "./roomConfig";

const PALETTE = {
  deskTop: "#f0ebe0",
  deskLeg: "#e6e0d2",
  chair: "#2b2733",
  chairPad: "#e8ded0",
  laptop: "#2b2b33",
  screen: "#bcd6ff",
  plantPot: "#c96a4f",
  plantLeaf: "#5a8f5f",
  book1: "#c96a4f",
  book2: "#e0c88f",
  book3: "#5f7fa0",
  shelfUnit: "#f2eee5",
  binder1: "#2e2a3d",
  binder2: "#8a3b3b",
  binder3: "#2f4d63",
  binder4: "#6b5a3f",
  binder5: "#3d3450",
  sofa: "#9682c2",
  sofaDark: "#6d5698",
  sofaCushion: "#f0e8f5",
  sofaCushionPink: "#e9b8c9",
  table: "#3d3454",
  tableTop: "#dcd6ec",
};

const wallZ = -ROOM.depth / 2;

const DESK = { width: 2.0, thickness: 0.06, depth: 0.9, topY: 0.75 };
const LEG = { size: 0.045, height: 0.72 };
const SEAT = { size: 0.5, thickness: 0.06, y: 0.46 };
const BACKREST = { width: 0.5, height: 0.55, thickness: 0.06 };
const CHAIR_LEG = { size: 0.05, height: 0.46 };
const LAPTOP = { width: 0.48, baseThickness: 0.02, baseDepth: 0.32, screenHeight: 0.3 };
const MONITOR = { width: 0.5, height: 0.32, thickness: 0.02 };

function DeskZone() {
  const deskX = ZONE_X.center + 0.9;
  const deskZ = wallZ + 1.7;
  const chairZ = deskZ + 0.72;

  const legOffsetX = DESK.width / 2 - 0.1;
  const legOffsetZ = DESK.depth / 2 - 0.1;

  return (
    <group>
      <group position={[deskX, 0, deskZ]}>
        <mesh position={[0, DESK.topY, 0]} castShadow receiveShadow>
          <boxGeometry args={[DESK.width, DESK.thickness, DESK.depth]} />
          <meshStandardMaterial color={PALETTE.deskTop} roughness={0.5} />
        </mesh>
        {[-1, 1].map((sx) =>
          [-1, 1].map((sz) => (
            <mesh
              key={`${sx}-${sz}`}
              position={[sx * legOffsetX, LEG.height / 2, sz * legOffsetZ]}
              rotation={[sz * 0.1, 0, -sx * 0.1]}
              castShadow
            >
              <boxGeometry args={[LEG.size, LEG.height, LEG.size]} />
              <meshStandardMaterial color={PALETTE.deskLeg} roughness={0.5} metalness={0.2} />
            </mesh>
          )),
        )}

        {/* Small shelf above the desk, with a plant and books */}
        <group position={[-0.35, 1.3, -0.35]}>
          <mesh castShadow receiveShadow>
            <boxGeometry args={[0.9, 0.035, 0.18]} />
            <meshStandardMaterial color={PALETTE.shelfUnit} roughness={0.5} />
          </mesh>
          <mesh position={[-0.32, 0.1, 0]} castShadow>
            <boxGeometry args={[0.1, 0.11, 0.1]} />
            <meshStandardMaterial color={PALETTE.plantPot} roughness={0.8} />
          </mesh>
          <mesh position={[-0.32, 0.2, 0]} castShadow>
            <coneGeometry args={[0.09, 0.2, 8]} />
            <meshStandardMaterial color={PALETTE.plantLeaf} roughness={0.8} />
          </mesh>
          {[
            { dx: 0.05, w: 0.05, h: 0.22, color: PALETTE.book1 },
            { dx: 0.11, w: 0.05, h: 0.19, color: PALETTE.book2 },
            { dx: 0.17, w: 0.05, h: 0.24, color: PALETTE.book3 },
          ].map((b) => (
            <mesh key={b.dx} position={[b.dx, 0.02 + b.h / 2, 0]} castShadow>
              <boxGeometry args={[b.w, b.h, 0.14]} />
              <meshStandardMaterial color={b.color} roughness={0.7} />
            </mesh>
          ))}
        </group>

        {/* Monitor, back-left of the desk */}
        <group position={[-0.5, DESK.topY + DESK.thickness / 2, -0.15]}>
          <mesh position={[0, 0.06, 0]} castShadow>
            <boxGeometry args={[0.08, 0.12, 0.08]} />
            <meshStandardMaterial color={PALETTE.laptop} roughness={0.6} />
          </mesh>
          <mesh position={[0, 0.12 + MONITOR.height / 2, 0]} castShadow>
            <boxGeometry args={[MONITOR.width, MONITOR.height, MONITOR.thickness]} />
            <meshStandardMaterial color={PALETTE.laptop} roughness={0.4} metalness={0.3} />
          </mesh>
          <mesh position={[0, 0.12 + MONITOR.height / 2, 0.012]}>
            <planeGeometry args={[MONITOR.width * 0.9, MONITOR.height * 0.85]} />
            <meshStandardMaterial
              color={PALETTE.screen}
              emissive={PALETTE.screen}
              emissiveIntensity={0.5}
              toneMapped={false}
            />
          </mesh>
        </group>

        {/* Laptop, front-right of the desk */}
        <group position={[0.45, DESK.topY + DESK.thickness / 2, 0.05]}>
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
          <meshStandardMaterial color={PALETTE.chair} roughness={0.6} />
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
              <meshStandardMaterial color={PALETTE.chair} roughness={0.6} />
            </mesh>
          )),
        )}
      </group>
    </group>
  );
}

const ART_PIECES = [
  { dx: -0.85, dy: 0.55, w: 0.5, h: 0.64, rot: -0.08, color: "#8fb4d9" },
  { dx: -0.25, dy: 0.68, w: 0.4, h: 0.5, rot: 0.05, color: "#e8dfc8" },
  { dx: 0.3, dy: 0.5, w: 0.54, h: 0.4, rot: -0.04, color: "#c9a0a8" },
  { dx: 0.85, dy: 0.62, w: 0.36, h: 0.5, rot: 0.09, color: "#a8c9a0" },
];

const SHELF_UNIT = { width: 1.3, height: 1.35, depth: 0.35, boardThickness: 0.035 };

const BINDER_ROWS = [
  [
    { w: 0.16, h: 0.3, color: PALETTE.binder1 },
    { w: 0.14, h: 0.32, color: PALETTE.binder2 },
    { w: 0.18, h: 0.28, color: PALETTE.binder3 },
    { w: 0.15, h: 0.3, color: PALETTE.binder4 },
  ],
  [
    { w: 0.2, h: 0.28, color: PALETTE.binder5 },
    { w: 0.16, h: 0.3, color: PALETTE.binder3 },
    { w: 0.17, h: 0.26, color: PALETTE.binder2 },
  ],
  [
    { w: 0.15, h: 0.3, color: PALETTE.binder4 },
    { w: 0.19, h: 0.28, color: PALETTE.binder1 },
    { w: 0.14, h: 0.32, color: PALETTE.binder5 },
    { w: 0.16, h: 0.27, color: PALETTE.binder3 },
  ],
];

function ArtWallZone() {
  const x = ZONE_X.left;
  const artBaseY = 1.7;
  const unitZ = wallZ + SHELF_UNIT.depth / 2 + 0.05;
  const compartmentH = (SHELF_UNIT.height - SHELF_UNIT.boardThickness * 4) / 3;

  return (
    <group position={[x, 0, 0]}>
      {ART_PIECES.map((a) => (
        <mesh key={a.dx} position={[a.dx, artBaseY + a.dy, wallZ + 0.11]} rotation={[0, 0, a.rot]}>
          <planeGeometry args={[a.w, a.h]} />
          <meshStandardMaterial color={a.color} roughness={0.9} />
        </mesh>
      ))}

      {/* Floor-standing shelving unit */}
      <group position={[0, 0, unitZ]}>
        {/* side panels */}
        {[-1, 1].map((s) => (
          <mesh
            key={s}
            position={[s * (SHELF_UNIT.width / 2 - 0.015), SHELF_UNIT.height / 2, 0]}
            castShadow
            receiveShadow
          >
            <boxGeometry args={[0.03, SHELF_UNIT.height, SHELF_UNIT.depth]} />
            <meshStandardMaterial color={PALETTE.shelfUnit} roughness={0.5} />
          </mesh>
        ))}
        {/* shelf boards (bottom, 2 dividers, top) */}
        {[0, 1, 2, 3].map((i) => (
          <mesh
            key={i}
            position={[0, i * (compartmentH + SHELF_UNIT.boardThickness), 0]}
            castShadow
            receiveShadow
          >
            <boxGeometry args={[SHELF_UNIT.width, SHELF_UNIT.boardThickness, SHELF_UNIT.depth]} />
            <meshStandardMaterial color={PALETTE.shelfUnit} roughness={0.5} />
          </mesh>
        ))}
        {/* binders sitting on each shelf level */}
        {BINDER_ROWS.map((row, rowIndex) => {
          const rowY = rowIndex * (compartmentH + SHELF_UNIT.boardThickness) + SHELF_UNIT.boardThickness / 2;
          const totalW = row.reduce((s, b) => s + b.w, 0) + (row.length - 1) * 0.03;
          let cursor = -totalW / 2;
          return row.map((b) => {
            const cx = cursor + b.w / 2;
            cursor += b.w + 0.03;
            return (
              <mesh key={cx} position={[cx, rowY + b.h / 2, 0]} castShadow>
                <boxGeometry args={[b.w, b.h, 0.26]} />
                <meshStandardMaterial color={b.color} roughness={0.6} />
              </mesh>
            );
          });
        })}
      </group>
    </group>
  );
}

const SOFA = { width: 1.9, depth: 0.8, seatHeight: 0.38, backHeight: 0.5, armHeight: 0.5, armWidth: 0.18 };
const TABLE = { width: 0.85, depth: 0.45, height: 0.32 };

function SofaZone() {
  const x = ZONE_X.right;
  const z = wallZ + 1.5;

  return (
    <group position={[x, 0, z]}>
      {/* Seat base */}
      <mesh position={[0, SOFA.seatHeight / 2, 0]} castShadow receiveShadow>
        <boxGeometry args={[SOFA.width, SOFA.seatHeight, SOFA.depth]} />
        <meshStandardMaterial color={PALETTE.sofa} roughness={0.85} />
      </mesh>
      {/* Backrest */}
      <mesh
        position={[0, SOFA.seatHeight + SOFA.backHeight / 2, -SOFA.depth / 2 + 0.1]}
        castShadow
      >
        <boxGeometry args={[SOFA.width, SOFA.backHeight, 0.2]} />
        <meshStandardMaterial color={PALETTE.sofaDark} roughness={0.85} />
      </mesh>
      {/* Armrests */}
      {[-1, 1].map((s) => (
        <mesh
          key={s}
          position={[s * (SOFA.width / 2 - SOFA.armWidth / 2), SOFA.armHeight / 2, 0]}
          castShadow
        >
          <boxGeometry args={[SOFA.armWidth, SOFA.armHeight, SOFA.depth]} />
          <meshStandardMaterial color={PALETTE.sofaDark} roughness={0.85} />
        </mesh>
      ))}
      {/* Cushions */}
      <mesh position={[-0.5, SOFA.seatHeight + 0.08, 0.02]} castShadow>
        <boxGeometry args={[0.55, 0.16, 0.5]} />
        <meshStandardMaterial color={PALETTE.sofaCushion} roughness={0.9} />
      </mesh>
      <mesh position={[0.5, SOFA.seatHeight + 0.08, 0.02]} castShadow>
        <boxGeometry args={[0.55, 0.16, 0.5]} />
        <meshStandardMaterial color={PALETTE.sofaCushionPink} roughness={0.9} />
      </mesh>

      {/* Coffee table */}
      <group position={[0, 0, SOFA.depth / 2 + 0.55]}>
        <mesh position={[0, TABLE.height - 0.03, 0]} castShadow receiveShadow>
          <boxGeometry args={[TABLE.width, 0.06, TABLE.depth]} />
          <meshStandardMaterial
            color={PALETTE.tableTop}
            roughness={0.15}
            metalness={0.1}
            transparent
            opacity={0.75}
          />
        </mesh>
        {[-1, 1].map((sx) =>
          [-1, 1].map((sz) => (
            <mesh
              key={`${sx}-${sz}`}
              position={[
                sx * (TABLE.width / 2 - 0.05),
                (TABLE.height - 0.06) / 2,
                sz * (TABLE.depth / 2 - 0.05),
              ]}
              castShadow
            >
              <boxGeometry args={[0.04, TABLE.height - 0.06, 0.04]} />
              <meshStandardMaterial color={PALETTE.table} roughness={0.5} />
            </mesh>
          )),
        )}
      </group>
    </group>
  );
}

export default function Furniture() {
  return (
    <group>
      <ArtWallZone />
      <DeskZone />
      <SofaZone />
    </group>
  );
}
