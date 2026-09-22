import { useEffect, useRef } from "react";
import { scrollState, trapezoid } from "../three/scrollStore";
import { PROJECTS, SKILLS } from "../content/profile";
import "./SidePanel.css";

// Visible while the camera swings toward the right (progress -> 1).
export default function ProjectsPanel() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let raf: number;
    const tick = () => {
      if (ref.current) {
        const opacity = trapezoid(scrollState.current, 0.62, 0.78, 1, 1.05);
        ref.current.style.opacity = String(opacity);
        ref.current.style.pointerEvents = opacity > 0.4 ? "auto" : "none";
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <div ref={ref} className="side-panel side-panel--right">
      <h2>Projects & Skills</h2>

      {PROJECTS.map((p) => (
        <div className="entry" key={p.name}>
          <h3>{p.name}</h3>
          <p className="stack">{p.stack}</p>
          <ul>
            {p.bullets.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
        </div>
      ))}

      <div className="entry">
        {Object.entries(SKILLS).map(([label, items]) => (
          <div className="skills-group" key={label}>
            <p className="skills-label">{label}</p>
            <div className="chips">
              {items.map((s) => (
                <span className="chip" key={s}>
                  {s}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
