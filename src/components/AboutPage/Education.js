import { Divider } from "@mui/material";

const Education = () => {
  return (
    <div className="container mx-auto mt-5">
      <div className="font-bold text-orange-600 text-lg">
        Education & Certifaction
      </div>

      <div className="flex flex-col justify-center self-center gap-y-5 mt-3">
        {/* <Divider orientation="vertical" flexItem></Divider> */}
        <div className="flex flex-row gap-x-10">
          <div className="hover:text-orange-500 hover:scale-100 transition duration-300 w-[300px]">
            B.C.Sc Computer Science
          </div>
          <div className="hover:text-orange-500 hover:scale-100 transition duration-300 w-full">
            Computer University (2012 Feb ~ 2017 Dec)
          </div>
        </div>
        <div className="flex flex-row gap-x-10">
          <div className="hover:text-orange-500 hover:scale-100 transition duration-300 w-[300px]">
            Professional Diploma in Software Engineering
          </div>
          <div className="hover:text-orange-500 hover:scale-100 transition duration-300 w-full">
            Ea exercitation consectetur cillum voluptate ipsum mollit pariatur.
            Eiusmod nostrud tempor sit consectetur. Et nostrud culpa deserunt
            veniam sit elit sit pariatur consequat laborum duis cupidatat ea. Id
            excepteur occaecat ex incididunt fugiat nostrud minim occaecat.
            Lorem veniam cillum dolor est aliqua incididunt ex tempor eu
            reprehenderit culpa proident. Do fugiat ea cupidatat aute ex
            consectetur.
          </div>
        </div>
        <div className="flex flex-row gap-x-10">
          <div className="hover:text-orange-500 hover:scale-100 transition duration-300 w-[300px]">
            Google Cloud Certified
          </div>
          {/* <div className="hover:text-orange-500 hover:scale-100 transition duration-300 w-full">
            2012 Feb ~ 2017 Dec
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Education;
