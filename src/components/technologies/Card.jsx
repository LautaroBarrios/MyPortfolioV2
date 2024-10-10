export const CardTechnology = ({ Element, index }) => {
  return (
    <div className="h-full w-full mx-20">
      <div className="min-h:w-24 w-16" key={index}>
        <Element />
      </div>
    </div>
  );
};
