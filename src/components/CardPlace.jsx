import { Link } from "react-router-dom"

const CardPlace = ({img, projectName, date}) => {
  return (
    <div className="relative cursor-pointer">
      <img className="md:w-screen xl:w-full w-screen" src={img} alt="imgPortfolio" />
      <div className="absolute top-0 h-full w-full bg-gradient-to-t from-black/60 to-black/0 hover:bg-white/60 transition-all duration-200"></div>
      <div className="absolute top-0 xl:mt-[470px] md:mt-[140px] mt-[180px] md:ml-10 ml-7 text-very-light-gray-arch">
        <div className="text-[32px] font-bold leading-none">{projectName}</div>
        <Link className="text-[18px]">{date}</Link>
      </div>
    </div>
  )
}

export default CardPlace