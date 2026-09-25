import { SKILLS } from "../content/profile";
import Section from "./Section";

export default function Skills() {
  return (
    <Section id="skills" title="Skills">
      <div className="flex flex-wrap gap-2">
        {SKILLS.map((s) => (
          <span
            key={s}
            className="rounded-full border border-[var(--border)] bg-[var(--card)] px-3 py-1.5 text-sm text-[var(--text)]"
          >
            {s}
          </span>
        ))}
      </div>
    </Section>
  );
}
