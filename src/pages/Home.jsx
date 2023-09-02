import Nav from "../components/Nav";
import MainSlide from "../components/MainSlide";
import SecondSection from "../components/SecondSection";
import ThirdSection from "../components/ThirdSection";
import Featured from "../components/Featured";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="relative">
        <Nav />
        <div className="absolute md:block hidden">
            <div className="border-b-2 w-32 md:-mt-24 rotate-90 xl:ml-3 md:-ml-5"></div>
            <div className="rotate-90 mt-[180px] text-[24px] md:-ml-8 xl:-ml-0 text-light-gray-arch tracking-[14px]">INICIO</div>
        </div>
        <MainSlide />
        <SecondSection />
        <ThirdSection />
        <Featured />
        <Footer />
    </div>
  )
}

export default Home;