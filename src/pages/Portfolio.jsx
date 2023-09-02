import Nav from "../components/Nav"
import CardPlace from "../components/CardPlace"
import imgdesk1 from '../assets/portfolio/desktop/image-seraph.jpg'
import imgdesk2 from '../assets/portfolio/desktop/image-eebox.jpg'
import imgdesk3 from '../assets/portfolio/desktop/image-federal.jpg'
import imgdesk4 from '../assets/portfolio/desktop/image-del-sol.jpg'
import imgdesk5 from '../assets/portfolio/desktop/image-prototype.jpg'
import imgdesk6 from '../assets/portfolio/desktop/image-228b.jpg'
import imgdesk7 from '../assets/portfolio/desktop/image-edelweiss.jpg'
import imgdesk8 from '../assets/portfolio/desktop/image-netcry.jpg'
import imgdesk9 from '../assets/portfolio/desktop/image-hypers.jpg'
import imgdesk10 from '../assets/portfolio/desktop/image-sxiv.jpg'
import imgdesk11 from '../assets/portfolio/desktop/image-trinity.jpg'
import imgdesk12 from '../assets/portfolio/desktop/image-paramour.jpg'
import imgtab1 from '../assets/portfolio/tablet/image-seraph.jpg'
import imgtab2 from '../assets/portfolio/tablet/image-eebox.jpg'
import imgtab3 from '../assets/portfolio/tablet/image-federal.jpg'
import imgtab4 from '../assets/portfolio/tablet/image-del-sol.jpg'
import imgtab5 from '../assets/portfolio/tablet/image-prototype.jpg'
import imgtab6 from '../assets/portfolio/tablet/image-228b.jpg'
import imgtab7 from '../assets/portfolio/tablet/image-edelweiss.jpg'
import imgtab8 from '../assets/portfolio/tablet/image-netcry.jpg'
import imgtab9 from '../assets/portfolio/tablet/image-hypers.jpg'
import imgtab10 from '../assets/portfolio/tablet/image-sxiv.jpg'
import imgtab11 from '../assets/portfolio/tablet/image-trinity.jpg'
import imgtab12 from '../assets/portfolio/tablet/image-paramour.jpg'
import imgmob1 from '../assets/portfolio/mobile/image-seraph.jpg'
import imgmob2 from '../assets/portfolio/mobile/image-eebox.jpg'
import imgmob3 from '../assets/portfolio/mobile/image-federal.jpg'
import imgmob4 from '../assets/portfolio/mobile/image-del-sol.jpg'
import imgmob5 from '../assets/portfolio/mobile/image-prototype.jpg'
import imgmob6 from '../assets/portfolio/mobile/image-228b.jpg'
import imgmob7 from '../assets/portfolio/mobile/image-edelweiss.jpg'
import imgmob8 from '../assets/portfolio/mobile/image-netcry.jpg'
import imgmob9 from '../assets/portfolio/mobile/image-hypers.jpg'
import imgmob10 from '../assets/portfolio/mobile/image-sxiv.jpg'
import imgmob11 from '../assets/portfolio/mobile/image-trinity.jpg'
import imgmob12 from '../assets/portfolio/mobile/image-paramour.jpg'
import { ScrollRestoration } from "react-router-dom"
import Footer from "../components/Footer"

