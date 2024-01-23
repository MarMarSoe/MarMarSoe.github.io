const ContactInfo = () => {
  return (
    <div className="flex flex-col justify-evenly mt-10 mx-auto">
      <div className="flex justify-start font-bold text-orange-600">
        <div className="flex justify-center  w-[550px]">Find Me On</div>
      </div>
      <div className="flex flex-row justify-between w-[1000px] mt-10 ml-[250px]">
        <div className="flex flex-col items-start text-slate-700">
          <a href="">Facebook</a>
          <a href="">Instagram</a>
          <a href="">Line</a>
          <a href="">LinkedIn</a>
          <a href="">GitHub</a>
        </div>
        <div className="flex flex-col justify-center items-center w-[600px] bg-orange-200">
          <h2>Contact Me</h2>
          <p>marmarsoe1995@gmail.com</p>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default ContactInfo;
