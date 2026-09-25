import { EXPERIENCE } from "../content/profile";
import Section from "./Section";
import Reveal from "./Reveal";

export default function Experience() {
  return (
    <Section id="experience" title="Work Experience">
      <div className="flex flex-col gap-8">
        {EXPERIENCE.map((job, i) => (
          <Reveal key={job.org} delay={i * 0.08}>
            <div className="rounded-xl border border-[var(--border)] bg-[var(--card)] p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-[var(--accent-soft)]/40">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-semibold">{job.role}</h3>
                <span className="text-xs text-[var(--text-soft)]">{job.period}</span>
              </div>
              <p className="text-sm text-[var(--text-soft)]">
                {job.org} · {job.location}
              </p>
              <ul className="mt-3 flex flex-col gap-1.5">
                {job.bullets.map((b) => (
                  <li key={b} className="text-sm leading-relaxed text-[var(--text-soft)]">
                    • {b}
                  </li>
                ))}
              </ul>
              <div className="mt-4 flex flex-wrap gap-2">
                {job.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-[var(--accent-soft)] px-2.5 py-1 text-xs font-medium text-[var(--accent)]"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
