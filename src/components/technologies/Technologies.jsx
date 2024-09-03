import { technologies } from "../../icons/technologies/technologiesArray.js";
import { CardTechnology } from "./Card.jsx";

const Technologies = () => {
  return (
    <section className="flex bg-[#3d5357] w-full h-[26vh]  justify-center items-center">
      <section className="flex flex-col bg-[#052226] w-full h-[24vh] py-4 justify-center items-center relative">
        <div className="overflow-hidden w-full">
          <div className="flex whitespace-nowrap animate-scroll">
            {[...technologies, ...technologies].map((Element, index) => (
              <CardTechnology key={index} Element={Element} />
            ))}
          </div>
        </div>
      </section>
    </section>
  );
};

export default Technologies;
