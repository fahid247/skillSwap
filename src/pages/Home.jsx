
import Slider from "../components/Slider";
import SkillCards from "../components/skillCards";
import HeroSlider from "../components/HeroSlider";
import HowItWorks from "../components/HowItWorks";
import OurImpact from "../components/OurImpact";




const Home = () => {
  return (
    <div className="bg-[#E1D0B3] max-w-[1440px] mx-auto z-0 relative p-5">
      <HeroSlider></HeroSlider>
      <section className="popular-skills my-10">
        <h1 className="text-[min(5vw,48px)] font-semibold">Popular Skills:</h1>
        <SkillCards></SkillCards>
      </section>
      <section className="slider flex justify-center items-center text-center bg-white py-5 sm:py-10 rounded-2xl">
        <div className="flex-1">
        <h1 className="text-[min(5vw,48px)] font-bold text-[#703B3B]">Top Rated Providers</h1>
        </div>
        <div className="flex-1">
        <Slider></Slider>
        </div>
      </section>
      <section className="mt-10 sm:mt-20">
        <OurImpact></OurImpact>
      </section>
      <section className="mt-10 sm:mt-20">
        <HowItWorks></HowItWorks>
      </section>
    </div>
  );
};

export default Home;
