const Private = () => {
  return (
    <section className="flex flex-col justify-center items-center h-[80%] w-full space-y-2 p-2 z-10 text-center text-white">
      <h5 className="text-2xl font-bold text-red-50">IMPORTANTE</h5>
      <p className="text-xl font-bold border-b pb-4 mx-4">
        Debido a que los siguientes proyectos manejan información
        delicada/privada no hay links de acceso disponibles para el público.
      </p>
      <ol className="pt-4 px-2 lg:w-2/3 w-5/6 space-y-2 lg:h-auto h-48 lg:overflow-visible overflow-auto">
        <li>
          <p className="text-[#6ed1d6] text-lg">
            Sistema de gestión de empleados y contratos - Municipalidad de la
            Calera, Córdoba, Argentina (2022).
          </p>
          <p className="text-gray-300">
            Desarrollé el backend para la creación, edición y manejo de datos de
            empleados de manera segura, haciendo uso de estos para generar
            contratos y permitir la descarga automáticamente de manera óptima,
            eficaz y rápida. También elaboré la base de datos y realice la
            migración a partir de un documento (Excel) que poseía los datos de
            los mismos.
          </p>
        </li>
        <li>
          <p className="text-[#6ed1d6] text-lg">
            Sistema de análisis veterinario - (2023).
          </p>
          <p className="text-gray-300">
            Desarrollo de un sistema que permite la carga de los datos de
            análisis para veterinarias, pudiendo generar PDFs con la información
            del análisis, permitiendo a las veterinarias tener un documento con
            los datos necesarios del análisis del paciente en un orden, formato
            accesible y cómodo para las mismas. En este desarrollo pude aprender
            nuevos conceptos, nuevas herramientas como React-PDF, pulir métodos
            y herramientas de trabajo, además de superar las expectativas del
            cliente.
          </p>
        </li>
      </ol>
    </section>
  );
};

export default Private;
