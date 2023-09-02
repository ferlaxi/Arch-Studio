import React, { useState } from 'react'
import { Link, ScrollRestoration } from 'react-router-dom'
import Nav from '../components/Nav'
import contactdeks1 from '../assets/contact/desktop/image-hero.jpg'
import contactdeks2 from '../assets/contact/desktop/image-map.png'
import contacttab1 from '../assets/contact/tablet/image-hero.jpg'
import contacttab2 from '../assets/contact/tablet/image-map.png'
import contactmob1 from '../assets/contact/mobile/image-hero.jpg'
import contactmob2 from '../assets/contact/mobile/image-map.png'
import Footer from '../components/Footer'

const Contact = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [msj, setMsj] = useState("")

  const [nameEmpty, setNameEmpty] = useState(0)
  const [emailEmpty, setEmailEmpty] = useState(0)
  const [msjEmpty, setMsjEmpty] = useState(0)

  const nameInput = (e) => {
    setName(e.target.value)
  }

  const emailInput = (e) => {
    setEmail(e.target.value)
  }

  const msjInput = (e) => {
    setMsj(e.target.value)
  }

  const check = () => {
    if (name == "") {
      setNameEmpty(1)
    } else {
      setNameEmpty(0)
    }

    if (email == "") {
      setEmailEmpty(1)
    } else {
      setEmailEmpty(0)
    }

    if (msj == "") {
      setMsjEmpty(1)
    } else {
      setMsjEmpty(0)
    }
  }

  return (
    <>
      <Nav />
      <div className="md:block hidden absolute">
        <div className="border-b-2 w-32 -mt-24 rotate-90 xl:ml-3 md:-ml-5"></div>
        <div className="rotate-90 mt-[222px] text-[24px] text-light-gray-arch tracking-[14px] xl:-ml-10 md:-ml-[70px]">CONTACTO</div>
      </div>

      <div className='relative 2xl:mx-[396px] xl:mx-44 md:mx-24'>
        <div className='relative w-max'>
          <div className='absolute w-full h-full bg-black/50'></div>
          <img className='xl:block md:hidden hidden' src={contactdeks1} alt="contactdesk1" />
          <img className='md:block xl:hidden hidden' src={contacttab1} alt="contacttab1" />
          <img className='md:hidden w-screen' src={contactmob1} alt="contactmob1" />
        </div>

        <div className='absolute bottom-0 md:right-0 xl:w-[600px] md:w-[500px] md:h-[490px] w-[380px] h-[320px] md:-mb-0 -mb-[280px] bg-white'>
          <div className='absolute md:block hidden xl:text-[230px] md:text-[120px] text-very-light-gray-arch xl:-ml-72 xl:-mt-36 md:-mt-20 font-bold'>Contacto</div>
          <div className='absolute flex flex-col gap-y-10 md:bottom-0 md:right-0 md:w-[450px] w-[300px] ml-7'>
            <div className='border-b-[1px] w-12'></div>
            <div className='md:text-[60px] text-[50px] font-bold leading-none'>Háblanos de tu proyecto</div>
            <div className='text-medium-gray-arch w-[330px]'>Nos encantaría saber más sobre su proyecto. Por favor, deje un mensaje a continuación o llámenos. Tenemos dos oficinas, una en Texas y otra en Tennessee. Si te encuentras cerca, ¡ven a saludarnos!</div>
          </div>
        </div>
      </div>

      <div className='2xl:mx-[396px] xl:mx-44 md:mx-24 md:mt-44 mt-96 mx-8'>
        <div className='border-b-[1px] w-12'></div>
      </div>

      <div className='flex xl:flex-row md:flex-col flex-col md:mt-20 mt-16 2xl:mx-[396px] xl:mx-44 md:mx-24 mx-8'>
        <div className='w-1/2'>
          <div className='flex flex-col h-full justify-between bottom-0 right-0 md:w-[450px] w-[300px]'>
            <div className='text-[60px] font-bold leading-none'>Detalles de contacto</div>
          </div>
        </div>

        <div className='flex xl:flex-row md:flex-col flex-col xl:gap-x-20 md:gap-y-10 gap-y-10 md:mt-7 mt-7'>
          <div className='flex xl:flex-col md:flex-row flex-col md:justify-between gap-y-5'>
            <div>
              <div className='font-bold text-dark-gray-arch'>Oficina principal</div>
              <div className='text-medium-gray-arch'>
                <div>Mail: archone@mail.com</div>
                <div>Direccion: 1892 Chenoweth Drive TN</div>
                <div>Tel: 931-492-3451</div>
              </div>
            </div>
            <div className='flex gap-x-5 items-center mt-5'>
              <Link className='font-bold hover:underline'>Ver en Mapa</Link>
              <svg xmlns="http://www.w3.org/2000/svg" width="26" height="20"><g fill="none" fillRule="evenodd" stroke="#1B1D23" strokeWidth="2"><path d="M15 1l9 9-9 9M0 10h24" /></g></svg>
            </div>
          </div>

          <div className='flex xl:flex-col md:flex-row flex-col md:justify-between gap-y-5'>
            <div>
              <div className='font-bold text-dark-gray-arch'>Oficina II</div>
              <div className='text-medium-gray-arch'>
                <div>Mail: archtwo@mail.com</div>
                <div>Direccion: 3399  Wines Lane TX</div>
                <div>Tel: 832-123-4321</div>
              </div>
            </div>
            <div className='flex gap-x-5 items-center mt-5'>
              <Link className='font-bold hover:underline'>Ver en Mapa</Link>
              <svg xmlns="http://www.w3.org/2000/svg" width="26" height="20"><g fill="none" fillRule="evenodd" stroke="#1B1D23" strokeWidth="2"><path d="M15 1l9 9-9 9M0 10h24" /></g></svg>
            </div>
          </div>
        </div>
      </div>


      <div className='2xl:mx-[396px] xl:mx-44 md:mx-24 md:mt-44 mt-20'>
        <img className='md:hidden xl:block hidden' src={contactdeks2} alt="contactdeks2" />
        <img className='md:block xl:hidden hidden' src={contacttab2} alt="contacttab2" />
        <img className='md:hidden w-screen' src={contactmob2} alt="contactmob2" />
      </div>


      <div className='flex xl:flex-row md:flex-col flex-col mt-36 2xl:mx-[396px] xl:mx-44 md:mx-24 mx-8'>
        <div className='xl:w-1/2'>
          <div className='flex flex-col h-full justify-between bottom-0 md:right-0 md:w-[450px] w-[300px]'>
            <div className='md:text-[60px] text-[50px] font-bold leading-none'>Conéctate con nosotros</div>
          </div>
        </div>


        <form className='flex flex-col xl:w-2/3 md:mt-14 xl:mt-0'>

          {
            nameEmpty == 0 ? (
              <input onChange={nameInput} className='cursor-pointer text-[20px] placeholder:text-light-gray-arch border-b-[2px] border-l-0 border-r-0 border-t-0 mt-5 focus:outline-none focus:ring-0 focus:border-b-very-dark-blue-arch' value={name} placeholder='Nombre' />
            ) : (
              <div className='relative'>
                <div className='absolute text-error-arch font-bold mt-7 xl:ml-[450px] md:ml-[420px] ml-[190px]'>No puede estar vacío</div>
                <input onChange={nameInput} className='w-full cursor-pointer text-[20px] placeholder:text-error-arch/60 border-b-[2px] border-l-0 border-r-0 border-t-0 mt-5 border-error-arch focus:outline-none focus:ring-0 focus:border-b-error-arch' placeholder='Nombre' />
              </div>
            )
          }
          {
            emailEmpty == 0 ? (
              <input onChange={emailInput} className='cursor-pointer text-[20px] placeholder:text-light-gray-arch border-b-[2px] border-l-0 border-r-0 border-t-0 mt-5 focus:outline-none focus:ring-0 focus:border-b-very-dark-blue-arch' value={email} placeholder='Correo' />
            ) : (
              <div className='relative'>
                <div className='absolute text-error-arch font-bold mt-7 xl:ml-[450px] md:ml-[420px] ml-[190px]'>No puede estar vacío</div>
                <input onChange={emailInput} className='w-full cursor-pointer text-[20px] placeholder:text-error-arch/60 border-b-[2px] border-l-0 border-r-0 border-t-0 mt-5 border-error-arch focus:outline-none focus:ring-0 focus:border-b-error-arch' placeholder='Correo' />
              </div>
            )
          }
          {
            msjEmpty == 0 ? (
              <textarea onChange={msjInput} className='cursor-pointer text-[20px] placeholder:text-light-gray-arch border-b-[2px] border-l-0 border-r-0 border-t-0 mt-5 resize-none focus:outline-none focus:ring-0 focus:border-b-very-dark-blue-arch' value={msj} cols="30" rows="4" placeholder='Mensaje'></textarea>
            ) : (
              <>
                <div className='absolute text-error-arch font-bold mt-[220px] xl:ml-[450px] md:ml-[420px] ml-[190px]'>No puede estar vacío</div>
                <textarea onChange={msjInput} className='w-full cursor-pointer text-[20px] placeholder:text-error-arch/60 border-b-[2px] border-l-0 border-r-0 border-t-0 mt-5 resize-none border-error-arch focus:outline-none focus:ring-0 focus:border-b-error-arch ' value={msj} cols="30" rows="4" placeholder='Mensaje'></textarea>
              </>
            )
          }

          <div className='flex justify-end w-full mx-2/3'>
            <div onClick={check} className='flex justify-center items-center bg-very-dark-blue-arch hover:bg-dark-gray-arch transition-all duration-200 w-20 h-20 cursor-pointer'>
              <svg xmlns="http://www.w3.org/2000/svg" width="26" height="20"><g fill="none" fillRule="evenodd" stroke="#ffffff" strokeWidth="2"><path d="M15 1l9 9-9 9M0 10h24" /></g></svg>
            </div>
          </div>
        </form>
      </div>

      <Footer />
      <ScrollRestoration />
    </>
  )
}

export default Contact