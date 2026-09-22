import { useEffect, useRef } from "react";
import { scrollState, trapezoid } from "../three/scrollStore";
import { PROFILE } from "../content/profile";
import "./HeroOverlay.css";

// Visible while the camera is roughly centered; fades out as it swings
// toward either side panel.
export default function HeroOverlay() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let raf: number;
    const tick = () => {
      if (ref.current) {
        const opacity = trapezoid(scrollState.current, 0.28, 0.4, 0.6, 0.72);
        ref.current.style.opacity = String(opacity);
        ref.current.style.pointerEvents = opacity > 0.4 ? "auto" : "none";
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <div ref={ref} className="hero-overlay">
      <h1>{PROFILE.name}</h1>
      <p>{PROFILE.tagline}</p>
    </div>
  );
}
