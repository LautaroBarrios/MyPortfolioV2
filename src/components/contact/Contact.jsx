import { CV, Gmail, LinkedIn } from "../../icons";
import GitHub from "../../icons/contact/Github";

const Contact = () => {
  return (
    <div className="flex md:space-x-2 space-x-3 items-center justify-center bg-[#0C7075] text-center md:pt-2 md:pb-[14px] pt-1 pb-[8px] px-3 rounded text-white transition-all">
      <a
        href="https://mail.google.com/mail/?view=cm&fs=1&to=barrios.g.lautaro@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        className="md:h-12 md:w-12 h-9 w-9 flex items-center justify-center hover:scale-105"
        title="Enviar un correo electrónico"
      >
        <Gmail />
      </a>

      <a
        href="https://github.com/LautaroBarrios"
        target="_blank"
        rel="noopener noreferrer"
        className="md:h-12 md:w-12 h-9 w-9 flex items-center justify-center hover:scale-105"
        title="Ver mi perfil de GitHub"
      >
        <GitHub />
      </a>

      <a
        href="https://www.linkedin.com/in/lautaro-g-barrios/"
        target="_blank"
        rel="noopener noreferrer"
        className="md:h-12 md:w-12 h-9 w-9 flex items-center justify-center hover:scale-105"
        title="Ver mi perfil de LinkedIn"
      >
        <LinkedIn />
      </a>

      <a
        href="./CV-BarriosLautaroG.pdf"
        title="Descargar CV"
        download={""}
        className="md:h-12 md:w-12 h-9 w-9 hover:scale-105"
      >
        <CV />
      </a>
    </div>
  );
};

export default Contact;
