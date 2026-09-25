import { useEffect, useState } from "react";
import { Star, Users, GitFork, FolderGit2 } from "lucide-react";

const GITHUB_USERNAME = "CodingMuse5";

type Stats = {
  publicRepos: number;
  followers: number;
  totalStars: number;
  totalForks: number;
};

function StatTile({ icon, label, value }: { icon: React.ReactNode; label: string; value: number }) {
  return (
    <div className="flex flex-col items-start gap-1 rounded-lg bg-[var(--bg-soft)] px-4 py-3">
      <div className="flex items-center gap-1.5 text-[var(--accent)]">{icon}</div>
      <span className="text-2xl font-semibold tracking-tight">{value}</span>
      <span className="text-xs text-[var(--text-soft)]">{label}</span>
    </div>
  );
}

export default function GithubStatsCard() {
  const [stats, setStats] = useState<Stats | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      try {
        const userRes = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}`);
        if (!userRes.ok) throw new Error("user fetch failed");
        const user = await userRes.json();

        const reposRes = await fetch(
          `https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100`,
        );
        if (!reposRes.ok) throw new Error("repos fetch failed");
        const repos: { stargazers_count: number; forks_count: number }[] = await reposRes.json();

        const totalStars = repos.reduce((sum, r) => sum + r.stargazers_count, 0);
        const totalForks = repos.reduce((sum, r) => sum + r.forks_count, 0);

        if (!cancelled) {
          setStats({
            publicRepos: user.public_repos,
            followers: user.followers,
            totalStars,
            totalForks,
          });
        }
      } catch {
        if (!cancelled) setError(true);
      }
    }

    load();
    return () => {
      cancelled = true;
    };
  }, []);

  if (error) {
    return (
      <p className="p-5 text-sm text-[var(--text-soft)]">
        Couldn't load GitHub stats right now — check back later.
      </p>
    );
  }

  if (!stats) {
    return <div className="h-[168px] animate-pulse rounded-xl bg-[var(--bg-soft)]" />;
  }

  return (
    <div className="p-5">
      <h3 className="mb-4 font-semibold">GitHub Activity</h3>
      <div className="grid grid-cols-2 gap-3">
        <StatTile icon={<FolderGit2 size={16} />} label="Public Repos" value={stats.publicRepos} />
        <StatTile icon={<Users size={16} />} label="Followers" value={stats.followers} />
        <StatTile icon={<Star size={16} />} label="Total Stars" value={stats.totalStars} />
        <StatTile icon={<GitFork size={16} />} label="Total Forks" value={stats.totalForks} />
      </div>
    </div>
  );
}
