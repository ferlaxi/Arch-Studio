import { Link } from "react-router-dom"
import featured1desk from '../assets/portfolio/desktop/image-del-sol.jpg'
import featured2desk from '../assets/portfolio/desktop/image-228b.jpg'
import featured3desk from '../assets/portfolio/desktop/image-prototype.jpg'
import featured1Tablet from '../assets/portfolio/tablet/image-del-sol.jpg'
import featured2Tablet from '../assets/portfolio/tablet/image-228b.jpg'
import featured3Tablet from '../assets/portfolio/tablet/image-prototype.jpg'
import featured1Mob from '../assets/portfolio/mobile/image-del-sol.jpg'
import featured2Mob from '../assets/portfolio/mobile/image-228b.jpg'
import featured3Mob from '../assets/portfolio/mobile/image-prototype.jpg'


const Featured = () => {
    return (
        <div className="flex flex-col md:mt-44 mt-36 2xl:mx-[396px] xl:mx-44 md:mx-24 mx-8">
            <div className="md:hidden flex md:flex-row flex-col items-center justify-between">
                <div className="md:text-[72px] text-[50px] font-bold text-very-dark-blue-arch">Destacados</div>


                <div className="flex xl:flex-row md:flex-col flex-col md:gap-y-7 gap-y-7 justify-between mt-10">
                    <div className="relative">
                        <img className="xl:block md:hidden hidden" src={featured1desk} alt="featured1desk" />
                        <img className="xl:hidden md:block hidden" src={featured1Tablet} alt="featured1Tablet" />
                        <img className="md:hidden w-full" src={featured1Mob} alt="featured1Mob" />
                        <div className="md:block hidden absolute top-0 font-bold xl:ml-72 text-[230px] text-white/90 md:right-0">1</div>
                        <div className="absolute top-0 h-full w-full bg-gradient-to-t from-black/60 to-black/0"></div>
                        <div className="absolute top-0 xl:mt-[470px] md:mt-[150px] mt-[160px] ml-7 text-very-light-gray-arch">
                            <div className="text-[32px] font-bold leading-none">Project Del Sol</div>
                            <Link to={'/portfolio'} className="text-[18px]">Ver todos los proyectos</Link>
                        </div>
                    </div>
                    <div className="relative">
                        <img className="xl:block md:hidden hidden" src={featured2desk} alt="featured2desk" />
                        <img className="xl:hidden md:block hidden" src={featured2Tablet} alt="featured2Tablet" />
                        <img className="md:hidden w-full" src={featured2Mob} alt="featured2Mob" />
                        <div className="md:block hidden absolute top-0 font-bold xl:ml-[230px] text-[230px] text-white/90 md:right-0">2</div>
                        <div className="absolute top-0 h-full w-full bg-gradient-to-t from-black/60 to-black/0"></div>
                        <div className="absolute top-0 xl:mt-[470px] md:mt-[150px] mt-[160px] ml-7 text-very-light-gray-arch">
                            <div className="text-[32px] font-bold leading-none">Torre 228B</div>
                            <Link to={'/portfolio'} className="text-[18px]">Ver todos los proyectos</Link>
                        </div>
                    </div>
                    <div className="relative">
                        <img className="xl:block md:hidden hidden" src={featured3desk} alt="featured3desk" />
                        <img className="xl:hidden md:block hidden" src={featured3Tablet} alt="featured3Tablet" />
                        <img className="md:hidden w-full" src={featured3Mob} alt="featured3TMob" />
                        <div className="md:block hidden absolute top-0 font-bold xl:ml-[230px] text-[235px] text-white/90 md:right-0">3</div>
                        <div className="absolute top-0 h-full w-full bg-gradient-to-t from-black/60 to-black/0"></div>
                        <div className="absolute top-0 xl:mt-[470px] md:mt-[150px] mt-[160px] ml-7 text-very-light-gray-arch">
                            <div className="text-[32px] font-bold leading-none">Le Prototype</div>
                            <Link to={'/portfolio'} className="text-[18px]">Ver todos los proyectos</Link>
                        </div>
                    </div>
                </div>


                <Link className='text-very-light-gray-arch flex items-center gap-x-5 w-[19.5rem] pl-28 bg-very-dark-blue-arch py-6 mt-7 hover:bg-dark-gray-arch transition-all duration-200'>Ver Todos
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="20"><g fill="none" fillRule="evenodd" stroke="#ffffff" strokeWidth="2"><path d="M15 1l9 9-9 9M0 10h24" /></g></svg>
                    </div>
                </Link>
            </div>



            <div className="hidden md:flex xl:flex-col md:flex-col flex-col md:gap-y-7 gap-y-7 justify-between mt-10">
                <div className="flex justify-between">
                    <div className="xl:text-[72px] md:text-[60px] text-[50px] font-bold text-very-dark-blue-arch">Destacados</div>
                    <Link to={'/portfolio'} className='text-very-light-gray-arch flex items-center gap-x-5 w-[15rem] pl-16 bg-very-dark-blue-arch mt-7 hover:bg-dark-gray-arch transition-all duration-200'>Ver Todos
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="20"><g fill="none" fillRule="evenodd" stroke="#ffffff" strokeWidth="2"><path d="M15 1l9 9-9 9M0 10h24" /></g></svg>
                        </div>
                    </Link>
                </div>
                <div className="flex justify-between xl:flex-row md:flex-col gap-y-7">
                    <div className="relative">
                        <img className="xl:block md:hidden hidden" src={featured1desk} alt="featured1desk" />
                        <img className="xl:hidden md:block hidden" src={featured1Tablet} alt="featured1Tablet" />
                        <div className="md:block hidden absolute top-0 font-bold xl:ml-72 text-[230px] text-white/90 md:right-0">1</div>
                        <div className="absolute top-0 h-full w-full bg-gradient-to-t from-black/60 to-black/0"></div>
                        <div className="absolute top-0 xl:mt-[470px] md:mt-[150px] mt-[180px] ml-10 text-very-light-gray-arch">
                            <div className="text-[32px] font-bold leading-none">Project Del Sol</div>
                            <Link to={'/portfolio'} className="text-[18px]">Ver todos los proyectos</Link>
                        </div>
                    </div>
                    <div className="relative">
                        <img className="xl:block md:hidden hidden" src={featured2desk} alt="featured2desk" />
                        <img className="xl:hidden md:block hidden" src={featured2Tablet} alt="featured2Tablet" />
                        <div className="md:block hidden absolute top-0 font-bold xl:ml-[230px] text-[230px] text-white/90 md:right-0">2</div>
                        <div className="absolute top-0 h-full w-full bg-gradient-to-t from-black/60 to-black/0"></div>
                        <div className="absolute top-0 xl:mt-[470px] md:mt-[150px] mt-[180px] ml-10 text-very-light-gray-arch">
                            <div className="text-[32px] font-bold leading-none">Torre 228B</div>
                            <Link to={'/portfolio'} className="text-[18px]">Ver todos los proyectos</Link>
                        </div>
                    </div>
                    <div className="relative">
                        <img className="xl:block md:hidden hidden" src={featured3desk} alt="featured3desk" />
                        <img className="xl:hidden md:block hidden" src={featured3Tablet} alt="featured3Tablet" />
                        <div className="md:block hidden absolute top-0 font-bold xl:ml-[230px] text-[235px] text-white/90 md:right-0">3</div>
                        <div className="absolute top-0 h-full w-full bg-gradient-to-t from-black/60 to-black/0"></div>
                        <div className="absolute top-0 xl:mt-[470px] md:mt-[150px] mt-[180px] ml-10 text-very-light-gray-arch">
                            <div className="text-[32px] font-bold leading-none">Le Prototype</div>
                            <Link to={'/portfolio'} className="text-[18px]">Ver todos los proyectos</Link>
                        </div>
                    </div>  
                </div>
            </div>
        </div>
    )
}

export default Featured