import { useEffect, useState } from 'react'
import desk1 from '../assets/home/desktop/image-hero-paramour.jpg'
import desk2 from '../assets/home/desktop/image-hero-seraph.jpg'
import desk3 from '../assets/home/desktop/image-hero-federal.jpg'
import desk4 from '../assets/home/desktop/image-hero-trinity.jpg'
import { Link } from 'react-router-dom'
import tablet1 from '../assets/home/tablet/image-hero-paramour.jpg'
import mob1 from '../assets/home/mobile/image-hero-paramour.jpg'

const MainSlide = () => {
    const [active, setActive] = useState(0);

    useEffect(() => {
        let links = document.getElementsByClassName("link");
        for (let i = 0; i < links.length; i++) {
            links[i].addEventListener("click", () => {
                let current = document.getElementsByClassName("active");
                if (current.length > 0) {
                    current[0].className = current[0].className.replace(
                        " active",);
                }
                links[i].className += " active";
                setActive(i)
            });
        }
    }, []);


    return (
        <>
            {/* mobile */}
            <div className="md:hidden xl:hidden w-screen h-[38.5rem] relative bg-black/40">
                <div className='absolute w-full -z-10'><img className='w-full' src={mob1} alt="mob1" /></div>
                <div className='absolute flex flex-col gap-y-5 pt-40 ml-20'>
                    <div className='text-very-light-gray-arch text-[60px] font-bold w-[300px] leading-none'>Project Paramour</div>
                    <div className='text-very-light-gray-arch w-[300px]'>Proyecto realizado para un museo de arte cerca del suroeste de Londres. Project Paramour es una declaración de arquitectura moderna y audaz.</div>
                    <Link className='text-very-light-gray-arch flex items-center gap-x-5 w-[255px] bg-very-dark-blue-arch py-5 px-8 mt-5 hover:bg-dark-gray-arch transition-all duration-200'>Vea Nuestro Portfolio
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="20"><g fill="none" fillRule="evenodd" stroke="#ffffff" strokeWidth="2"><path d="M15 1l9 9-9 9M0 10h24" /></g></svg>
                        </div>
                    </Link>
                </div>
            </div>
            
            {/* tablet */}
            <div className="md:flex xl:hidden hidden md:mx-24 md:h-[45rem] w-[35.9rem] relative md:mt-7 md:bg-black/40">
                <div className='absolute md:-z-10'><img src={tablet1} alt="tablet1" /></div>
                <div className='absolute md:ml-14 flex md:flex-col gap-y-5 pt-48'>
                    <div className='text-very-light-gray-arch text-[80px] font-bold w-[300px] leading-none'>Project Paramour</div>
                    <div className='text-very-light-gray-arch w-[400px] text-[18px]'>Proyecto realizado para un museo de arte cerca del suroeste de Londres. Project Paramour es una declaración de arquitectura moderna y audaz.</div>
                    <Link className='text-very-light-gray-arch flex items-center gap-x-5 w-[265px] bg-very-dark-blue-arch py-5 px-8 mt-5 hover:bg-dark-gray-arch transition-all duration-200'>Vea Nuestro Portfolio
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="20"><g fill="none" fillRule="evenodd" stroke="#ffffff" strokeWidth="2"><path d="M15 1l9 9-9 9M0 10h24" /></g></svg>
                        </div>
                    </Link>
                </div>
            </div>

            {/* laptop */}
            <div className='xl:block md:hidden hidden'>
                {
                    active == 0 ? (
                        <div className="2xl:mx-[396px] 2xl:h-[45rem] xl:mx-44 xl:h-[43.5rem] relative xl:mt-7 xl:bg-black/40 transition-all duration-300">
                            <div className='absolute xl:-z-10'><img src={desk1} alt="desk1" /></div>
                            <div className='flex xl:flex-col gap-y-5 ml-44 pt-48'>
                                <div className='text-very-light-gray-arch text-[80px] font-bold w-[300px] leading-none'>Project Paramour</div>
                                <div className='text-very-light-gray-arch w-[400px] text-[18px]'>Proyecto realizado para un museo de arte cerca del suroeste de Londres. Project Paramour es una declaración de arquitectura moderna y audaz.</div>
                                <Link to={'/portfolio'} className='text-very-light-gray-arch flex items-center gap-x-5 w-[265px] bg-very-dark-blue-arch py-5 px-8 mt-5 hover:bg-dark-gray-arch transition-all duration-200'>Vea Nuestro Portfolio
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="20"><g fill="none" fillRule="evenodd" stroke="#ffffff" strokeWidth="2"><path d="M15 1l9 9-9 9M0 10h24" /></g></svg>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    ) : active == 1 ? (
                        <div className=" 2xl:mx-[396px] 2xl:h-[45rem] xl:mx-44 xl:h-[43.5rem] relative xl:mt-7 xl:bg-black/40">
                            <div className='absolute xl:-z-10'><img src={desk2} alt="desk2" /></div>
                            <div className='flex xl:flex-col gap-y-5 ml-44 pt-48'>
                                <div className='text-very-light-gray-arch text-[80px] font-bold w-[300px] leading-none'>Seraph Station</div>
                                <div className='text-very-light-gray-arch w-[400px] text-[18px]'>El proyecto Seraph Station nos retó a diseñar una estación única que transportara personas a través del tiempo. El resultado es un modelo fresco y futurista inspirado en las estaciones espaciales.</div>
                                <Link to={'/portfolio'} className='text-very-light-gray-arch flex items-center gap-x-5 w-[265px] bg-very-dark-blue-arch py-5 px-8 mt-5 hover:bg-dark-gray-arch transition-all duration-200'>Vea Nuestro Portfolio
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="20"><g fill="none" fillRule="evenodd" stroke="#ffffff" strokeWidth="2"><path d="M15 1l9 9-9 9M0 10h24" /></g></svg>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    ) : active == 2 ? (
                        <div className=" 2xl:mx-[396px] 2xl:h-[45rem] xl:mx-44 xl:h-[43.5rem] relative xl:mt-7 xl:bg-black/40">
                            <div className='absolute xl:-z-10'><img src={desk3} alt="desk3" /></div>
                            <div className='flex xl:flex-col gap-y-5 ml-44 pt-48'>
                                <div className='text-very-light-gray-arch text-[80px] font-bold w-[340px] leading-none'>Federal II Tower</div>
                                <div className='text-very-light-gray-arch w-[400px] text-[18px]'>Un proyecto temático secuela para una torre construida originalmente en el siglo XIX. Lo logramos con una apariencia llamativa de minimalismo brutal con toques modernos.</div>
                                <Link to={'/portfolio'} className='text-very-light-gray-arch flex items-center gap-x-5 w-[265px] bg-very-dark-blue-arch py-5 px-8 mt-5 hover:bg-dark-gray-arch transition-all duration-200'>Vea Nuestro Portfolio
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="20"><g fill="none" fillRule="evenodd" stroke="#ffffff" strokeWidth="2"><path d="M15 1l9 9-9 9M0 10h24" /></g></svg>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    ) : active == 3 ? (
                        <div className="2xl:mx-[396px] 2xl:h-[45rem] xl:mx-44 xl:h-[43.5rem] relative xl:mt-7 xl:bg-black/40">
                            <div className='absolute xl:-z-10'><img src={desk4} alt="desk4" /></div>
                            <div className='flex xl:flex-col gap-y-5 ml-44 pt-40'>
                                <div className='text-very-light-gray-arch text-[80px] font-bold w-[430px] leading-none'>Trinity Bank Tower</div>
                                <div className='text-very-light-gray-arch w-[430px] text-[18px]'>Trinity Bank nos retó a crear un concepto para un edificio de 84 pisos ubicado en medio de una ciudad con una alta frecuencia de terremotos. Para este proyecto utilizamos curvas para combinar diseño y estabilidad para cumplir nuestros objetivos.</div>
                                <Link to={'/portfolio'} className='text-very-light-gray-arch flex items-center gap-x-5 w-[265px] bg-very-dark-blue-arch py-5 px-8 mt-5 hover:bg-dark-gray-arch transition-all duration-200'>Vea Nuestro Portfolio
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="20"><g fill="none" fillRule="evenodd" stroke="#ffffff" strokeWidth="2"><path d="M15 1l9 9-9 9M0 10h24" /></g></svg>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    ) : (
                        <></>
                    )
                }

                <div className='flex relative -mt-[88px] md:ml-[97px] 2xl:ml-[317px] z-10'>
                    <Link className={`link cursor-pointer p-8 font-bold active bg-white z-10 ${({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""}`}>01</Link>
                    <Link className={`link cursor-pointer p-8 font-bold bg-white z-10 ${({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""}`}>02</Link>
                    <Link className={`link cursor-pointer p-8 font-bold bg-white z-10 ${({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""}`}>03</Link>
                    <Link className={`link cursor-pointer p-8 font-bold bg-white z-10 ${({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""}`}>04</Link>
                </div>
            </div>
        </>
    )
}

export default MainSlide