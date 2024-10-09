const ImageEditor = () => {
  return (
    <section className="flex flex-col justify-center items-center h-[80%] w-full space-y-2 p-2 z-10">
      <iframe
        id="Editor"
        width="50%"
        height="80%"
        className="rounded z-10"
        src="https://image-editor-three-wine.vercel.app/"
      />
      <div className="flex flex-row space-x-2 justify-center items-center w-full p-2">
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          title="Ir a Code-Tutor"
          className="border border-[#e3feff] text-[#e3feff] rounded py-2 px-8 active:scale-95 whitespace-nowrap transition-all"
        >
          Visitar repositorio Image Editor
        </a>
      </div>
      <div className="p-2 md:w-2/3 w-full">
        <p className="text-[#ffffff] text-center">
          Este diseñador sirve para base de otros proyectos. Tiene algunos
          elementos similares a canvas, permitiendo la manipulación de imágenes,
          pudiendo ingresar un fondo, agregar elementos los cuales pueden ser
          cambiados en tamaño, moverse por todo el contenedor, duplicarlos,
          fijarlos, eliminarlos, agregar textos con tipografías distintas y
          colores, además de poder aplicar las mismas características que los
          elementos. Y pudiendo finalmente descargar el contenidocreado en una
          captura en formato png.
        </p>
      </div>
    </section>
  );
};

export default ImageEditor;
