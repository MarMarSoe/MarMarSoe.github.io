const Skills = () => {
  return (
    <div className="flex flex-col justify-center mt-10 mx-auto">
      <div className="flex justify-start font-bold text-orange-600">
        <div className="flex justify-center  w-[550px]">Skills</div>
      </div>
      <div className="flex mx-auto mt-5">
        <div className="grid grid-cols-4 gap-x-80 gap-y-10 place-content-stretch h-44 text-gray-600">
          <div className="">HTML</div>
          <div className="">CSS</div>
          <div className="">Javascript</div>
          <div className="">Jquery</div>
          <div className="">Bootstrap</div>
          <div className="">Tailwindcss</div>
          <div className="">React</div>
          <div className="">Java</div>
          <div className="">Python</div>
          <div className="">VBA</div>
          <div className="">MySQL</div>
          <div className="">PostgreSQL</div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
