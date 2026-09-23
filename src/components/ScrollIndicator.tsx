import { useEffect, useRef } from "react";
import { Mouse } from "lucide-react";
import { scrollState } from "../three/scrollStore";
import "./ScrollIndicator.css";

// Fades out once the visitor has started scrolling, matching the
// reference's static "Scroll to Explore" hint.
export default function ScrollIndicator() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let raf: number;
    const tick = () => {
      if (ref.current) {
        const p = scrollState.current;
        const distanceFromStart = Math.abs(p - 0);
        ref.current.style.opacity = String(Math.max(0, 1 - distanceFromStart * 8));
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <div ref={ref} className="scroll-hint-ui">
      <Mouse size={20} />
      <span>Scroll to Explore</span>
    </div>
  );
}
