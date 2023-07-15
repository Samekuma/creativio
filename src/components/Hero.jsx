import React from "react";
import arrowhead from "./CreativioImg/arrowhead.png";
import playcircle from "./CreativioImg/playcircle.png";
import Highlightleft from "./CreativioImg/Highlightleft.png";
import Highlightright from "./CreativioImg/Highlightright.png";
import brands from "./CreativioImg/brands.png";
// import arrowhead from "./CreativioImg/arrowhead.png";

const Hero = () => {
  return (
      <section className="max-w-[1640px] m-auto relative">
        <div className="absolute left-20 -top-24">
          {" "}
          <img className="hidden  md:hidden lg:block" src={Highlightleft} alt="/" />
        </div>

        <div className="absolute right-20 -top-24">
          {" "}
          <img className="hidden md:hidden lg:block" src={Highlightright} alt="/" />
        </div>
        <div className="text-bold px-4 text-[#3F3F3F] flex align-center items-center justify-center text-4xl md:text-6xl lg:text-7xl font-bold mt-[10%]">
          <h1 className="text-center  w-[1121px] ">
            {" "}
            Experience the power of creative design with{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5FA8D3] via-[#087E8B] to-[#1B4965]">
              Creativio...
            </span>{" "}
          </h1>
        </div>

        <div className=" flex justify-center items-center px-4  py-5 mb-10">
          <h6 className="text-[#000] text-center w-[630px] ">
            Creativio is a creative design agency that transforms brands and
            captivates audiences with customized design solutions. Contact us to
            elevate your brand with exceptional design services.
          </h6>
        </div>

        <div className="flex justify-center m-auto items-center flex-col md:flex-row  mb-20 space-y-6 md:space-y-0">
          <div className="max-w-[218px] rounded-[24px] text-center bg-[#087E8B] ml-5">
            <button className="flex py-3 px-6  justify-center items-center font-bold text-white ">
              Get In Touch
              <img
                className="items-center ml-1  bg-inherit "
                src={arrowhead}
                alt="/"
              />
            </button>
          </div>

          <div className=" max-w-[218px] rounded-[24px] text-center border-2 border-[#087E8B] ml-5">
            <button className="flex py-3 px-6  justify-center items-center font-bold text-[#3F3F3F] ">
              Watch Video
              <img
                className="items-center bg-inherit ml-1 "
                src={playcircle}
                alt="/"
              />
            </button>
          </div>
        </div>

        <div className="flex  flex-col justify-center items-center">
            <h6 className="text-[#3F3F3F] mb-4 mt-10"> Trusted by 200 companies in 70 countries</h6>
            <div className="px-4 flex items-center justify-center"> 
                <img className="bg-inherit" src={brands} alt="/" />
            </div>

        </div>
      </section>
   
  );
};

export default Hero;
