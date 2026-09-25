import { ACHIEVEMENTS, EDUCATION } from "../content/profile";
import Section from "./Section";

export default function Education() {
  return (
    <Section id="education" title="Education">
      <div className="rounded-xl border border-[var(--border)] bg-[var(--card)] p-5">
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <h3 className="font-semibold">{EDUCATION.school}</h3>
          <span className="text-xs text-[var(--text-soft)]">{EDUCATION.period}</span>
        </div>
        <p className="text-sm text-[var(--text-soft)]">{EDUCATION.degree}</p>
        <p className="mt-1 text-sm text-[var(--text-soft)]">{EDUCATION.detail}</p>
      </div>

      <ul className="mt-4 flex flex-col gap-1.5">
        {ACHIEVEMENTS.map((a) => (
          <li key={a} className="text-sm leading-relaxed text-[var(--text-soft)]">
            • {a}
          </li>
        ))}
      </ul>
    </Section>
  );
}
