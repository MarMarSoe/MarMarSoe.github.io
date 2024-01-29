import { Button } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

const ContactInfo = () => {
  return (
    <div className="container flex flex-col mt-28 mx-auto">
      <div className="flex justify-start text-orange-600 font-bold text-lg">
        Find Me On
      </div>
      <div className="flex flex-row mt-5 gap-x-32">
        <div className="flex flex-col justify-center items-start text-slate-700 ">
          <Button
            variant="text"
            startIcon={<FacebookIcon />}
            color="inherit"
            href="https://www.facebook.com/profile.php?id=100010863332986"
          >
            Facebook
          </Button>
          <Button
            variant="text"
            startIcon={<InstagramIcon />}
            href="https://www.instagram.com/lady_mar_mar/"
            color="inherit"
          >
            Instagram
          </Button>
          <Button
            variant="text"
            color="inherit"
            startIcon={<ChatBubbleOutlineIcon />}
          >
            Line
          </Button>
          <Button
            variant="text"
            color="inherit"
            startIcon={<LinkedInIcon />}
            href="https://linkedin.com/in/mar-mar-soe-a63792185"
          >
            LinkedIn
          </Button>
          <Button
            variant="text"
            color="inherit"
            startIcon={<GitHubIcon />}
            href="https://github.com/MarMarSoe"
          >
            GitHub
          </Button>
        </div>
        <div className="flex flex-col justify-center items-center w-full h-[170px] bg-orange-200 rounded-md">
          <h2 className="text-orange-500 font-semibold text-lg">Contact Me</h2>
          <p className="font-light underline underline-offset-4">
            marmarsoe1995@gmail.com
          </p>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default ContactInfo;
