import { useEffect, useRef } from "react";
import { scrollState, trapezoid } from "../three/scrollStore";
import { EDUCATION, EXPERIENCE } from "../content/profile";
import "./SidePanel.css";

// Visible while the camera swings toward the left (progress -> 0).
export default function ExperiencePanel() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let raf: number;
    const tick = () => {
      if (ref.current) {
        const opacity = trapezoid(scrollState.current, -0.05, 0, 0.22, 0.38);
        ref.current.style.opacity = String(opacity);
        ref.current.style.pointerEvents = opacity > 0.4 ? "auto" : "none";
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <div ref={ref} className="side-panel side-panel--left">
      <h2>Experience & Education</h2>

      {EXPERIENCE.map((job) => (
        <div className="entry" key={job.org}>
          <h3>{job.role}</h3>
          <p className="meta">
            {job.org} &middot; {job.location} &middot; {job.period}
          </p>
          <ul>
            {job.bullets.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
        </div>
      ))}

      <div className="entry">
        <h3>{EDUCATION.degree}</h3>
        <p className="meta">
          {EDUCATION.school} &middot; {EDUCATION.location} &middot; {EDUCATION.period}
        </p>
        <p className="meta">{EDUCATION.detail}</p>
      </div>
    </div>
  );
}
