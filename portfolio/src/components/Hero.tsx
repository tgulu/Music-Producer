import cameron5 from "../assets/img/studiosession/cameron5.webp";
import { FaInstagram, FaLinkedin } from "react-icons/fa6";

const Hero = () => {
  return (
    <div
      className="relative h-screen w-full bg-cover bg-bottom bg-no-repeat tablet:bg-position-[82%_center]"
      style={{ backgroundImage: `url(${cameron5})` }}
    >
      <div className="absolute bottom-10 left-1/2 w-full max-w-8xl -translate-x-1/2 px-6 text-center xs:bottom-6">
        <h3 className="flex flex-col items-center gap-4 text-lg lg:text-4xl text-white sm:flex-row sm:justify-center ">
          <span className="bg-black/20 ">
            Producer and mixer based in Brighton, UK
          </span>
          <span className="flex gap-4 text-2xl">
            <a
              href="https://www.instagram.com/cameronnesbitt"
              target="_blank"
              rel="noreferrer"
              className="transition-all duration-500 hover:scale-125 hover:text-gray-300"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.linkedin.com/in/cameron-nesbitt-b0b3a7222/"
              target="_blank"
              rel="noreferrer"
              className="transition-all duration-500 hover:scale-125 hover:text-gray-300"
            >
              <FaLinkedin />
            </a>
          </span>
        </h3>
      </div>
    </div>
  );
};

export default Hero;
