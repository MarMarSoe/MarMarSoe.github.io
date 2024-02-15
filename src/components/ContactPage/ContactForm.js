import { Button } from "@mui/material";
// import Textarea from "@mui/joy/Textarea";
import { useForm } from "react-hook-form";
import InputFile from "./inputFile";
import TextareaField from "./TextAreaField";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstname: "",
      lastname: "",
      email: "",
      subject: "",
      message: "",
    },
  });
  const submitHandler = (data) => {
    // data = JSON.stringify(data);
   alert(JSON.stringify(data));
   reset();
  };
  return (
    <div className="container flex justify-around mx-auto font-light">
      <div className="flex flex-col p-4">
        <div className="font-semibold text-orange-600 text-3xl text-center">
          Get In Touch
        </div>
        <form onSubmit={ handleSubmit(submitHandler)}>
          <div className="mt-11 gap-y-3 flex flex-col justify-center">
            <div className="flex flex-row gap-x-12">
              <div className="flex flex-col w-full">
                <InputFile
                  label="First Name"
                  id="firstname"
                  name="firstname"
                  type="text"
                  register={register}
                  errors={errors}
                />
              </div>
              <div className="flex flex-col w-full">
                <InputFile
                  label="Last Name"
                  id="lastname"
                  name="firstname"
                  type="text"
                  register={register}
                  errors={errors}
                />
              </div>
            </div>
            <div className="flex flex-row justify-start">
              <div className="flex flex-col w-full ">
                <InputFile
                  label="Email"
                  id="email"
                  name="email"
                  type="text"
                  register={register}
                  errors={errors}
                />
              </div>
            </div>
            <div className="flex flex-row justify-start">
              <div className="flex flex-col w-full">
                <InputFile
                  label="Subject"
                  id="subject"
                  name="subject"
                  type="text"
                  register={register}
                  errors={errors}
                />
              </div>
            </div>
            <div className="flex flex-row justify-start">
              <div className="flex flex-col w-full">
                <TextareaField
                  label="Message"
                  id="message"
                  type="textarea"
                  name="message"
                  register={register}
                  errors={errors}
                />
              </div>
            </div>
            <div className="flex flex-row justify-end w-[450px]">
              <div className="flex flex-row justify-between gap-x-3">
                <Button
                  onClick={() => reset()}
                  variant="outlined"
                  size="medium"
                  color="warning"
                  sx={{
                    width: 150,
                    height: 50,
                    textTransform: "capitalize",
                    fontSize: 18,
                  }}
                >
                  Clear
                </Button>
                <Button
                  type="submit"
                  variant="contained"
                  size="medium"
                  color="warning"
                  sx={{
                    width: 150,
                    height: 50,
                    textTransform: "capitalize",
                    fontSize: 18,
                  }}
                >
                  Submit
                </Button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
