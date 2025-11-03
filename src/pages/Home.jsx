import React from "react";
import Slider from "../components/Slider";
import SkillCards from "../components/skillCards";

const Home = () => {
  return (
    <div className="bg-[#E1D0B3] max-w-[1440px] mx-auto p-5">
      <section className="slider flex items-center max-[450px]:gap-5 max-[450px]:justify-center min-[450px]:justify-around ">
        <h1 className="text-[min(5vw,48px)] font-bold">Popular Skills</h1>
        {Slider()}
      </section>
      <section className="popular-skills ">
        <SkillCards></SkillCards>
      </section>
    </div>
  );
};

export default Home;
