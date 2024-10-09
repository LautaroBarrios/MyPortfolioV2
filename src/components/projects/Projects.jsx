import { useState } from "react";
import DecorationWithoutAnimation from "../decoration/DecorationBackgroundComplete";
import { CodeTutor, GamesView, ImageEditor, Private } from "./layouts";

const Projects = () => {
  const [project, setProject] = useState(1);

  return (
    <section className="flex flex-col bg-[#072e33] w-full h-screen items-center justify-center relative">
      <DecorationWithoutAnimation />
      <div className="flex flex-wrap justify-center z-10">
        <button
          type="button"
          title="Mostrar"
          onClick={() => setProject(1)}
          className={`active:bg-[#8057d9] hover:bg-[#8057d9] text-white active:scale-95 rounded py-2 w-36 font-bold transition-all m-1 ${
            project === 1 ? "bg-[#8057d9]" : "bg-[#0c7075]"
          }`}
        >
          Code-Tutor
        </button>
        <button
          type="button"
          title="Mostrar"
          onClick={() => setProject(2)}
          className={`active:bg-[#ff5c82] hover:bg-[#ff5c82] text-white active:scale-95 rounded py-2 w-36 font-bold transition-all m-1 ${
            project === 2 ? "bg-[#ff5c82]" : "bg-[#0c7075]"
          }`}
        >
          Games View
        </button>
        <button
          type="button"
          title="Mostrar"
          onClick={() => setProject(3)}
          className={`active:bg-[#05161a] hover:bg-[#05161a] text-white active:scale-95 rounded py-2 w-36 font-bold transition-all m-1 ${
            project === 3 ? "bg-[#05161a]" : "bg-[#0c7075]"
          }`}
        >
          Image Editor
        </button>
        <button
          type="button"
          title="Mostrar"
          onClick={() => setProject(4)}
          className={`active:bg-[#05161a] hover:bg-[#05161a] text-white active:scale-95 rounded py-2 w-36 font-bold transition-all m-1 ${
            project === 4 ? "bg-[#05161a]" : "bg-[#0c7075]"
          }`}
        >
          Privados
        </button>
      </div>

      {project === 1 && <CodeTutor />}
      {project === 2 && <GamesView />}
      {project === 3 && <ImageEditor />}
      {project === 4 && <Private />}
      {/* {project === 4 && <ImageEditor />} */}
    </section>
  );
};

export default Projects;
