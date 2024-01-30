const Education = () => {
  return (
    <div className="container mx-auto mt-28">
      <div className="font-semibold text-orange-600 text-3xl">
        Education & Certifaction
      </div>

      <div className="flex flex-col justify-center self-center gap-y-5 mt-11">
        {/* <Divider orientation="vertical" flexItem></Divider> */}
        <div className="flex flex-row gap-x-10">
          <div className="hover:text-orange-500 hover:scale-100 transition duration-300 w-[300px] text-lg">
            B.C.Sc Computer Science
          </div>
          <div className="hover:text-orange-500 hover:scale-100 transition duration-300 w-full text-lg">
            Computer University (2012 Feb ~ 2017 Dec)
          </div>
        </div>
        <div className="flex flex-row gap-x-10">
          <div className="hover:text-orange-500 hover:scale-100 transition duration-300 w-[300px] text-lg">
            Professional Diploma in Software Engineering
          </div>
          <div className="hover:text-orange-500 hover:scale-100 transition duration-300 w-full text-lg">
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
          <div className="hover:text-orange-500 hover:scale-100 transition duration-300 w-[300px] text-lg">
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
