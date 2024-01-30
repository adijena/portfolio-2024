import EduCard from "./EduCard";
import Skill from "./Skill";
import { FaSass } from "react-icons/fa6";
import { SiC, SiCplusplus, SiExpress, SiFigma, SiMongodb, SiMysql, SiPostman, SiTailwindcss } from "react-icons/si";
import { FaCss3Alt, FaGitAlt, FaHtml5, FaNode, FaPython } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
import { SiFirebase } from "react-icons/si";
import { FaAws } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
// change education flex grow ...
const AboutMe = () => {
  return (
    <div className="w-full" id="aboutme">
      <h1 className="mt-8 text-4xl font-bold text-center text-[#001b5e]">
        About Me
      </h1>
      <div className="md:ml-16 m-4 p-4 ">
        <h2 className="font-semibold text-2xl ml-8 text-center md:text-start">
          Education
        </h2>
        <div className="flex flex-wrap">
          <EduCard
            sname="Veer Surendra Sai University Of Technology"
            course="Bachelor of Technology, Computer Science and Engineering"
            mark="CGPA of 8.01"
            year="2023"
          />
          <EduCard
            sname="Mahaprabhu Jagannath +2 Science Residential College"
            course="Intermediate"
            mark="Percentage of 78"
            year="2018"
          />
          <EduCard
            sname="Chilkarani English Medium School"
            course="Matriculation"
            mark="CGPA of 9.4"
            year="2016"
          />
        </div>
      </div>
      <div className="md:ml-16 m-4 p-4 ">
        <h2 className="font-semibold text-2xl ml-8 text-center md:text-start">
          Skills
        </h2>
        <div className="flex flex-wrap justify-center">
          <Skill
            icon={<SiC className="text-blue-600" size={50} />}
            name="C"
          />
          <Skill
            icon={<SiCplusplus className="text-blue-700" size={50} />}
            name="C++"
          />
          <Skill
            icon={<TbBrandJavascript className="text-yellow-600" size={50} />}
            name="Javascript"
          />
          <Skill
            icon={<FaReact className="text-blue-700" size={50} />}
            name="ReactJs"
          />
          <Skill
            icon={<FaNode  className="text-gray-900" size={50} />}
            name="NodeJs"
          />
          <Skill
            icon={<SiExpress className="text-gray-700" size={50} />}
            name="ExpressJs"
          />
          <Skill
            icon={<SiTailwindcss className="text-blue-700" size={50} />}
            name="Tailwind CSS"
          />
          <Skill
            icon={<FaHtml5  className="text-orange-800" size={50} />}
            name="HTML"
          />
          <Skill
            icon={<FaCss3Alt className="text-blue-700" size={50} />}
            name="CSS"
          />
          <Skill
            icon={<FaSass className="text-pink-700" size={50} />}
            name="SASS"
          />
          <Skill
            icon={<FaPython  className="text-yellow-400" size={50} />}
            name="Python"
          />
          <Skill
            icon={<SiMysql  className="text-blue-700" size={50} />}
            name="MySQL"
          />
          <Skill
            icon={<SiMongodb  className="text-green-700" size={50} />}
            name="MongoDB"
          />
          <Skill
            icon={<FaGitAlt  className="text-amber-800" size={50} />}
            name="GIT"
          />
          <Skill
            icon={<SiPostman  className="text-orange-400" size={50} />}
            name="Postman"
          />
          <Skill
            icon={<SiFigma  className="text-blue-700" size={50} />}
            name="Figma"
          />
          <Skill
            icon={<FaAws className="text-gray-600" size={50} />}
            name="AWS"
          />
          <Skill
            icon={<SiFirebase className="text-orange-400" size={50} />}
            name="Firebase"
          />
        </div>
        <div></div>
      </div>
    </div>
  );
};
export default AboutMe;
