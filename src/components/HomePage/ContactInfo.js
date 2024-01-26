import { Button } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

const ContactInfo = () => {
  return (
    <div className="flex flex-col justify-evenly mt-10 mx-auto">
      <div className="flex justify-start font-bold text-orange-600">
        <div className="flex justify-center  w-[550px]">Find Me On</div>
      </div>
      <div className="flex flex-row  justify-between w-[1000px] mt-10 ml-[250px]">
        <div className="flex flex-col items-start text-slate-700 w-[300px]">
          <Button
            variant="text"
            color="primary"
            startIcon={<FacebookIcon />}
            href="https://www.facebook.com/profile.php?id=100010863332986"
          >
            Facebook
          </Button>
          <Button
            variant="text"
            color="warning"
            startIcon={<InstagramIcon />}
            href="https://www.instagram.com/lady_mar_mar/"
          >
            Instagram
          </Button>
          <Button
            variant="text"
            color="success"
            startIcon={<ChatBubbleOutlineIcon />}
          >
            Line
          </Button>
          <Button
            variant="text"
            color="primary"
            startIcon={<LinkedInIcon />}
            href="linkedin.com/in/mar-mar-soe-a63792185"
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
        <div className="flex flex-col justify-center items-center w-[800px] bg-orange-200">
          <h2>Contact Me</h2>
          <p>marmarsoe1995@gmail.com</p>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default ContactInfo;
