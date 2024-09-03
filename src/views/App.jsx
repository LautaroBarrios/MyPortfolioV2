import { useRef } from "react";
import { Home, NavBar, Projects, Technologies } from "../components";

function App() {
  const homeRef = useRef(null);
  const contactRef = useRef(null);
  const technologiesRef = useRef(null);
  const projectsRef = useRef(null);

  return (
    <section className="flex flex-col w-full items-center justify-start relative suseBold-font">
      <NavBar
        homeRef={homeRef}
        contactRef={contactRef}
        technologiesRef={technologiesRef}
        projectsRef={projectsRef}
      />
      <section className="flex flex-col w-full h-screen overflow-y-scroll">
        <div ref={homeRef}>
          <Home contactRef={contactRef} />
        </div>
        <div ref={technologiesRef}>
          <Technologies />
        </div>
        <div ref={projectsRef}>
          <Projects />
        </div>
      </section>
    </section>
  );
}

export default App;
