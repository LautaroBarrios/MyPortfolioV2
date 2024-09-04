import { useState } from "react";
import { Hand, Home, Projects, Setting, Technology, User } from "../../icons";

const NavBar = ({
  homeRef,
  contactRef,
  technologiesRef,
  projectsRef,
  onContactClick,
  onResetReferences,
}) => {
  const [showSetting, setShowSetting] = useState(false);

  const toggleSetting = () => setShowSetting(!showSetting);

  const scrollToSection = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    }
  };

  const handleContactClick = () => {
    scrollToSection(contactRef);
    onContactClick();
    onResetReferences(); // Resetear referencias después del click
  };

  return (
    <nav className="flex items-center justify-between bg-[#05161A] w-full py-2 md:px-10 fixed text-white whitespace-nowrap z-50">
      <article className="md:flex hidden items-center space-x-2 slide-in">
        <Hand />
        <p>Hello World!</p>
      </article>

      <div className="flex md:w-10/12 w-full items-center md:justify-evenly justify-around">
        <button type="button" onClick={() => scrollToSection(homeRef)}>
          <span className="flex md:w-36 items-center justify-center md:px-4 md:py-.5 hover:text-[#dff4ff] hover:border-b-[0.1px] border-[#3f5d61] active:scale-95 transition-all">
            <Home />
            <p className="md:pl-0 pl-2 md:flex hidden">HOME</p>
          </span>
        </button>

        <button type="button" onClick={handleContactClick}>
          <span className="flex md:w-36 items-center justify-center md:px-4 md:py-.5 hover:text-[#dff4ff] hover:border-b-[0.1px] border-[#3f5d61] active:scale-95 transition-all">
            <User />
            <p className="md:pl-0 pl-2 md:flex hidden">CONTACT</p>
          </span>
        </button>

        <button type="button" onClick={() => scrollToSection(technologiesRef)}>
          <span className="flex md:w-36 items-center justify-center md:px-4 md:py-.5 hover:text-[#dff4ff] hover:border-b-[0.1px] border-[#3f5d61] active:scale-95 transition-all">
            <Technology />
            <p className="md:pl-0 pl-2 md:flex hidden">TECHNOLOGIES</p>
          </span>
        </button>

        <button type="button" onClick={() => scrollToSection(projectsRef)}>
          <span className="flex md:w-36 items-center justify-center md:px-4 md:py-.5 hover:text-[#dff4ff] hover:border-b-[0.1px] border-[#3f5d61] active:scale-95 transition-all">
            <Projects />
            <p className="md:pl-0 pl-2 md:flex hidden">PROJECTS</p>
          </span>
        </button>
      </div>

      <button
        type="button"
        className={`transition-transform duration-700 md:px-0 px-[6%] ${
          showSetting ? "rotate-45" : "rotate-0"
        }`}
        onClick={toggleSetting}
      >
        <Setting />
      </button>

      {showSetting && (
        <div className="flex flex-col absolute right-4 top-11 bg-[#0C7075] py-2 px-4 rounded slide-out transition-all">
          <button type="button">Lenguaje</button>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
