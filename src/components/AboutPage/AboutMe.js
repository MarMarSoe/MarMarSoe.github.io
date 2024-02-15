import aboutPhoto from "../../assets/about-photo.jpg";

const AboutMe = () => {
  return (
    <div className="container flex flex-row justify-between mx-auto mt-20">
      <div className="flex flex-col justify-start w-[700px]">
        <div className="font-semibold text-orange-600 text-3xl">About Me</div>
        <div className="mt-11 font-light w-full text-justify text-sm">
          In the gentle cadence of the past five years, my journey as a software
          engineer has been a quiet dance between the realms of frontend and
          backend development. The duality of my expertise has allowed me to
          navigate the intricate interplay between user interfaces and the
          resilient foundations that support them. The first three years found
          me immersed in the burgeoning tech landscape of Myanmar. Amidst the
          vibrant tapestry of local projects and diverse collaborations, I
          embraced the delicate artistry of crafting frontend experiences and
          the meticulous architecture of backend systems. It was a time of
          growth and discovery, as I cultivated a profound understanding of the
          nuanced challenges within the realm of software engineering. The
          subsequent two years unfolded in the tranquil embrace of Japan, a
          country where technological innovation converges with a sense of
          timeless precision. Here, amidst the serene amalgamation of tradition
          and progress, I delved deeper into the subtleties of both frontend and
          backend development. The Japanese ethos of perfection in craftsmanship
          subtly influenced my work, urging me to refine my skills with a quiet
          dedication. As the seasons of my professional journey change, so too
          do my aspirations. A calm whisper within me foretells a desire to
          specialize in frontend development. The prospect of weaving elegant
          and intuitive interfaces resonates deeply with my evolving sense of
          purpose. The tranquil rhythm of pixels aligning on a canvas feels like
          a natural progression, a contemplative path forward. Looking ahead, I
          see the future unfolding gently, like cherry blossoms drifting on a
          spring breeze. My intent is to embrace the artistry of frontend
          development, to distill simplicity from complexity, and to create
          digital landscapes that evoke a sense of quiet beauty. In this
          evolving narrative of my career, I find solace in the thought that
          each line of code can be a brushstroke, contributing to a serene
          masterpiece of user experiences.
        </div>
      </div>
      <div className="flex justify-center">
        <img src={aboutPhoto} className="w-[419px] h-[546px]" alt="aboutme" />
      </div>
    </div>
  );
};

export default AboutMe;
