import PictureProfile from "../../assets/pictures/PhotoProfile.png";

const Picture = () => {
  return (
    <>
      <div className="xl:flex hidden bg-black hover:scale-105 transition-all border-[1px] opacity-25 lg:rounded-s-full rounded-none md:h-[700px] h-[345px] lg:w-[800px] w-full absolute right-0 md:top-auto top-1/3" />
      <div className="bg-black hover:scale-105 transition-all border-[3px] opacity-25 rounded-s-full md:h-[625px] h-[310px] lg:w-[750px] md:w-[560px] w-[280px] absolute right-0 md:top-auto top-12" />
      <div className="bg-black hover:scale-105 transition-all border-[4px] opacity-25 rounded-s-full md:h-[550px] h-[275px] lg:w-[700px] md:w-[520px] w-[260px] absolute right-0 md:top-auto top-16" />
      <div className="bg-black hover:scale-105 transition-all border-[5px] opacity-25 rounded-s-full md:h-[475px] h-[237.5px] lg:w-[650px] md:w-[475px] w-[240px] absolute right-0 md:top-auto top-20" />
      <img
        src={PictureProfile}
        alt="Picture"
        className="md:max-h-[400px] max-h-[200px] bg-[#0C7075] hover:scale-105 transition-all rounded-full md:border-[#d4f1ff] border-[#3d565c] md:border-8 border-[6px] absolute lg:right-52 md:right-10 right-[20px] md:top-auto top-[100px] slide-out-low"
      />
    </>
  );
};

export default Picture;
