const Skills = () => {
  return (
    <div className="container flex flex-col mt-28 mx-auto">
      {/* <div className="flex justify-center mt-5"> */}
      <div className="flex justify-start items-center  text-orange-600 font-semibold text-3xl">
        Skills
      </div>
      <div className="flex justify-center mt-12">
        <div className="grid grid-cols-4 gap-x-56 gap-y-3 place-content-stretch  font-light text-center w-full h-44">
          <div className="transition duration-3 hover:text-orange-400 hover:scale-110 hover:font-bold text-xl">
            HTML
          </div>
          <div className="transition duration-3 hover:text-orange-400 hover:scale-110 hover:font-bold text-xl">
            CSS
          </div>
          <div className="transition duration-3 hover:text-orange-400 hover:scale-110 hover:font-bold text-xl">
            Javascript
          </div>
          <div className="transition duration-3 hover:text-orange-400 hover:scale-110 hover:font-bold text-xl">
            Jquery
          </div>
          <div className="transition duration-3 hover:text-orange-400 hover:scale-110 hover:font-bold text-xl">
            Bootstrap
          </div>
          <div className="transition duration-3 hover:text-orange-400 hover:scale-110 hover:font-bold text-xl">
            Tailwindcss
          </div>
          <div className="transition duration-3 hover:text-orange-400 hover:scale-110 hover:font-bold text-xl">
            React
          </div>
          <div className="transition duration-3 hover:text-orange-400 hover:scale-110 hover:font-bold text-xl">
            Java
          </div>
          <div className="transition duration-3 hover:text-orange-400 hover:scale-110 hover:font-bold text-xl">
            Python
          </div>
          <div className="transition duration-3 hover:text-orange-400 hover:scale-110 hover:font-bold text-xl">
            VBA
          </div>
          <div className="transition duration-3 hover:text-orange-400 hover:scale-110 hover:font-bold">
            MySQL
          </div>
          <div className="transition duration-3 hover:text-orange-400 hover:scale-110 hover:font-bold">
            PostgreSQL
          </div>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
};

export default Skills;
