import ProjectCard from "./ProjectCard";
import amazon from "../assets/amazon.png"
import shoe from "../assets/shoe.png"
import watch from "../assets/watch.png"
const Project = () => {
  return (
    <div className="w-full" id="projects">
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">Project</h1>
      <div className="flex flex-col md:flex-row items-center justify-center flex-wrap md:ml-10">
        <ProjectCard
          image={amazon}
          pname="IdeaCentral"
          ptech="ReactJs, AWS-UI component"
          pdesc="Designed and developed frontend for IdeaCentral project using ReactJs and AWS-UI components, creating a user-friendly platform enabling internal employees to submit ideas for managerial approval, optimizing workflow and idea processing."
        />
        <ProjectCard
          image={shoe}
          pname="ShoeMate"
          ptech="React, Tailwind CSS, Redux"
          pdesc="Built a dynamic shoe eCommerce web app with a responsive design, elevating the UI using Tailwind CSS. Incorporated Redux for efficient state management and data flow, ensuring optimal performance and seamless user interactions."
        />
        <ProjectCard
          image={watch}
          pname="BingeWatch"
          ptech="React, NodeJs, Express, JWT, MongoDB, Firebase"
          pdesc="Designed and developed a React-based video streaming app with Node.js for robust APIs, MongoDB for user and movie data, and Firebase for file storage. Integrated JWT authentication for security, and leveraged React Hooks and Context API for smooth frontend interactions."
        />
      </div>
    </div>
  );
};
export default Project;
