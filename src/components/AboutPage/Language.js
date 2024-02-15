const Language = () => {
  return (
    <div className="container mx-auto mt-28">
      <div className="font-semibold text-orange-600 text-3xl">Language</div>

      <div className="flex flex-col justify-center self-center gap-y-5 mt-11">
        <div className="flex flex-row gap-x-10">
          <div className="w-[300px] font-semibold text-2xl">Burmese</div>
          <div className="w-full text-2xl">Mother Tongue</div>
        </div>
        <div className="flex flex-row gap-x-10">
          <div className=" w-[300px] font-semibold text-2xl">Japanese</div>
          <div className=" w-full text-2xl">N2 (In progress)</div>
        </div>
        <div className="flex flex-row gap-x-10">
          <div className=" w-[300px] font-semibold text-2xl">English</div>
          <div className=" w-full text-2xl">Conversational</div>
        </div>
      </div>
    </div>
  );
};

export default Language;
