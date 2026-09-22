import { useEffect } from "react";
import Experience from "./three/Experience";
import ScrollIndicator from "./components/ScrollIndicator";
import { initScrollListeners } from "./three/scrollStore";
import "./App.css";

function App() {
  useEffect(() => initScrollListeners(), []);

  return (
    <div className="app-stage">
      <Experience />
      <ScrollIndicator />
    </div>
  );
}

export default App;
