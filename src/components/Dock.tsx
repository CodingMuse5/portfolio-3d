import { useEffect, useState } from "react";
import { FileText, Home, Moon, Sun } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";
import { PROFILE } from "../content/profile";
import { useTheme } from "../hooks/useTheme";

function DockButton({
  onClick,
  href,
  label,
  active = false,
  children,
}: {
  onClick?: () => void;
  href?: string;
  label: string;
  active?: boolean;
  children: React.ReactNode;
}) {
  const className = `group relative flex h-10 w-10 items-center justify-center rounded-full transition hover:bg-[var(--bg)] hover:text-[var(--text)] ${
    active ? "bg-[var(--accent-soft)] text-[var(--accent)]" : "text-[var(--text)]/70"
  }`;

  const tooltip = (
    <span className="pointer-events-none absolute bottom-full mb-2 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-[var(--text)] px-2 py-1 text-[11px] font-medium text-[var(--bg)] opacity-0 transition group-hover:opacity-100">
      {label}
    </span>
  );

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className={className}>
        {children}
        {tooltip}
      </a>
    );
  }

  return (
    <button onClick={onClick} aria-label={label} className={className}>
      {children}
      {tooltip}
    </button>
  );
}

export default function Dock() {
  const { theme, toggle } = useTheme();
  const [isHome, setIsHome] = useState(true);

  useEffect(() => {
    const homeEl = document.getElementById("home");
    if (!homeEl) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsHome(entry.isIntersecting),
      { rootMargin: "0px 0px -70% 0px" },
    );
    observer.observe(homeEl);
    return () => observer.disconnect();
  }, []);

  return (
    <nav className="fixed bottom-6 left-1/2 z-50 flex -translate-x-1/2 items-center gap-1 rounded-full border border-[var(--border)] bg-[var(--card)]/90 p-1.5 shadow-lg backdrop-blur">
      <DockButton
        label="Home"
        active={isHome}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <Home size={18} />
      </DockButton>
      <DockButton label="Resume" href={PROFILE.links.resume}>
        <FileText size={18} />
      </DockButton>
      <DockButton label="GitHub" href={PROFILE.links.github}>
        <GithubIcon size={18} />
      </DockButton>
      <DockButton label="LinkedIn" href={PROFILE.links.linkedin}>
        <LinkedinIcon size={18} />
      </DockButton>
      <div className="mx-1 h-5 w-px bg-[var(--border)]" />
      <DockButton label={theme === "light" ? "Dark mode" : "Light mode"} onClick={toggle}>
        {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
      </DockButton>
    </nav>
  );
}
