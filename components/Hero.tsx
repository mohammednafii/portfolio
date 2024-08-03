
import { FaLocationArrow } from "react-icons/fa6";
import LampDemo from "./ui/lamp";
import ShimmerButton from "./ui/ShimmerButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/text-generate-effect";


const Hero = () => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-slate-950" id="home">
    <LampDemo />
    <div className="absolute bottom-0 text-center mb-44 z-10">
      <a href="#contact">
      <ShimmerButton  title="Contact me"  icon={<FaLocationArrow />}/>
      </a> 
    </div>
    <div className="w-full absolute left-0 -bottom-42 min-h-96 z-0">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50 "
        />
      </div>

  </div>
  );
};

export default Hero;
