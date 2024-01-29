const Language = () => {
  return (
    <div className="container mx-auto mt-5">
      <div className="font-bold text-orange-600 text-lg">
        Language
      </div>

      <div className="flex flex-col justify-center self-center gap-y-5 mt-3">
        <div className="flex flex-row gap-x-10">
          <div className="hover:text-orange-500 hover:scale-100 transition duration-300 w-[300px]">
            Burmese
          </div>
          <div className="hover:text-orange-500 hover:scale-100 transition duration-300 w-full">
            Mother Tongue
          </div>
        </div>
        <div className="flex flex-row gap-x-10">
          <div className="hover:text-orange-500 hover:scale-100 transition duration-300 w-[300px]">
            Japanese
          </div>
          <div className="hover:text-orange-500 hover:scale-100 transition duration-300 w-full">
            N2 (In progress)
          </div>
        </div>
        <div className="flex flex-row gap-x-10">
          <div className="hover:text-orange-500 hover:scale-100 transition duration-300 w-[300px]">
            English 
          </div>
          <div className="hover:text-orange-500 hover:scale-100 transition duration-300 w-full">
            Conversational
          </div>
        </div>
      </div>
    </div>
  );
};

export default Language;
