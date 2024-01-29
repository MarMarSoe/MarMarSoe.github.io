import Pokemon from "../../assets/pokemon.png";
import Portfolio from "../../assets/portfolio.png";
import Button from "@mui/material/Button";
import Styles from "./HomePage.module.css";

const Projects = () => {
  return (
    <div className="container flex flex-col mt-28 mx-auto">
      <div className="flex justify-start items-center text-orange-600 font-bold text-lg">
        Project
      </div>
      <div className="flex flex-col gap-y-5">
        <div className="flex flex-row items-center mt-5 gap-x-8">
          <div className="flex items-start">
            <img
              src={Pokemon}
              alt="my-profile"
              className="w-[220px] h-[180px] border hover:border-orange-300 hover:scale-105 transition duration-300"
            />
          </div>
          <div className="flex flex-col justify-start items-start">
            <div className="font-bold text-orange-600 text-lg">PokeDev</div>
            <div className="flex flex-row gap-x-2 text-grey-500 font-light">
              <div>React</div>
              <div>Tailwindcss</div>
            </div>
            <div className="text-wrap w-[700px] mt-2">
              This project is a practice project that was used React JS,
              Tailwindcss, Pokemon API. React hooks (useState, useContext,
              createContext) were used.
            </div>
            <div className="mt-3 flex flex-row gap-x-2">
              <Button
                variant="outlined"
                href="https://snazzy-croissant-7c932a.netlify.app/"
                color="warning"
                sx={{ fontSize: 16, textTransform: "capitalize", width: 100 }}
              >
                Live
              </Button>

              <Button
                variant="outlined"
                href="https://github.com/MarMarSoe/pokemon-with-react"
                color="warning"
                sx={{ fontSize: 16, textTransform: "capitalize", width: 100 }}
              >
                GitHub
              </Button>
            </div>
          </div>
        </div>
        {/* Project II */}
        <div className="flex flex-row items-center mt-5 gap-x-8">
          <div className="flex items-start relative">
            <img
              src={Portfolio}
              alt="my-profile"
              className="w-[220px] h-[180px] border hover:border-orange-300 hover:scale-105 transition duration-300"
            />
            <p className={`text-orange-600 font-bold ribbon ${Styles.ribbon}`}>
              This site
            </p>
          </div>
          <div className="flex flex-col justify-start items-start">
            <div className="font-bold text-orange-600 text-lg">
              My Portfolio
            </div>
            <div className="flex flex-row gap-x-2 text-grey-500 font-light">
              <div>React</div>
              <div>Tailwindcss</div>
              <div>Material UI</div>
            </div>
            <div className="text-wrap w-[700px] mt-2">
              My portfolio website, you're probably looking at right now.
            </div>
            <div className="mt-3 flex flex-row gap-x-2">
              <Button
                variant="outlined"
                href="https://github.com/MarMarSoe/MarMarSoe.github.io"
                color="warning"
                sx={{ fontSize: 16, textTransform: "capitalize", width: 100 }}
              >
                GitHub
              </Button>
            </div>
          </div>
        </div>
        {/* Project III */}
        <div className="flex flex-row items-center mt-5 gap-x-8">
          <div className="flex items-start">
            <img
              src={Portfolio}
              alt="my-profile"
              className="w-[220px] h-[180px] border hover:border-orange-300 hover:scale-105 transition duration-300"
            />
          </div>
          <div className="flex flex-col justify-start items-start">
            <div className="font-bold text-orange-600 text-lg">
              UI/UX Design Project
            </div>
            <div className="flex flex-row gap-x-2 text-grey-500 font-light">
              <div>Figma</div>
            </div>
            <div className="text-wrap w-[700px] mt-2">
              This project is creating UI/UX Design for my portfolio website.
              You can able to browse from the link.
            </div>
            <div className="mt-3 flex flex-row gap-x-2">
              <Button
                variant="outlined"
                href="https://www.figma.com/file/Ep5gp13K6gqi0UBwwC8MrC/MMS-Portfolio?type=design&node-id=1%3A2&mode=design&t=YtzjW82BEljiga2Q-1"
                color="warning"
                sx={{ fontSize: 16, textTransform: "capitalize", width: 100 }}
              >
                Link
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
