const Language = () => {
  return (
    <div className="container mx-auto mt-28">
      <div className="font-bold text-orange-600 text-lg">
        Language
      </div>

      <div className="flex flex-col justify-center self-center gap-y-5 mt-3">
        <div className="flex flex-row gap-x-10">
          <div className="w-[300px]">
            Burmese
          </div>
          <div className="w-full">
            Mother Tongue
          </div>
        </div>
        <div className="flex flex-row gap-x-10">
          <div className=" w-[300px]">
            Japanese
          </div>
          <div className=" w-full">
            N2 (In progress)
          </div>
        </div>
        <div className="flex flex-row gap-x-10">
          <div className=" w-[300px]">
            English 
          </div>
          <div className=" w-full">
            Conversational
          </div>
        </div>
      </div>
    </div>
  );
};

export default Language;
