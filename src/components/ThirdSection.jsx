import ThirdSectionDesk from '../assets/home/desktop/image-small-team.jpg'
import ThirdSectionTablet from '../assets/home/tablet/image-small-team.jpg'
import ThirdSectionMob from '../assets/home/mobile/image-small-team.jpg'
import { Link } from 'react-router-dom'

const ThirdSection = () => {
    return (
        <div className="2xl:mx-[396px] xl:mx-44 md:mx-24 mt-44 relative">
            <div className='absolute bg-black/50 w-full h-full z-10'></div>
            <img className='xl:block md:hidden hidden' src={ThirdSectionDesk} alt="ThirdDesk" />
            <img className='xl:hidden md:block hidden' src={ThirdSectionTablet} alt="ThirdSectionTablet" />
            <img className='md:hidden block w-screen' src={ThirdSectionMob} alt="ThirdSectionMob" />

            <div className='absolute top-0 z-10 xl:ml-[190px] md:ml-10 ml-10 md:mt-44 mt-56'>
                <div className='md:text-[70px] text-[50px] text-very-light-gray-arch font-bold md:w-[550px] leading-none'>Equipo pequeño, grandes ideas</div>
                <Link to={'/about'} className='text-very-light-gray-arch flex items-center gap-x-5 w-[170px] bg-very-dark-blue-arch py-5 px-8 mt-5 hover:bg-dark-gray-arch transition-all duration-200'>Nosotros
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="20"><g fill="none" fillRule="evenodd" stroke="#ffffff" strokeWidth="2"><path d="M15 1l9 9-9 9M0 10h24" /></g></svg>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default ThirdSection