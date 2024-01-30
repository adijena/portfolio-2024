// #FBF7FF #FAF8FF 

// #FFF6F1 #FFF0EA

const EduCard = ({sname, course, mark, year}) => {
  return (
    <div className="p-6 rounded-2xl bg-[#FBFAF0] flex flex-col xl:flex-row justify-between m-2 gap-2  shadow-xl min-w-full">
      <div>
        <p className="font-bold text-lg">{sname}</p>
        <p className="italic text-xs">{course}</p>
      </div>
      <div>
        <p className="font-medium text-sm xl:text-right">
          {mark}
        </p>
        <p className="font-thin text-sm xl:text-right">{year}</p>
      </div>
    </div>
  )
}
export default EduCard