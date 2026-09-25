import { PROJECTS } from "../content/profile";
import Section from "./Section";
import Reveal from "./Reveal";
import TiltCard from "./TiltCard";
import { GithubIcon } from "./BrandIcons";

export default function Projects() {
  return (
    <Section id="projects" title="Projects" subtitle="A few things I've built">
      <div className="grid gap-5 sm:grid-cols-2">
        {PROJECTS.map((p, i) => (
          <Reveal key={p.name} delay={i * 0.08}>
            <TiltCard className="flex h-full flex-col rounded-xl border border-[var(--border)] bg-[var(--card)] p-5 transition-shadow duration-300 hover:shadow-lg hover:shadow-[var(--accent-soft)]/40">
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
              {p.link && (
                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex w-fit items-center gap-1.5 text-sm font-medium text-[var(--accent)] transition hover:opacity-80"
                >
                  <GithubIcon size={15} />
                  View on GitHub
                </a>
              )}
            </TiltCard>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
