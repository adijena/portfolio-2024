import React from "react";
import { TypeAnimation } from "react-type-animation";
import {
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaDownload,
  FaGit,
  FaGithub,
  FaEnvelope,
} from "react-icons/fa";
import { SiCodeforces, SiLeetcode } from "react-icons/si";
import bgImg from "../assets/img2.png"
import resume from "../assets/AdityaJena.pdf"

const Home = () => {
  return (
    <div id="home">
      <img
        className="w-full h-screen object-fill "
        src={bgImg}
        alt=""
      />
      <div className="w-full h-screen absolute top-0 left-0 bg-white/50">
        <div className="m-8 md:ml-24 md:mr-12 h-full flex flex-col items-center justify-center lg:flex-row gap-8">
          <div className="min-w-fit flex flex-col items-center">
            <h1 className="sm:text-5xl text-4xl font-bold">Aditya Jena</h1>
            <h2 className="flex sm:text-3xl text-2xl font-semibold pt-4 text-gray-900">
              <TypeAnimation
                sequence={[
                  "Developer",
                  2000,
                  "Coder",
                  2000,
                  "Tech Enthusiast",
                  2000,
                ]}
                wrapper="div"
                cursor={true}
                repeat={Infinity}
                style={{ fontSize: "1em", paddingLeft: "5px" }}
              />
            </h2>
          </div>
          <div
            className="flex flex-col items-center lg:items-start gap-8
          lg:gap-12"
          >
            <p className="text-lg text-justify font-bold text-[#302b62]">
              Hello! I'm Aditya Jena I thrive on solving complex problems and
              bringing ideas to life through innovative solutions. Specializing
              in React.js for dynamic front-end experiences and Node.js for
              robust back-end development, I am passionate about crafting
              seamless, user-focused applications. With a commitment to clean
              code and continuous learning.
            </p>
            <div className="flex gap-8 text-blue-900">
              <a
                href="https://www.linkedin.com/in/aditya-jena-0748031b8/"
                target="_blank"
              >
                <FaLinkedinIn className="cursor-pointer" size={25} />
              </a>
              <a
                href="https://leetcode.com/anostargaryen/"
                target="_blank"
              >
                <SiLeetcode className="cursor-pointer" size={25} />
              </a>
              <a
                href="https://codeforces.com/profile/anostargaryen"
                target="_blank"
              >
                <SiCodeforces className="cursor-pointer" size={25} />
              </a>
              <a href="https://github.com/adijena" target="_blank">
                <FaGithub className="cursor-pointer" size={25} />
              </a>
              <a href="mailto:aditya23jena@gmail.com">
                <FaEnvelope className="cursor-pointer" size={25} />
              </a>
            </div>

            <button className="flex bg-[#3d3b2c] rounded-xl py-4 px-8 gap-4 font-semibold shadow-xl text-yellow-500   justify-center hover:text-yellow-700 w-[290px]"
            onClick={() => window.open(resume, '_blank')}
            >
              <span className="mt-1">
                <FaDownload size={24} />
              </span>
              RESUME
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
