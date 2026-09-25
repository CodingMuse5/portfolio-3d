import { PROJECTS } from "../content/profile";
import Section from "./Section";

export default function Projects() {
  return (
    <Section id="projects" title="Projects" subtitle="A few things I've built">
      <div className="grid gap-5 sm:grid-cols-2">
        {PROJECTS.map((p) => (
          <div key={p.name} className="rounded-xl border border-[var(--border)] bg-[var(--card)] p-5">
            <div className="flex items-baseline justify-between">
              <h3 className="font-semibold">{p.name}</h3>
              <span className="text-xs text-[var(--text-soft)]">{p.year}</span>
            </div>
            <p className="mt-2 text-sm leading-relaxed text-[var(--text-soft)]">{p.description}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <span
                  key={t}
                  className="rounded-full bg-[var(--bg-soft)] px-2.5 py-1 text-xs font-medium text-[var(--text-soft)]"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
