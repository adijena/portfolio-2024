import WorkCard from "./WorkCard"

const Work = () => {
  return (
    <div className="w-full" id="work">
    <h1 className="text-4xl font-bold text-center text-[#001b5e]">Experience</h1>
    <div className="flex flex-col md:flex-row items-center justify-center md:md:ml-16">
    <WorkCard />
    </div>
    </div>
  )
}
export default Work