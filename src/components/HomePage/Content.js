import Button from "@mui/material/Button";
import Profile from "../../assets/profile.jpg";
import HomePageCss from "./HomePage.module.css";

const Content = (props) => {
  return (
    <div className="flex flex-row justify-around mt-10 mx-auto">
      <div className="flex justify-center">
        <div className="flex flex-col justify-center items-start w-[400px] h-[400px] text-lg">
          <div className="font-bold text-xl">
            Hi there! <span className="text-orange-600">Minglabar </span>
          </div>
          <div className="font-bold text-xl">
            I'm <span className="text-orange-600">Mar Mar Soe</span>, Software
            Engineer with over 5 years experience.
          </div>

          <div className="mt-10 text-pretty">
            Passionate to create beafuiful and enjoyable web apps.I'm currently
            working in Tokyo, Japan.
          </div>
          <div className="flex justify-center gap-x-2 mt-10">
            <Button variant="contained" color="warning">
              Resume
            </Button>
            <Button variant="outlined" color="warning">
              About
            </Button>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center p-10">
        <img
          src={Profile}
          alt="my-profile"
          className={`w-[400px] h-[400px] rounded-lg profilepath ${HomePageCss.profilepath}`}
        />
      </div>
    </div>
  );
};

export default Content;
