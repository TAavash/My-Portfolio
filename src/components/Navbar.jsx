import logo from "../assets/logo-no-bg.png"; 
import logocolor from "../assets/logo-light.png"; 
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { SOCIALLINKS } from "../constants";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img 
          className="w-10 mx-2 dark:hidden" 
          src={logocolor} 
          alt="color logo" 
        />
        <img 
          className="w-10 mx-2 hidden dark:block" 
          src={logo} 
          alt="no bg logo" 
        />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a
          href="/Aavash Tamang Resume.pdf"
          download
          className="rounded-sm flex items-center justify-center 
                bg-gradient-to-r from-red-300 via-slate-500 to-purple-500 
                bg-clip-text text-3xl tracking-tight text-transparent light:from-blue-500 light:via-green-500 light:to-yellow-500 
                transition-transform transform hover:scale-110"
        >
          cv
        </a>
        <a
          href={SOCIALLINKS.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="transition-transform transform hover:scale-110 text-gray-900 dark:text-gray-100"
        >
          <FaLinkedin />
        </a>
        <a
          href={SOCIALLINKS.github}
          target="_blank"
          rel="noopener noreferrer"
          className="transition-transform transform hover:scale-110 text-gray-900 dark:text-gray-100"
        >
          <FaGithub />
        </a>
        <a
          href={SOCIALLINKS.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="transition-transform transform hover:scale-110 text-gray-900 dark:text-gray-100"
        >
          <FaInstagram />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
