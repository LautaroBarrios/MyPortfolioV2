export const CardTechnology = ({ Element, index }) => {
  return (
    <div className="h-full w-full mx-20">
      <div className="w-24 h-32" key={index}>
        <Element />
      </div>
    </div>
  );
};
