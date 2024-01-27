import { Button, TextField } from "@mui/material";
import { TextareaAutosize } from "@mui/base/TextareaAutosize";
import Textarea from "@mui/joy/Textarea";

const ContactForm = () => {
  return (
    <div className="container flex justify-around mx-auto font-light">
      <div className="flex flex-col p-4">
        <div className="font-bold text-lg text-center text-orange-600">
          Get In Touch
        </div>
        <div className="mt-5 gap-y-3 flex flex-col justify-center items-center">
          <div className="flex flex-row gap-x-12">
            <div className="flex flex-col ">
              <label>First Name</label>
              <TextField
                id="outlined-basic"
                variant="outlined"
                size="small"
                sx={{ width: 200 }}
              />
            </div>
            <div className="flex flex-col">
              <label>Last Name</label>
              <TextField
                id="outlined-basic"
                variant="outlined"
                size="small"
                sx={{ width: 200 }}
              />
            </div>
          </div>
          <div className="flex flex-row justify-start]">
            <div className="flex flex-col">
              <label>Email</label>
              <TextField
                id="outlined-basic"
                variant="outlined"
                size="small"
                sx={{ width: 450 }}
              />
            </div>
          </div>
          <div className="flex flex-row justify-start]">
            <div className="flex flex-col">
              <label>Subject</label>
              <TextField
                id="outlined-basic"
                variant="outlined"
                size="small"
                sx={{ width: 450 }}
              />
            </div>
          </div>
          <div className="flex flex-row justify-start">
            <div className="flex flex-col">
              <label>Message</label>
              <Textarea
                size="sm"
                name="Size"
                minRows={5}
                maxRows={5}
                sx={{ width: 450 }}
              />
            </div>
          </div>
          <div className="flex flex-row justify-end w-[450px]">
            <div className="flex flex-row justify-between gap-x-3">
              <Button
                variant="outlined"
                size="medium"
                color="warning"
                sx={{ width: 100, textTransform: "capitalize" }}
              >
                Clear
              </Button>
              <Button
                variant="contained"
                size="medium"
                color="warning"
                sx={{ width: 100, textTransform: "capitalize" }}
              >
                Submit
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
