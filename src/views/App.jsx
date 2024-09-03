import { useRef, useState } from "react";
import { Home, NavBar, Projects, Technologies } from "../components";

function App() {
   const [triggerContactBlink, setTriggerContactBlink] = useState(false);

    const handleContactClick = () => {
      setTriggerContactBlink(true);
      setTimeout(() => setTriggerContactBlink(false), 1500); // Resetear el trigger después de 1.5s
    };

  return (
    <section className="flex flex-col w-full items-center justify-start relative suseBold-font">
      <NavBar onContactClick={handleContactClick} />
      <section className="flex flex-col w-full h-screen overflow-y-scroll">
        <div id="home">
          <Home triggerContactBlink={triggerContactBlink} />
        </div>
        <div id="technologies">
          <Technologies />
        </div>
        <div id="projects">
          <Projects />
        </div>
      </section>
    </section>
  );
}

export default App;
