import { FaDisplay } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="flex w-full items-center justify-center gap-4 bg-black py-8 text-white">
      <p>
        Copyright &copy; {new Date().getFullYear()} Thabo Gulu. All rights are
        reserved
      </p>
      <a
        href="https://websiteby.thabogulu.com/"
        target="_blank"
        rel="noreferrer"
        className="text-xl"
      >
        <FaDisplay />
      </a>
    </footer>
  );
};

export default Footer;
