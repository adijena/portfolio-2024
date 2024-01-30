import { AiFillAmazonCircle } from "react-icons/ai";
const WorkCard = () => {
  return (
    <div className="p-2 rounded-2xl bg-[#FBFAF0] flex-col m-6">
      <div className="flex gap-4 group">
      <AiFillAmazonCircle 
          className="h-24 w-24 ml-8 mt-4 rounded-full transition group-hover:scale-[110%] text-orange-600"
        />
        <div className="grid content-center mt-4">
          <div className="text-xl font-semibold">Amazon</div>
          <div className="italic text-sm font-light">
            Support Engineer Intern
          </div>
          <div className="text-sm font-light">Jan 2023 - June 2023</div>
        </div>
      </div>
      <div className="border-b-2 w-[88%] mx-auto mt-4"></div>
      <ul className="list-disc mx-10 mt-4 mb-4 text-xs text-justify">
        <li>
          Designed and developed frontend for IdeaCentral project using ReactJs
          and AWS-UI components, creating a user-friendly platform enabling
          internal employees to submit ideas for managerial approval, optimizing
          workflow and idea processing.
        </li>
        <li>
          Devised Python and Tampermonkey (JavaScript) scripts to automate
          multifaceted tasks, cutting task time by 5-7 minutes each, which led
          to efficient workflow optimization.
        </li>
        <li>
          Identified and resolved software risks, including dependencies,
          package upgrades, deployment failures, policy risks, etc through
          effective troubleshooting and mitigation
        </li>
      </ul>
      <div className="mx-3 mb-2 bg-[#f8f5c3] rounded-2xl p-3 text-xs"> <b>SKILL: </b> 
      <span className="italic">ReactJs, AWS-UI component, Javascript, Python, TamperMonkey, Troubleshooting, AWS</span>
      </div>
    </div>
  );
};
export default WorkCard;