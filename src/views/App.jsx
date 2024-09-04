import { useRef, useState } from "react";
import { Home, NavBar, Projects, Technologies } from "../components";

function App() {
  let homeRef = useRef(null);
  let contactRef = useRef(null);
  let technologiesRef = useRef(null);
  let projectsRef = useRef(null);

   const [triggerContactBlink, setTriggerContactBlink] = useState(false);

    const handleContactClick = () => {
      setTriggerContactBlink(true);
      setTimeout(() => setTriggerContactBlink(false), 1500); // Resetear el trigger después de 1.5s
    };

  return (
    <section className="flex flex-col w-full items-center justify-start relative suseBold-font">
      <NavBar
        homeRef={homeRef}
        contactRef={contactRef}
        technologiesRef={technologiesRef}
        projectsRef={projectsRef}
        onContactClick={handleContactClick}
      />
      <section className="flex flex-col w-full h-screen">
        <div ref={homeRef}>
          <Home
            contactRef={contactRef}
            triggerContactBlink={triggerContactBlink}
          />
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
