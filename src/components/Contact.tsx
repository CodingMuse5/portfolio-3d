import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";
import { PROFILE } from "../content/profile";
import Section from "./Section";

export default function Contact() {
  return (
    <Section id="contact" title="Get in Touch">
      <p className="max-w-xl text-[var(--text-soft)] leading-relaxed">
        Have a role, a project, or just want to say hi? My inbox is open.
      </p>
      <div className="mt-5 flex flex-wrap gap-3">
        <a
          href={`mailto:${PROFILE.email}`}
          className="flex items-center gap-2 rounded-full bg-[var(--accent)] px-4 py-2 text-sm font-medium text-white transition hover:opacity-90"
        >
          <Mail size={16} />
          Email me
        </a>
        <a
          href={PROFILE.links.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 rounded-full border border-[var(--border)] px-4 py-2 text-sm font-medium transition hover:bg-[var(--bg-soft)]"
        >
          <GithubIcon size={16} />
          GitHub
        </a>
        <a
          href={PROFILE.links.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 rounded-full border border-[var(--border)] px-4 py-2 text-sm font-medium transition hover:bg-[var(--bg-soft)]"
        >
          <LinkedinIcon size={16} />
          LinkedIn
        </a>
      </div>
    </Section>
  );
}
