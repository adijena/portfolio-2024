const ProjectCard = ({ pname, ptech, pdesc, image }) => {
  return (
    // 353839
    <div className="bg-slate-200 rounded-2xl flex flex-col p-6 m-4 max-w-md gap-2">
      <img src={image} alt="project image" 
      className="max-h-48 rounded-2xl object-cover"/>
      <div className="">
        <p className="text-2xl font-bold">{pname}</p>
        <p className="text-sm italic font-light">{ptech}</p>
      </div>
      <p className="text-xs text-justify">{pdesc}</p>
    </div>
  );
};

export default ProjectCard;
