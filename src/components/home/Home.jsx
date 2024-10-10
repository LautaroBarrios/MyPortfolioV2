import { Contact, Picture } from "../index.js";
import { useEffect, useState } from "react";
import DecorationBackground from "../decoration/DecorationBackground.jsx";

const Home = ({ contactRef, triggerContactBlink }) => {
  const [isBlinking, setIsBlinking] = useState(false);

  useEffect(() => {
    if (triggerContactBlink) {
      setIsBlinking(true);
      const timeout = setTimeout(() => {
        setIsBlinking(false);
      }, 1500);

      return () => clearTimeout(timeout);
    }
  }, [triggerContactBlink]);

  return (
    <section className="flex bg-[#072e33] w-full h-screen items-center justify-between py-2 relative overflow-hidden">
      <article className="flex h-full md:w-1/2 sm:2/3 items-center md:mt-16 z-20 font-light">
        <div className="relative mt-0">
          <h1 className="text-[#d4f1ff] lg:text-4xl sm:text-2xl text-xl mb-2 md:px-10 px-4">
            I'm
          </h1>
          <div className="flex s:flex-wrap s:flex-row flex-col s:items-center items-start md:px-10 px-4 slide-in">
            <h2 className="text-gray-50 lg:text-7xl sm:text-3xl text-xl mb-2 pr-4 md:pb-4">
              Lautaro
            </h2>
            <h3 className="text-gray-50 lg:text-7xl sm:text-3xl text-xl mb-2 pr-4 md:pb-4">
              Gabriel
            </h3>
            <div className="flex items-start">
              <h4 className="text-gray-50 lg:text-7xl sm:text-3xl text-xl mb-2 md:pb-4">
                Barrios
              </h4>
              <p className="text-gray-50 lg:text-7xl sm:text-3xl text-xl blink border-r w-2 lg:h-16 sm:h-10 h-7" />
            </div>
          </div>
          <div className="flex items-center bg-[#06292e] border-t-[1px] border-r-[1px] border-[#1e4045] md:w-10/12 sm:w-8/12 w-11/12 py-3 rounded-e-full md:px-10 pl-4 md:pr-5 pr-8 slide-in">
            <p className="text-gray-100">
              Full Stack Developer con conocimientos y experiencia en
              metodologías ágiles, estructuras de datos, algoritmos, frameworks
              y con años de experiencia como desarrollador.
            </p>
          </div>
        </div>
      </article>

      <Picture />
      <DecorationBackground />

      <div
        ref={contactRef}
        className={`absolute bottom-3 xl:bottom-10 left-1/2 xl:left-10 transform xl:translate-x-0 -translate-x-1/2 z-30 ${
          isBlinking ? "blinking" : ""
        }`}
      >
        <Contact />
      </div>
    </section>
  );
};

export default Home;
