// Central place to tune the room's dimensions so the camera rig, walls and
// (future) section anchors all agree on the same coordinate space.
export const ROOM = {
  width: 24, // x-axis: how far the camera can travel left/right
  depth: 7, // z-axis
  height: 6.5, // y-axis
};

export const CAMERA_TRAVEL = ROOM.width / 2 - 3; // keep camera clear of end walls
