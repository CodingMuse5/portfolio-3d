// Central place to tune the room's dimensions so the camera rig, walls and
// (future) section anchors all agree on the same coordinate space.
export const ROOM = {
  width: 14, // x-axis
  depth: 10, // z-axis
  height: 6.5, // y-axis
};

// The camera doesn't slide sideways — it swings on an arc around a pivot
// near the room's center, like turning your head to look around a corner.
export const ORBIT = {
  pivot: { x: 0, y: ROOM.height * 0.42, z: -ROOM.depth * 0.12 },
  radius: 8.5,
  eyeHeight: ROOM.height * 0.5,
  maxAngle: (34 * Math.PI) / 180, // swing this far left/right of center
};