const Portfolio = () => {
    return (
        <>
            <div className="relative">
                <Nav />
                <div className="md:block hidden absolute">
                    <div className="border-b-2 w-32 -mt-24 rotate-90 xl:ml-3 md:-ml-5"></div>
                    <div className="rotate-90 mt-[225px] text-[24px] text-light-gray-arch tracking-[14px] xl:-ml-12 md:-ml-20">PORTFOLIO</div>
                </div>
            </div>
            <div className="hidden xl:flex flex-wrap mt-7 xl:mx-44 justify-between gap-y-4">
                <CardPlace img={imgdesk1} projectName="Seraph Station" date="Septiembre 2019" />
                <CardPlace img={imgdesk2} projectName="Eebox Building" date="Agosto 2017" />
                <CardPlace img={imgdesk3} projectName="Federal II Tower" date="Marzo 2017" />
                <CardPlace img={imgdesk4} projectName="Project Del Sol" date="Enero 2016" />
                <CardPlace img={imgdesk5} projectName="Le Prototype" date="Octubre 2015" />
                <CardPlace img={imgdesk6} projectName="228B Tower" date="Abril 2015" />
                <CardPlace img={imgdesk7} projectName="Grand Edelweiss Hotel" date="Diciembre 2013" />
                <CardPlace img={imgdesk8} projectName="Netcry Tower" date="Agosto 2012" />
                <CardPlace img={imgdesk9} projectName="Hypers" date="Enero 2012" />
                <CardPlace img={imgdesk10} projectName="SXIV Tower" date="Marzo 2011" />
                <CardPlace img={imgdesk11} projectName="Trinity Bank Tower" date="Septiembre 2010" />
                <CardPlace img={imgdesk12} projectName="Project Paramour" date="Febrero 2008" />
            </div>

            <div className="xl:hidden md:flex hidden flex-wrap mt-7 md:mx-24 justify-between gap-y-4">
                <CardPlace img={imgtab1} projectName="Seraph Station" date="Septiembre 2019" />
                <CardPlace img={imgtab2} projectName="Eebox Building" date="Agosto 2017" />
                <CardPlace img={imgtab3} projectName="Federal II Tower" date="Marzo 2017" />
                <CardPlace img={imgtab4} projectName="Project Del Sol" date="Enero 2016" />
                <CardPlace img={imgtab5} projectName="Le Prototype" date="Octubre 2015" />
                <CardPlace img={imgtab6} projectName="228B Tower" date="Abril 2015" />
                <CardPlace img={imgtab7} projectName="Grand Edelweiss Hotel" date="Diciembre 2013" />
                <CardPlace img={imgtab8} projectName="Netcry Tower" date="Agosto 2012" />
                <CardPlace img={imgtab9} projectName="Hypers" date="Enero 2012" />
                <CardPlace img={imgtab10} projectName="SXIV Tower" date="Marzo 2011" />
                <CardPlace img={imgtab11} projectName="Trinity Bank Tower" date="Septiembre 2010" />
                <CardPlace img={imgtab12} projectName="Project Paramour" date="Febrero 2008" />
            </div>

            <div className="md:hidden flex flex-wrap mt-5 mx-8 justify-between gap-y-4">
                <CardPlace img={imgmob1} projectName="Seraph Station" date="Septiembre 2019" />
                <CardPlace img={imgmob2} projectName="Eebox Building" date="Agosto 2017" />
                <CardPlace img={imgmob3} projectName="Federal II Tower" date="Marzo 2017" />
                <CardPlace img={imgmob4} projectName="Project Del Sol" date="Enero 2016" />
                <CardPlace img={imgmob5} projectName="Le Prototype" date="Octubre 2015" />
                <CardPlace img={imgmob6} projectName="228B Tower" date="Abril 2015" />
                <CardPlace img={imgmob7} projectName="Grand Edelweiss Hotel" date="Diciembre 2013" />
                <CardPlace img={imgmob8} projectName="Netcry Tower" date="Agosto 2012" />
                <CardPlace img={imgmob9} projectName="Hypers" date="Enero 2012" />
                <CardPlace img={imgmob10} projectName="SXIV Tower" date="Marzo 2011" />
                <CardPlace img={imgmob11} projectName="Trinity Bank Tower" date="Septiembre 2010" />
                <CardPlace img={imgmob12} projectName="Project Paramour" date="Febrero 2008" />
            </div>
            <Footer />
            <ScrollRestoration />
        </>
    )
}

export default Portfolio