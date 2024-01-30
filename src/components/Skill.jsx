const Skill = ({icon, name}) => {
  return (
    <div className="bg-[#F9F1F0] rounded-2xl shadow-xl m-4 p-2
    h-24 w-24 flex flex-col items-center justify-center gap-2">
        <div>{icon}</div>
        <p className="font-medium text-center text-xs">{name}</p>
    </div>
  )
}
export default Skill