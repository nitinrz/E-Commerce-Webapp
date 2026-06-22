import React from "react";
import { assets } from "../assets/assets";

const Hero = () => {
  return (
    <div className=" border-gray-400 border flex flex-col sm:flex-row ">
      {/* right side */}
      <div className=" w-full sm:w-1/2 flex flex-col justify-center py-8 items-center">
        <div className="text-[#414141]">
          <div className=" flex items-center gap-2 ">
            <p className="w-8 h-0.5 bg-[#414141] "></p>
            <p className="font-medium ">OUR BESTSELLERS</p>
          </div>
          <h1 className=" prata-regular text-3xl sm:py-3 lg:text-5xl leading-relaxed">
            Latest Arrivals
          </h1>
          <div className="flex items-center gap-2">
            <p className="font-medium ">SHOP NOW</p>
            <p className=" w-8 h-0.5 bg-[#414141]"></p>
          </div>
        </div>
      </div>
      {/* left side */}
      <div className="sm:w-1/2 ">
        <img
          src={assets.hero_img}
          alt="Hero img"
          className="w-full sm:1/2"
        />
      </div>
    </div>
  );
};

export default Hero;
