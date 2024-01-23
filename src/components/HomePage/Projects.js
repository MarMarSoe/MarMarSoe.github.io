import Profile from "../../assets/profile.jpg";

const Projects = () => {
  return (
    <div className="flex flex-col justify-center mt-10 mx-auto">
      <div className="flex justify-start font-bold text-orange-600">
        <div className="flex justify-center  w-[550px]">Projects</div>
      </div>
      {/* Project I */}
      <div className="flex justify-evenly items-center mt-5 ml-[250px] w-[1000px]">
        <div className="flex items-center">
          <img
            src={Profile}
            alt="my-profile"
            className="w-[250px] h-[250px] rounded-lg"
          />
        </div>
        <div className="flex flex-col items-start">
          <div className="font-bold">TuplOS</div>
          <div className="text-grey-600">Ticket Analyzer Project</div>
          <div className="text-wrap w-[700px]">
            lorem ipsumAmet enim exercitation nisi eiusmod aliqua ipsum minim
            anim. Aliquip sit aliquip elit reprehenderit aute ut fugiat in
            deserunt culpa veniam. Eu aliqua ad dolor in cillum laboris sit
            nostrud. Incididunt aliquip excepteur irure proident labore deserunt
            enim nulla aliquip minim magna. Sint laboris consectetur voluptate
            in ex duis duis consectetur duis ut ex ullamco cupidatat. Voluptate
            laborum sit nisi dolor id labore minim sunt.
          </div>
        </div>
      </div>

      {/* Project II */}
      <div className="flex justify-evenly items-center mt-5 ml-[250px] w-[1000px]">
        <div className="flex items-center">
          <img
            src={Profile}
            alt="my-profile"
            className="w-[250px] h-[250px] rounded-lg"
          />
        </div>
        <div className="flex flex-col items-start">
          <div className="font-bold">Pokemon Project</div>
          <div className="text-grey-500">React && Tailwindcss</div>
          <div className="text-wrap w-[700px]">
            This project is a practice project that was used React JS,
            Tailwindcss, Pokemon API. React hooks (useState, useContext,
            createContext) were used.
          </div>
          <div>
            <a
              href="https://snazzy-croissant-7c932a.netlify.app/"
              className="text-blue-600 animate"
            >
              Click Here to Me
            </a>
          </div>
        </div>
      </div>

      {/* Project III */}
      <div className="flex justify-evenly items-center mt-5 ml-[250px] w-[1000px]">
        <div className="flex items-center">
          <img
            src={Profile}
            alt="my-profile"
            className="w-[250px] h-[250px] rounded-lg"
          />
        </div>
        <div className="flex flex-col items-start">
          <div className="font-bold">TuplOS</div>
          <div className="text-grey-600">Ticket Analyzer Project</div>
          <div className="text-wrap w-[700px]">
            lorem ipsumAmet enim exercitation nisi eiusmod aliqua ipsum minim
            anim. Aliquip sit aliquip elit reprehenderit aute ut fugiat in
            deserunt culpa veniam. Eu aliqua ad dolor in cillum laboris sit
            nostrud. Incididunt aliquip excepteur irure proident labore deserunt
            enim nulla aliquip minim magna. Sint laboris consectetur voluptate
            in ex duis duis consectetur duis ut ex ullamco cupidatat. Voluptate
            laborum sit nisi dolor id labore minim sunt.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
