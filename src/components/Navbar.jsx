import logo from "../assets/logo-no-bg.png";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { SOCIALLINKS } from "../constants";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img className="w-10 mx-2" src={logo} alt="logo" />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a
          href={SOCIALLINKS.linkedin}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
        <a href={SOCIALLINKS.github} target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a
          href={SOCIALLINKS.instagram}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
