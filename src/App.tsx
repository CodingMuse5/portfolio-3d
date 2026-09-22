import { useEffect } from "react";
import Experience from "./three/Experience";
import ScrollIndicator from "./components/ScrollIndicator";
import HeroOverlay from "./components/HeroOverlay";
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
      <HeroOverlay />
      <ExperiencePanel />
      <ProjectsPanel />
      <ScrollIndicator />
      <Dock />
    </div>
  );
}

export default App;
