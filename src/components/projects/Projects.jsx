import { useEffect } from "react";

const Projects = () => {
  useEffect(() => {
    const iframe = document.getElementById("Editor");

    const disableScroll = (e) => {
      // Evita que la página haga scroll mientras se interactúa en el iframe
      document.body.style.overflow = "hidden";
    };

    const enableScroll = (e) => {
      // Vuelve a habilitar el scroll de la página
      document.body.style.overflow = "";
    };

    // Añade los listeners para los eventos táctiles
    iframe.contentWindow?.addEventListener("touchstart", disableScroll);
    iframe.contentWindow?.addEventListener("touchend", enableScroll);

    // Cleanup: Remueve los event listeners cuando el componente se desmonte
    return () => {
      iframe.contentWindow?.removeEventListener("touchstart", disableScroll);
      iframe.contentWindow?.removeEventListener("touchend", enableScroll);
    };
  }, []);

  return (
    <section className="flex bg-[#072e33] w-full h-screen items-center justify-center">
      <iframe
        id="Editor"
        width="96%"
        height="90%"
        className="rounded"
        src="https://image-editor-three-wine.vercel.app/"
      ></iframe>
    </section>
  );
};

export default Projects;
