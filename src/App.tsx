import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Stats from "./components/Stats";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Dock from "./components/Dock";

function App() {
  return (
    <div className="min-h-screen pb-28">
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Stats />
      <Education />
      <Contact />
      <Dock />
    </div>
  );
}

export default App;
