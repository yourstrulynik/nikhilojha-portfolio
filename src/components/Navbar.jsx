import { useState } from "react";
import logo from "../assets/icons/N.png";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { Link } from "react-scroll";

export default function Navbar() {
  const [nav, setNav] = useState(false);

  const handleClick = () => setNav(!nav);

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 ">
      <div>
        <img src={logo} alt="Logo  Image" style={{ width: "50px" }} />
      </div>

      {/* Menu */}

      <ul className="hidden md:flex">
        <li>
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li>
          <Link to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li>
          <Link to="work" smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile Menu */}
      <ul
        // using bg to hide everything behind when the menu appears
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen flex flex-col justify-center items-center bg-white"
        }
      >
        <li className="py-6 text-4xl">
          <Link to="home" smooth={true} duration={500} onClick={handleClick}>
            Home
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link to="about" smooth={true} duration={500} onClick={handleClick}>
            About
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link to="skills" smooth={true} duration={500} onClick={handleClick}>
            Skills
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link to="about" smooth={true} duration={500} onClick={handleClick}>
            About
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link to="contact" smooth={true} duration={500} onClick={handleClick}>
            Contact
          </Link>
        </li>
        <ol className="flex flex-row mt-4">
          <li>
            <a
              href="https://www.linkedin.com/in/nikhil-ojha-108388229/"
              target="_blank"
              rel=" noopener noreferrer"
            >
              <FaLinkedin size={20} />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/yourstrulynik"
              target="_blank"
              rel=" noopener noreferrer"
            >
              <FaGithub size={20} />
            </a>
          </li>
          <li>
            <a
              href="mailto:nikhilojha05@gmail.com"
              target="_blank"
              rel=" noopener noreferrer"
            >
              <HiOutlineMail size={20} />
            </a>
          </li>
          <li>
            <a
              href="https://www.dropbox.com/scl/fo/6j5z4pd4at7mudtg18bw7/AHw6lFesgEqXXA1_41oT29o?rlkey=gh031qopkqflzfzqwndd8tivj&st=c3mk175p&dl=0"
              target="_blank"
              rel=" noopener noreferrer"
            >
              <BsFillPersonLinesFill size={20} />
            </a>
          </li>
        </ol>
      </ul>

      {/* Social Icons */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600 ">
            <a
              className="flex justify-between items-center w-full text-white"
              href="https://www.linkedin.com/in/nikhil-ojha-108388229/"
              target="_blank"
              rel=" noopener noreferrer"
            >
              LinkedIn <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-gray-600 ">
            <a
              className="flex justify-between items-center w-full text-white"
              href="https://github.com/yourstrulynik"
              target="_blank"
              rel=" noopener noreferrer"
            >
              GitHub <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-green-300 ">
            <a
              className="flex justify-between items-center w-full text-white"
              href="mailto:nikhilojha05@gmail.com"
            >
              E mail <HiOutlineMail size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-gray-900 ">
            <a
              className="flex justify-between items-center w-full text-white"
              href="https://www.dropbox.com/scl/fo/6j5z4pd4at7mudtg18bw7/AHw6lFesgEqXXA1_41oT29o?rlkey=gh031qopkqflzfzqwndd8tivj&st=c3mk175p&dl=0"
              target="_blank"
              rel=" noopener noreferrer"
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
