import { useState } from "react";
import { Link } from "react-scroll";
import { useStickyHeader } from "../hooks/useStickyHeader";

const links = [
  { id: 1, to: "Home" },
  { id: 2, to: "Artist" },
  { id: 3, to: "Contact" },
];

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isSticky = useStickyHeader();

  const closeMenu = () => setIsOpen(false);
  const toggleMenu = () => setIsOpen((prev) => !prev);

  return (
    <header
      className={`fixed top-0 left-0 z-10000 flex w-full items-center justify-between text-white transition-all duration-500 ${
        isSticky
          ? "bg-linear-to-r from-black to-black/40 px-5 py-3"
          : "bg-transparent px-6 py-8"
      }`}
    >
      <Link
        to="Home"
        smooth
        duration={800}
        className="cursor-pointer text-xl font-semibold tracking-wide uppercase"
      >
        Cameron Nesbitt
      </Link>

      {/* Desktop Nav */}
      <ul className="hidden items-center gap-10 md:flex">
        {links.map(({ id, to }) => (
          <li key={id}>
            <Link
              to={to}
              smooth
              duration={800}
              className="relative cursor-pointer capitalize after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-white after:opacity-0 after:transition-all after:duration-700 hover:after:w-full hover:after:opacity-100"
            >
              {to}
            </Link>
          </li>
        ))}
      </ul>

      {/* Mobile Nav Toggle */}
      <div
        className="z-10001 flex h-6 w-8 cursor-pointer flex-col justify-between md:hidden"
        onClick={toggleMenu}
      >
        <span
          className={`h-0.75 w-full bg-white transition-all duration-300 ${
            isOpen ? "translate-y-2.5 rotate-45" : ""
          }`}
        />
        <span
          className={`h-0.75 w-full bg-white transition-all duration-300 ${
            isOpen ? "opacity-0" : ""
          }`}
        />
        <span
          className={`h-0.75 w-full bg-white transition-all duration-300 ${
            isOpen ? "-translate-y-2.5 -rotate-45" : ""
          }`}
        />
      </div>

      {/* Mobile Menu */}
      <ul
        className={`fixed top-0 flex h-screen w-full flex-col items-center justify-center gap-16 bg-black text-2xl uppercase transition-all duration-300 md:hidden ${
          isOpen ? "left-0" : "-left-full"
        }`}
      >
        {links.map(({ id, to }) => (
          <li key={id}>
            <Link
              to={to}
              smooth
              duration={800}
              onClick={closeMenu}
              className="cursor-pointer capitalize"
            >
              {to}
            </Link>
          </li>
        ))}
      </ul>
    </header>
  );
};

export default Nav;
