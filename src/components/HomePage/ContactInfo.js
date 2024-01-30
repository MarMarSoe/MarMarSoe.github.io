import { Button } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

const ContactInfo = () => {
  return (
    <div className="container flex flex-col mt-28 mx-auto">
      <div className="flex justify-start items-center text-orange-600 font-semibold text-3xl">
        Find Me On
      </div>
      <div className="flex flex-row mt-12 gap-x-32">
        <div className="flex flex-col justify-center items-start text-slate-700 ">
          <Button
            variant="text"
            startIcon={<FacebookIcon />}
            color="inherit"
            href="https://www.facebook.com/profile.php?id=100010863332986"
            sx={{ fontSize: 20 }}
          >
            Facebook
          </Button>
          <Button
            variant="text"
            startIcon={<InstagramIcon />}
            href="https://www.instagram.com/lady_mar_mar/"
            color="inherit"
            sx={{ fontSize: 20 }}
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
            sx={{ fontSize: 20 }}
          >
            LinkedIn
          </Button>
          <Button
            variant="text"
            color="inherit"
            startIcon={<GitHubIcon />}
            href="https://github.com/MarMarSoe"
            sx={{ fontSize: 20 }}
          >
            GitHub
          </Button>
        </div>
        <div className="flex flex-col justify-center items-center w-full h-[220px] bg-orange-200 rounded-md">
          <h2 className="text-orange-500 font-semibold text-2xl">Contact Me</h2>
          <p className="font-light underline underline-offset-4 text-base mt-6">
            marmarsoe1995@gmail.com
          </p>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default ContactInfo;
