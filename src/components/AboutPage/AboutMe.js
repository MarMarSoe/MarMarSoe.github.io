import aboutPhoto from "../../assets/about-photo.jpg";

const AboutMe = () => {
  return (
    <div className="container flex flex-row justify-between mx-auto mt-20">
      <div className="flex flex-col justify-start w-[700px]">
        <div className="font-semibold text-orange-600 text-3xl">About Me</div>
        <div className="mt-11 font-light w-full text-justify text-sm">
          Ea exercitation consectetur cillum voluptate ipsum mollit pariatur.
          Eiusmod nostrud tempor sit consectetur. Et nostrud culpa deserunt
          veniam sit elit sit pariatur consequat laborum duis cupidatat ea. Id
          excepteur occaecat ex incididunt fugiat nostrud minim occaecat. Lorem
          veniam cillum dolor est aliqua incididunt ex tempor eu reprehenderit
          culpa proident. Do fugiat ea cupidatat aute ex consectetur. Cupidatat
          enim est non incididunt ullamco sit nisi. Eu sint qui Lorem sint
          culpa. Magna nulla ea minim eu et duis ea non ut dolore proident culpa
          duis sunt. Et quis aliquip aute eu cillum dolore aute ex nisi occaecat
          sunt sunt velit. Fugiat do aute amet eiusmod mollit qui nostrud culpa
          et mollit laborum. Ea exercitation consectetur cillum voluptate ipsum
          mollit pariatur. Eiusmod nostrud tempor sit consectetur. Do fugiat ea
          cupidatat aute ex consectetur. Cupidatat enim est non incididunt
          ullamco sit nisi. Eu sint qui Lorem sint culpa. Magna nulla ea minim
          eu et duis ea non ut dolore proident culpa duis sunt. Et quis aliquip
          aute eu cillum dolore aute ex nisi occaecat sunt sunt velit. Fugiat do
          aute amet eiusmod mollit qui nostrud culpa et mollit laborum. Ea
          exercitation consectetur cillum voluptate ipsum mollit pariatur.
          Eiusmod nostrud tempor sit consectetur. Do fugiat ea cupidatat aute ex
          consectetur. Cupidatat enim est non incididunt ullamco sit nisi. Eu
          sint qui Lorem sint culpa. Magna nulla ea minim eu et duis ea non ut
          dolore proident culpa duis sunt. Et quis aliquip aute eu cillum dolore
          aute ex nisi occaecat sunt sunt velit. Fugiat do aute amet eiusmod
          mollit qui nostrud culpa et mollit laborum. Ea exercitation
          consectetur cillum voluptate ipsum mollit pariatur. Eiusmod nostrud
          tempor sit consectetur.
        </div>
      </div>
      <div className="flex justify-center">
        <img src={aboutPhoto} className="w-[419px] h-[546px]" alt="aboutme" />
      </div>
    </div>
  );
};

export default AboutMe;
