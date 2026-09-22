import { useEffect, useRef } from "react";
import { scrollState } from "../three/scrollStore";
import "./ScrollIndicator.css";

// Reads the scroll store directly on a rAF loop and writes to the DOM
// imperatively — avoids piping per-frame scroll state through React state.
export default function ScrollIndicator() {
  const trackRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const leftHintRef = useRef<HTMLDivElement>(null);
  const rightHintRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let raf: number;
    const tick = () => {
      const p = scrollState.current;
      if (dotRef.current) {
        dotRef.current.style.left = `${p * 100}%`;
      }
      if (leftHintRef.current) {
        leftHintRef.current.style.opacity = String(Math.max(0, 1 - p * 6));
      }
      if (rightHintRef.current) {
        rightHintRef.current.style.opacity = String(Math.max(0, 1 - (1 - p) * 6));
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <div className="scroll-ui">
      <div ref={leftHintRef} className="scroll-hint scroll-hint--left">
        <span>&larr;</span>
        <p>scroll</p>
      </div>
      <div ref={rightHintRef} className="scroll-hint scroll-hint--right">
        <p>scroll</p>
        <span>&rarr;</span>
      </div>
      <div ref={trackRef} className="scroll-track">
        <div ref={dotRef} className="scroll-dot" />
      </div>
    </div>
  );
}
