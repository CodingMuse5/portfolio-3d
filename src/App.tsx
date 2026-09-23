import { useEffect } from "react";
import Experience from "./three/Experience";
import ScrollIndicator from "./components/ScrollIndicator";
import ExperiencePanel from "./components/ExperiencePanel";
import ProjectsPanel from "./components/ProjectsPanel";
import Dock from "./components/Dock";
import { initScrollListeners } from "./three/scrollStore";
import "./App.css";

function App() {
  useEffect(() => initScrollListeners(), []);

  return (
    <div className="app-stage">
      <Experience />
      <ExperiencePanel />
      <ProjectsPanel />
      <ScrollIndicator />
      <Dock />
    </div>
  );
}

export default App;
