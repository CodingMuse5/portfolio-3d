import { PROFILE } from "../content/profile";
import Section from "./Section";

export default function About() {
  return (
    <Section id="about" title="About">
      <p className="max-w-2xl text-[var(--text-soft)] leading-relaxed">{PROFILE.intro}</p>
    </Section>
  );
}
