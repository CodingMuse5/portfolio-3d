import { PROFILE } from "../content/profile";
import { useTheme } from "../hooks/useTheme";
import Section from "./Section";
import Reveal from "./Reveal";
import TiltCard from "./TiltCard";
import GithubStatsCard from "./GithubStatsCard";

const LEETCODE_USERNAME = "CodingGirl05";

export default function Stats() {
  const { theme } = useTheme();

  const leetcodeCardSrc = `https://leetcard.jacoblin.cool/${LEETCODE_USERNAME}?theme=${theme}&font=Manrope&extension=activity`;

  return (
    <Section id="stats" title="Stats" subtitle="GitHub activity and LeetCode progress">
      <div className="grid gap-5 lg:grid-cols-2">
        <Reveal>
          <TiltCard className="h-full rounded-xl border border-[var(--border)] bg-[var(--card)] transition-shadow duration-300 hover:shadow-lg hover:shadow-[var(--accent-soft)]/40">
            <GithubStatsCard />
          </TiltCard>
        </Reveal>
        <Reveal delay={0.08}>
          <TiltCard className="overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--card)] p-2 transition-shadow duration-300 hover:shadow-lg hover:shadow-[var(--accent-soft)]/40">
            <img
              src={leetcodeCardSrc}
              alt={`${PROFILE.name}'s LeetCode stats`}
              className="w-full"
              loading="lazy"
            />
          </TiltCard>
        </Reveal>
      </div>
    </Section>
  );
}
