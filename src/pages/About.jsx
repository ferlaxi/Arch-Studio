import React from 'react'
import Nav from '../components/Nav'
import People from '../components/People'
import aboutdesk1 from '../assets/about/desktop/image-hero.jpg'
import aboutdesk2 from '../assets/about/desktop/image-heritage.jpg'
import abouttab1 from '../assets/about/tablet/image-hero.jpg'
import aboutmob1 from '../assets/about/mobile/image-hero.jpg'
import people1 from '../assets/about/desktop/avatar-jake.jpg'
import people2 from '../assets/about/desktop/avatar-thompson.jpg'
import people3 from '../assets/about/desktop/avatar-jackson.jpg'
import people4 from '../assets/about/desktop/avatar-maria.jpg'
import Footer from '../components/Footer'
import { ScrollRestoration } from 'react-router-dom'

const About = () => {
  return (
    <>
      <div className='relative'>
        <Nav />
        <div className="md:block hidden absolute">
          <div className="border-b-2 w-32 -mt-24 rotate-90 xl:ml-3 md:-ml-5"></div>
          <div className="rotate-90 mt-[222px] text-[24px] text-light-gray-arch tracking-[14px] xl:-ml-10 md:-ml-[75px]">NOSOTROS</div>
        </div>

        <div className='relative 2xl:mx-[396px] xl:mx-44 md:mx-24'>
          <div className='relative w-max'>
            <div className='absolute w-full h-full bg-black/40'></div>
            <img className='xl:block md:hidden hidden' src={aboutdesk1} alt="aboutdesk1" />
            <img className='md:block xl:hidden hidden' src={abouttab1} alt="abouttab1" />
            <img className='md:hidden w-screen' src={aboutmob1} alt="aboutmob1" />
          </div>

          <div className='absolute bottom-0 md:right-0 xl:w-[600px] md:w-[500px] w-[380px] h-[320px] md:-mb-0 -mb-[280px] md:h-[490px] bg-white'>
            <div className='absolute md:block hidden xl:text-[230px] md:text-[120px] text-very-light-gray-arch xl:-ml-72 xl:-mt-36 md:-mt-16 font-bold'>Nosotros</div>
            <div className='absolute flex flex-col gap-y-10 md:bottom-0 right-0 md:w-[450px] ml-10 mt-10'>
              <div className='md:block hidden border-b-[1px] w-12'></div>
              <div className='md:text-[60px] text-[50px] font-bold leading-none'>Tu equipo de profesionales</div>
              <div className='text-medium-gray-arch'>Nuestro pequeño equipo de profesionales de clase mundial trabajará con usted en cada paso del camino. Las relaciones sólidas son el núcleo de todo lo que hacemos. Esto se extiende a la relación que tienen nuestros proyectos con su entorno.</div>
            </div>
          </div>
        </div>

        <div className='flex md:mt-36 2xl:mx-[396px] md:mx-44 mx-8 mt-[340px] xl:w-[70rem] md:w-full w-[200px]'>
          <div className='md:w-1/3 w-1/2'>
            <div className='flex flex-col md:gap-y-7 gap-y-7 h-full justify-between bottom-0 right-0 md:w-[450px]'>
              <div className='border-b-[1px] w-12'></div>
              <div className='text-[60px] font-bold leading-none'>Nuestra Herencia</div>
              <div className='flex flex-col gap-y-5 text-medium-gray-arch w-[350px]'>
                <div>Fundada en 2007, comenzamos como un trío de arquitectos. Nuestras habilidades complementarias y nuestra incesante atención al detalle convirtieron a Arch en una de las firmas boutique más buscadas del país.</div>
                <div>Especializarnos en Diseño Urbano nos permitió enfocarnos en crear estructuras excepcionales que vivan en armonía con su entorno. Consideramos cada detalle de cada elemento circundante para informar nuestros diseños.</div>
                <div>Nuestro pequeño equipo de profesionales de clase mundial brinda información sobre cada proyecto.</div>
              </div>
            </div>
          </div>

          <img className='2xl:ml-[197px] xl:ml-[155px] xl:block md:hidden hidden' src={aboutdesk2} alt="aboutdesk2" />

        </div>

        <div className='flex xl:flex-row md:flex-col flex-col mx-8 2xl:mx-[396px] xl:mx-44 md:mx-24 mt-44 justify-between'>
          <div className='text-[60px] font-bold leading-none w-[200px]'>Los Lideres</div>

          <div className='flex flex-wrap gap-y-12 justify-between xl:w-2/3 md:mt-10 mt-12'>
            <People img={people1} namePerson="Jake Richards" desc="Jefe Arquitecto" />
            <People img={people2} namePerson="Thompson Smith" desc="Jefe de finanzas" />
            <People img={people3} namePerson="Jackson Rourke" desc="Diseñador encargado" />
            <People img={people4} namePerson="Maria Simpson" desc="Arquitecta Senior" />
          </div>
        </div>

        <Footer />
      </div>
      <ScrollRestoration />
    </>
  )
}

export default About