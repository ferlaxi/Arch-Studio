import secondSectionDesk from '../assets/home/desktop/image-welcome.jpg'

const SecondSection = () => {
  return (
    <div className="flex relative 2xl:mx-[396px] xl:mx-44 md:mx-24 mx-8 md:mt-56 mt-44 xl:gap-x-20 justify-end">
        <div className='md:block hidden absolute xl:text-[230px] md:text-[125px] text-very-light-gray-arch left-0 md:-mt-44'>Bienvenido</div>
        <div className='md:hidden block absolute border-b-2 border-b-light-gray-arch w-16 left-0 -mt-16'></div>
        <div className='xl:mt-20'>
            <div className='font-bold text-[50px] md:text-[72px] xl:w-[500px] leading-none text-very-dark-blue-arch'>Bienvenido a Arch Studio</div>
            <div className='flex flex-col gap-y-7 text-[16px] text-dark-gray-arch md:mt-7 mt-7'>
                <div className='xl:w-[500px]'>Contamos con una red única y un conjunto de habilidades para ayudarlo a hacer realidad sus proyectos. Nuestro pequeño equipo de personas altamente capacitadas combinado con nuestra gran red nos colocan en una posición sólida para ofrecer resultados excepcionales.</div>
                <div className='xl:w-[500px]'>Durante los últimos 10 años hemos trabajado en todo tipo de proyectos. Desde estaciones hasta edificios de gran altura, creamos espacios que inspiran y deleitan.</div>
                <div className='xl:w-[500px]'>Trabajamos estrechamente con nuestros clientes para comprender las complejidades de cada proyecto. Esto nos permite trabajar en armonía con el área circundante para crear proyectos verdaderamente impresionantes que resistirán la prueba del tiempo.</div>
            </div>
        </div>

        <div><img className='xl:block md:hidden hidden' src={secondSectionDesk} alt="secondSectionImg" /></div>
    </div>
  )
}

export default SecondSection