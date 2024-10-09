import { useRef } from "react";
import { picturesGV } from "../../../assets/pictures/projects/indexGV";
import { Arrow } from "../../../icons";

const GamesView = () => {
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
        {picturesGV.map((item, index) => (
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
          className="md:flex hidden bg-[#ff5c82] text-white outline-none active:scale-95 rounded py-2 px-6 transition-all"
        >
          <Arrow />
        </button>
        <a
          href="https://github.com/LautaroBarrios/GamesView"
          target="_blank"
          rel="noopener noreferrer"
          title="Ir a Code-Tutor"
          className="border border-[#ff5c82] text-[#ff5c82] rounded py-2 px-8 active:scale-95 whitespace-nowrap transition-all"
        >
          Visitar repositorio Games View
        </a>
        <button
          type="button"
          onClick={handleNext}
          title="Siguiente"
          className="md:flex hidden bg-[#ff5c82] text-white outline-none active:scale-95 rounded py-2 px-6 rotate-180 transition-all"
        >
          <Arrow />
        </button>
      </div>
      <div className="px-2 md:w-2/3 w-full">
        <p className="text-[#ff5c82] text-center">
          GamesView es una plataforma con un diseño basado en las famosas
          Arcades, donde podes consultar datos de tus juegos favoritos,
          descubrir nuevos, agregar nuevos, aplicar múltiples filtros para
          ordenamiento y búsqueda de acuerdo a tus intereses.
        </p>
      </div>
    </section>
  );
};

export default GamesView;
