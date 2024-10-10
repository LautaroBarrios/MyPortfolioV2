import { technologies } from "../../icons/technologies/technologiesArray.js";
import { CardTechnology } from "./Card.jsx";

const Technologies = () => {
  return (
    <section className="flex bg-[#3d5357] w-full justify-center items-center py-4">
      <section className="flex flex-col bg-[#052226] w-full py-4 justify-center items-center relative">
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
