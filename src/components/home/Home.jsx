import Contact from "../contact/Contact";
import DecorationBackground from "../decoration/decorationBackground";
import { Picture } from "..";
import { useEffect, useState } from "react";

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
      <article className="flex h-full md:w-1/2 items-center mt-16 z-10 font-light">
        <div className="relative mt-0">
          <h1 className="text-[#d4f1ff] text-4xl mb-2 px-10">I'm</h1>
          <div className="flex flex-wrap items-center px-10 slide-in">
            <h2 className="text-gray-50 md:text-7xl text-5xl mb-2 pr-4 md:pb-4">
              Lautaro
            </h2>
            <h3 className="text-gray-50 md:text-7xl text-5xl mb-2 pr-4 md:pb-4">
              Gabriel
            </h3>
            <h4 className="text-gray-50 md:text-7xl text-5xl mb-2 pr-1 md:pb-4">
              Barrios
            </h4>
            <p className="text-gray-50 md:text-7xl text-5xl blink border-r md:mb-7"></p>
          </div>
          <div className="flex items-center bg-[#06292e] border-t-[1px] border-r-[1px] border-[#1e4045] md:w-10/12 py-3 rounded-e-full px-10 slide-in">
            <p className="text-gray-100">
              Full Stack Developer con conocimientos y experiencia en
              metodologías ágiles, estructuras de datos, algoritmos, frameworks
              y con años de experiencia como desarrollador especializado en
              React, NodeJS, Express, MySQL, SQL, PHP, Laravel, entre otras
              tecnologías del sector.
            </p>
          </div>
        </div>
      </article>

      <Picture />
      <DecorationBackground />

      <div
        ref={contactRef}
        className={`absolute bottom-3 xl:bottom-10 left-1/2 xl:left-10 transform xl:translate-x-0 -translate-x-1/2 z-10 ${
          isBlinking ? "blinking" : ""
        }`}
      >
        <Contact />
      </div>
    </section>
  );
};

export default Home;
