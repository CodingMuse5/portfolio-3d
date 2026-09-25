import { PROFILE } from "../content/profile";
import Section from "./Section";
import Reveal from "./Reveal";

export default function About() {
  return (
    <Section id="about" title="About">
      <Reveal>
        <p className="max-w-2xl text-[var(--text-soft)] leading-relaxed">{PROFILE.intro}</p>
      </Reveal>
    </Section>
  );
}
