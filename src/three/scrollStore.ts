// Plain mutable store (no React state) so R3F's render loop and DOM overlays
// can read scroll progress every frame without triggering React re-renders.
export const scrollState = {
  target: 0,
  current: 0,
};

const CLAMP_MIN = 0;
const CLAMP_MAX = 1;

// How much one wheel/drag "unit" moves progress. Tuned by feel, not physics.
const WHEEL_SENSITIVITY = 0.0009;
const TOUCH_SENSITIVITY = 0.0022;
const KEY_STEP = 0.12;

function clamp(v: number) {
  return Math.min(CLAMP_MAX, Math.max(CLAMP_MIN, v));
}

// Trapezoid fade: 0 below a, ramps to 1 between a-b, holds at 1 through b-c,
// ramps back to 0 between c-d. Used to fade HTML overlays in/out as the
// camera swings past their angle range.
export function trapezoid(p: number, a: number, b: number, c: number, d: number) {
  if (p <= a || p >= d) return 0;
  if (p < b) return (p - a) / (b - a);
  if (p > c) return 1 - (p - c) / (d - c);
  return 1;
}

export function initScrollListeners() {
  let touchStartX = 0;
  let touchActive = false;

  const onWheel = (e: WheelEvent) => {
    e.preventDefault();
    // Trackpads send horizontal deltas naturally (deltaX); mouse wheels send
    // vertical deltas (deltaY). Support both so scrolling "down" also pans.
    const delta = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
    scrollState.target = clamp(scrollState.target + delta * WHEEL_SENSITIVITY);
  };

  const onTouchStart = (e: TouchEvent) => {
    touchActive = true;
    touchStartX = e.touches[0].clientX;
  };

  const onTouchMove = (e: TouchEvent) => {
    if (!touchActive) return;
    const x = e.touches[0].clientX;
    const delta = touchStartX - x;
    touchStartX = x;
    scrollState.target = clamp(scrollState.target + delta * TOUCH_SENSITIVITY);
  };

  const onTouchEnd = () => {
    touchActive = false;
  };

  const onKeyDown = (e: KeyboardEvent) => {
    if (e.key === "ArrowRight" || e.key === "d") {
      scrollState.target = clamp(scrollState.target + KEY_STEP);
    } else if (e.key === "ArrowLeft" || e.key === "a") {
      scrollState.target = clamp(scrollState.target - KEY_STEP);
    }
  };

  window.addEventListener("wheel", onWheel, { passive: false });
  window.addEventListener("touchstart", onTouchStart, { passive: true });
  window.addEventListener("touchmove", onTouchMove, { passive: true });
  window.addEventListener("touchend", onTouchEnd, { passive: true });
  window.addEventListener("keydown", onKeyDown);

  return () => {
    window.removeEventListener("wheel", onWheel);
    window.removeEventListener("touchstart", onTouchStart);
    window.removeEventListener("touchmove", onTouchMove);
    window.removeEventListener("touchend", onTouchEnd);
    window.removeEventListener("keydown", onKeyDown);
  };
}
