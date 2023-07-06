import React from "react";
import arrowhead from "./CreativioImg/arrowhead.png";
import bodyone from "./CreativioImg/bodyone.png";
import chefhat from "./CreativioImg/chefhat.png";
import playcircles from "./CreativioImg/playcircle.png";

const Body = () => {
  return (
    <section className="flex flex-col items-center relative ">
      <div className=" md:w-[750px] pt-[100px] ">
        <div className="absolute left-52 -top-0.5">
          <img className="w-[150px] hidden md:block " src={chefhat} alt="/" />
        </div>

        <p className="text-[#3F3F3F] mx-4 text-2xl md:text-4xl text-center font-medium ">
          {" "}
          We pride ourselves on delivering exceptional design services that
          exceed our clients' expectations.{" "}
        </p>
      </div>

      <div className=" max-w-[164px]  my-[50px] rounded-[24px] text-center bg-[#087E8B]">
        <button className="flex py-3 px-5 justify-center items-center font-bold text-white ">
          Who we are
          <img className="items-center ml-1" src={arrowhead} alt="/" />
        </button>
      </div>

      <div className="max-w-[1640px] object-cover relative">
        <div className="flex justify-center items-center">
          {" "}
          <img className="absolute top-[310px]" src={playcircles} alt="/" />
        </div>
        <img className="m-4 flex justify-center items-center md:w-[1029px] h-[567px] " src={bodyone} alt="/" />
      </div>
    </section>
  );
};

export default Body;
