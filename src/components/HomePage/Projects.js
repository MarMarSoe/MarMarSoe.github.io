import Pokemon from "../../assets/pokemon.png";
import Button from "@mui/material/Button";

const Projects = () => {
  return (
    <div className="container flex flex-col mt-10 mx-auto">
      <div className="flex justify-start items-center text-orange-600 font-bold text-lg">
        Project
      </div>
      <div className="flex flex-row items-center mt-5 gap-x-8">
        <div className="flex items-start">
          <img
            src={Pokemon}
            alt="my-profile"
            className="w-[200px] h-[150px] rounded-lg border p-3"
          />
        </div>
        <div className="flex flex-col justify-start items-start">
          <div className="font-bold text-orange-600">PokeDev</div>
          <div className="text-grey-500 font-light">React && Tailwindcss</div>
          <div className="text-wrap w-[700px]">
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
    </div>
  );
};

export default Projects;
