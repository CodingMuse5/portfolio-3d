import { ACHIEVEMENTS, EDUCATION } from "../content/profile";
import Section from "./Section";
import Reveal from "./Reveal";
import TiltCard from "./TiltCard";

export default function Education() {
  return (
    <Section id="education" title="Education">
      <Reveal>
        <TiltCard className="rounded-xl border border-[var(--border)] bg-[var(--card)] p-5 transition-shadow duration-300 hover:shadow-lg hover:shadow-[var(--accent-soft)]/40">
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <h3 className="font-semibold">{EDUCATION.school}</h3>
            <span className="text-xs text-[var(--text-soft)]">{EDUCATION.period}</span>
          </div>
          <p className="text-sm text-[var(--text-soft)]">{EDUCATION.degree}</p>
          <p className="mt-1 text-sm text-[var(--text-soft)]">{EDUCATION.detail}</p>
        </TiltCard>
      </Reveal>

      <Reveal delay={0.08}>
        <ul className="mt-4 flex flex-col gap-1.5">
          {ACHIEVEMENTS.map((a) => (
            <li key={a} className="text-sm leading-relaxed text-[var(--text-soft)]">
              • {a}
            </li>
          ))}
        </ul>
      </Reveal>
    </Section>
  );
}
