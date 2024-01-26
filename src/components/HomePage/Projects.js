import Pokemon1 from "../../assets/pokemon.png";
import PokemonLogo from "../../assets/Pokemon-logo.jpg";
import Button from "@mui/material/Button";

const Projects = () => {
  return (
    <div className="flex flex-col justify-center mt-10 mx-auto">
      <div className="flex justify-start font-bold text-orange-600">
        <div className="flex justify-center w-[550px]">Projects</div>
      </div>
      <div className="flex flex-row justify-between mt-5 ml-[250px] p-5 mx-auto ">
        <div className="flex items-start">
          <img
            src={Pokemon1}
            alt="my-profile"
            className="w-[200px] h-[150px] rounded-lg border p-3"
          />
        </div>
        <div className="flex flex-col items-start w-[800px] pl-14">
          <div className="font-bold text-orange-600">PokeDev</div>
          <div className="text-grey-500 font-light">React && Tailwindcss</div>
          <div className="text-wrap w-[700px]">
            This project is a practice project that was used React JS,
            Tailwindcss, Pokemon API. React hooks (useState, useContext,
            createContext) were used.
          </div>
          <div className="mt-3 flex justify-between w-[160px]">
            <Button
              variant="outlined"
              href="https://snazzy-croissant-7c932a.netlify.app/"
              color="warning"
            >
              Live
            </Button>

            <Button
              variant="outlined"
              href="https://github.com/MarMarSoe/pokemon-with-react"
              color="warning"
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
