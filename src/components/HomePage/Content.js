import Button from "@mui/material/Button";
import Profile from "../../assets/profile.jpg";
import HomePageCss from "./HomePage.module.css";

const Content = (props) => {
  return (
    <div className="container flex flex-row justify-between mt-10 mx-auto">
      <div className="flex flex-col justify-start items-start self-center w-[400px] text-lg">
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
          <Button
            variant="contained"
            color="warning"
            sx={{
              fontSize: 16,
              textTransform: "capitalize",
              width: 100,
            }}
          >
            Resume
          </Button>
          <Button
            variant="outlined"
            color="warning"
            sx={{
              fontSize: 16,
              textTransform: "capitalize",
              width: 100,
            }}
          >
            About
          </Button>
        </div>
      </div>

      <div className="flex justify-start items-start">
        <img
          src={Profile}
          alt="my-profile"
          className={`w-[500px] h-[400px] rounded-lg profilepath ${HomePageCss.profilepath}`}
        />
      </div>
    </div>
  );
};

export default Content;
