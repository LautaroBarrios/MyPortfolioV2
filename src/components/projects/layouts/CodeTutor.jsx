import { useRef } from "react";
import { picturesCT } from "../../../assets/pictures/projects/indexCT";
import { Arrow } from "../../../icons";

const CodeTutor = () => {
  const containerRef = useRef(null);

  const handleNext = () => {
    if (containerRef.current) {
      const width = containerRef.current.offsetWidth;
      containerRef.current.scrollBy({ left: width, behavior: "smooth" });
    }
  };

  const handlePrevious = () => {
    if (containerRef.current) {
      const width = containerRef.current.offsetWidth;
      containerRef.current.scrollBy({ left: -width, behavior: "smooth" });
    }
  };

  return (
    <section className="flex flex-col justify-center items-center h-[80%] w-full space-y-2 p-2 z-10">
      <div
        ref={containerRef}
        className="flex snap-x snap-mandatory h-auto w-full scroll-hidden"
      >
        {picturesCT.map((item, index) => (
          <img
            key={index}
            src={item}
            alt={`image-${index}`}
            className="h-full min-w-full snap-center object-contain"
          />
        ))}
      </div>

      <div className="flex flex-row space-x-2 justify-center items-center w-full p-2">
        <button
          type="button"
          onClick={handlePrevious}
          title="Anterior"
          className="md:flex hidden bg-[#8057d9] text-white active:scale-95 rounded py-2 px-6 transition-all"
        >
          <Arrow />
        </button>
        <a
          href="https://www.code-tutor.dev/"
          target="_blank"
          rel="noopener noreferrer"
          title="Ir a Code-Tutor"
          className="border border-[#8057d9] text-[#bea0ff] active:scale-95 rounded py-2 px-8 whitespace-nowrap transition-all"
        >
          Visitar Code-Tutor
        </a>
        <button
          type="button"
          onClick={handleNext}
          title="Siguiente"
          className="md:flex hidden bg-[#8057d9] text-white active:scale-95 rounded py-2 px-6 rotate-180 transition-all"
        >
          <Arrow />
        </button>
      </div>
      <div className="px-2 md:w-2/3 w-full">
        <p className="text-[#c9b0ff] text-center">
          Code-Tutor es una plataforma en línea orientada a genter de
          Latinoamérica que sirve para conectar usuarios con tutores para
          proyectos de programación de manera independiente. Ofrece una serie de
          herramientas integradas, desde los calendarios y control de agenda
          para el orden del tiempo personal hasta el chat para comunicarse
          directamente con el tutor, pasando por el control del tiempo de
          sesión, recordatorios de tiempo, uso de salas en plataformas conocidas
          y amplia disponibilidad de tutores en diferentes zonas horarias.
          Además, facilitamos la contratación de tutores de programación de
          forma independiente, brindando información detallada de los tutores en
          los perfiles, reviews y testimonios de otros usuarios.
        </p>
      </div>
    </section>
  );
};

export default CodeTutor;
