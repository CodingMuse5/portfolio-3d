// Central place to tune the room's dimensions so the camera rig, walls and
// furniture all agree on the same coordinate space.
// 1 unit = 1 metre, so furniture and eye-height read as human-scale.
export const ROOM = {
  width: 16, // x-axis — one long wall with three furniture zones along it
  depth: 5.5, // z-axis
  height: 2.8, // y-axis (standard ceiling height)
};

// The camera never rotates — it dollies sideways in front of the wall,
// always facing straight into it, so the wall fills the frame edge to
// edge instead of swinging around to reveal the room's corners.
export const DOLLY = {
  travel: ROOM.width / 2 - 3.2, // how far the camera can slide left/right
  distance: 3.0, // camera-to-wall distance
  eyeHeight: 1.5,
  lookY: 1.05, // slight downward tilt, toward desk/seat height
};

export const ZONE_X = {
  left: -DOLLY.travel,
  center: 0,
  right: DOLLY.travel,
};
