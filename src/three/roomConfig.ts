// Central place to tune the room's dimensions so the camera rig, walls and
// (future) section anchors all agree on the same coordinate space.
// 1 unit = 1 metre, so furniture and eye-height read as human-scale
// instead of a scaled-down diorama.
export const ROOM = {
  width: 9, // x-axis
  depth: 5, // z-axis
  height: 2.8, // y-axis (standard ceiling height)
};

// The camera doesn't slide sideways — it swings on an arc around a pivot
// near the room's center, like turning your head to look around a corner.
export const ORBIT = {
  pivot: { x: 0, y: 1.3, z: -ROOM.depth * 0.12 },
  radius: 5,
  eyeHeight: 1.55, // roughly human eye level, not floating above the ceiling
  maxAngle: (32 * Math.PI) / 180, // swing this far left/right of center
};
