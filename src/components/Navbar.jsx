import React from "react";
import { FiSun } from "react-icons/fi";
import { GiMoon } from "react-icons/gi";
import { BiMenu } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = ({ darkMode, isOpen, toggleMenu, toggleTheme }) => {
  return (
    <div className="px-0 2xl:px-40">
      <div className="w-full items-center justify-between py-4 px-10">
        <div className="flex items-center justify-between w-full">
          <a
            href="/"
            className="text-2xl font-bold text-blue-500 cursor-pointer"
          >
            Portfolio
          </a>
          <ul className="hidden md:flex gap-10 text-lg text-slate-800 dark:text-gray-200">
            <li className="cursor-pointer hover:text-blue-500 ">
              <a href="#home">Home</a>
            </li>
            <li className="cursor-pointer hover:text-blue-500 ">
              <a href="#about">About</a>
            </li>

            <li className="cursor-pointer hover:text-blue-500 ">
              <a href="#skills">Skills</a>
            </li>
            <li className="cursor-pointer hover:text-blue-500 ">
              <a href="#projects">Projects</a>
            </li>
            <li className="cursor-pointer hover:text-blue-500 ">
              <a href="#contacts">Contacts</a>
            </li>
          </ul>
          <button onClick={toggleTheme} className="p-2">
            {darkMode ? (
              <FiSun size={20} color={"white"} />
            ) : (
              <GiMoon size={20} color={"gray"} />
            )}
          </button>
          <div className="md:hidden">
            <button
              type="button"
              className=""
              aria-controls=",online-menu"
              aria-expanded="false"
              onClick={toggleMenu}
            >
              <BiMenu
                size={26}
                className={`${
                  isOpen ? "hidden" : "block"
                } text-gray-700 dark:text-gray-300`}
              />
              <AiOutlineClose
                size={24}
                className={`${
                  isOpen ? "block" : "hidden"
                } h-6 w-6 dark:text-gray-400`}
              />
            </button>
          </div>
        </div>
        {/*Mobile menu */}
        <div
          className={`${isOpen ? "block pt-4" : "hidden"} md:hidden`}
          id="mobile-menu"
        >
          <div className="flex flex-col gap-4 text-md text-gray-700 dark:text-neutral-200">
            <a href="#home" onClick={toggleMenu} className="cursor-pointer">
              Home
            </a>
            <a href="#about" onClick={toggleMenu} className="cursor-pointer">
              About
            </a>
            <a href="#skills" onClick={toggleMenu} className="cursor-pointer">
              Skills
            </a>
            <a href="#projects" onClick={toggleMenu} className="cursor-pointer">
              Projects
            </a>
            <a href="#contacts" onClick={toggleMenu} className="cursor-pointer">
              Contacts
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;