import React, { useState } from "react";
import {
  AiOutlineMenu,
  AiOutlineHome,
  AiOutlineProject,
  AiOutlineMail,
} from "react-icons/ai";
import { BsPerson } from "react-icons/bs";
import { GrProjects } from "react-icons/gr";
import { MdOutlineClose } from "react-icons/md";
import { Link } from "react-scroll";

const Sidenav = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div>
      {nav ? (
        <MdOutlineClose
          onClick={handleNav}
          className="fixed top-4 right-4 z-[99] md:hidden"
        />
      ) : (
        <AiOutlineMenu
          onClick={handleNav}
          className="fixed top-4 right-4 z-[99] md:hidden"
        />
      )}
      {nav ? (
        <div className="fixed w-full h-screen bg-white/90 flex flex-col justify-center items-center z-20">
          <Link
            to="home"
            spy={true}
            smooth={true}
            duration={500}
            onClick={handleNav}
            className="w-[75%] flex justify-center items-center rounded-full shadow-md bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <AiOutlineHome size={20} />
            <span className="pl-4">Home</span>
          </Link>
          <Link
            to="aboutme"
            spy={true}
            smooth={true}
            duration={500}
            onClick={handleNav}
            className="w-[75%] flex justify-center items-center rounded-full shadow-md bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <BsPerson size={20} />
            <span className="pl-4">About</span>
          </Link>

          <Link
            to="work"
            spy={true}
            smooth={true}
            duration={500}
            onClick={handleNav}
            className="w-[75%] flex justify-center items-center rounded-full shadow-md bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <GrProjects size={20} />
            <span className="pl-4">Work</span>
          </Link>

          <Link
            to="projects"
            spy={true}
            smooth={true}
            duration={500}
            onClick={handleNav}
            className="w-[75%] flex justify-center items-center rounded-full shadow-md bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <AiOutlineProject size={20} />
            <span className="pl-4">Projects</span>
          </Link>

          <Link
            to="contact"
            spy={true}
            smooth={true}
            duration={500}
            onClick={handleNav}
            className="w-[75%] flex justify-center items-center rounded-full shadow-md bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <AiOutlineMail size={20} />
            <span className="pl-4">Contact</span>
          </Link>
        </div>
      ) : (
        ""
      )}

      {/* large screen */}
      <div className="p-1 bg-gray-100 shadow-lg shadow-gray-400 md:block hidden fixed top-[30%] z-10 rounded-r-2xl">
        <div className="flex flex-col gap-2">
          <Link
            to="home"
            spy={true}
            smooth={true}
            duration={500}
            className="p-4 cursor-pointer group relative"
          >
            <AiOutlineHome size={25} />
            <span className="font-medium text-white text-xs uppercase bg-slate-700 p-2 rounded-xl absolute left-0 top-3 translate-x-8 group-hover:translate-x-12 opacity-0 group-hover:opacity-100 transition-all duration-300 z-20">
              Home
            </span>
          </Link>
          <Link
            to="aboutme"
            spy={true}
            smooth={true}
            duration={500}
            className="p-4 cursor-pointer group relative"
          >
            <BsPerson size={25} />
            <span className="font-medium text-white text-xs uppercase bg-slate-700 p-2 rounded-xl absolute left-0 top-3 translate-x-8 group-hover:translate-x-12 opacity-0 group-hover:opacity-100 transition-all duration-300 z-20">
              About
            </span>
          </Link>
          <Link
            to="work"
            spy={true}
            smooth={true}
            duration={500}
            className="p-4 cursor-pointer group relative"
          >
            <GrProjects size={25} />
            <span className="font-medium text-white text-xs uppercase bg-slate-700 p-2 rounded-xl absolute left-0 top-3 translate-x-8 group-hover:translate-x-12 opacity-0 group-hover:opacity-100 transition-all duration-300 z-20">
              Work
            </span>
          </Link>
          <Link
            to="projects"
            spy={true}
            smooth={true}
            duration={500}
            className="p-4 cursor-pointer group relative"
          >
            <AiOutlineProject size={25} />
            <span className="font-medium text-white text-xs uppercase bg-slate-700 p-2 rounded-xl absolute left-0 top-3 translate-x-8 group-hover:translate-x-12 opacity-0 group-hover:opacity-100 transition-all duration-300 z-20">
              Projects
            </span>
          </Link>

          <Link
            to="contact"
            spy={true}
            smooth={true}
            duration={500}
            className="p-4 cursor-pointer group relative"
          >
            <AiOutlineMail size={25} />
            <span className="font-medium text-white text-xs uppercase bg-slate-700 p-2 rounded-xl absolute left-0 top-3 translate-x-8 group-hover:translate-x-12 opacity-0 group-hover:opacity-100 transition-all duration-300 z-20">
              Contact
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidenav;
