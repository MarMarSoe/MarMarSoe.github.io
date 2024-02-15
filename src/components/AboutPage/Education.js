const Education = () => {
  return (
    <div className="container mx-auto mt-28">
      <div className="font-semibold text-orange-600 text-3xl">
        Education & Certifaction
      </div>

      <div className="flex flex-col justify-center self-center gap-y-5 mt-11">
        {/* <Divider orientation="vertical" flexItem></Divider> */}
        <div className="flex flex-col gap-y-2">
          <div className="font-semibold text-2xl">B.C.Sc Computer Science</div>
          <div className="text-orange-400 text-2xl">
            Computer University (2012 Feb ~ 2017 Dec)
          </div>
        </div>
        <div className="flex flex-col gap-y-2">
          <div className="font-semibold text-2xl">
            Professional Diploma In Software Engineering Course
          </div>
          <div className="text-orange-400 text-2xl">
            Information and Communication Technology Training Institute (2018
            May ~ 2018 Oct)
          </div>
        </div>
        <div className="flex flex-col gap-y-2">
          <div className="font-semibold text-2xl">
            Associate Cloud Engineer (Google Cloud Certified)
          </div>
          <div className="text-orange-400 text-2xl">2019 Mar 8</div>
        </div>
        <div className="flex flex-col gap-y-2">
          <div className="font-semibold text-2xl">JLPT N3 Certified</div>
          <div className="text-orange-400 text-2xl">2022 Dec</div>
        </div>
      </div>
    </div>
  );
};

export default Education;
