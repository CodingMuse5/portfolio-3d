import { Briefcase, FileText, Home, Rocket, SquareCode } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";
import { scrollState } from "../three/scrollStore";
import { PROFILE } from "../content/profile";
import "./Dock.css";

function goTo(progress: number) {
  scrollState.target = progress;
}

export default function Dock() {
  return (
    <nav className="dock">
      <button className="dock-item" onClick={() => goTo(0.5)} aria-label="Home">
        <Home size={18} />
        <span className="dock-tooltip">Home</span>
      </button>

      <button className="dock-item" onClick={() => goTo(0)} aria-label="Experience & Education">
        <Briefcase size={18} />
        <span className="dock-tooltip">Experience</span>
      </button>

      <button className="dock-item" onClick={() => goTo(1)} aria-label="Projects & Skills">
        <Rocket size={18} />
        <span className="dock-tooltip">Projects</span>
      </button>

      <a
        className="dock-item"
        href={PROFILE.links.resume}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Resume"
      >
        <FileText size={18} />
        <span className="dock-tooltip">Resume</span>
      </a>

      <a
        className="dock-item"
        href={PROFILE.links.github}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
      >
        <GithubIcon size={18} />
        <span className="dock-tooltip">GitHub</span>
      </a>

      <a
        className="dock-item"
        href={PROFILE.links.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
      >
        <LinkedinIcon size={18} />
        <span className="dock-tooltip">LinkedIn</span>
      </a>

      <a
        className="dock-item"
        href={PROFILE.links.leetcode}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LeetCode"
      >
        <SquareCode size={18} />
        <span className="dock-tooltip">LeetCode</span>
      </a>
    </nav>
  );
}
