import React from "react";
import arrowhead from "./CreativioImg/arrowhead.png";
import chefhat from "./CreativioImg/chefhat.png";

const SubFooter = () => {
  return (
    <section className="mt-[50px] md:mt-[250px] pt-12 px-12 relative m-auto max-w-[1640px] h-[454px]  bg-[#CAE9FF]">
      <img
        className="absolute w-[150px] left-2 top-2 hidden md:block lg:block "
        src={chefhat}
        alt=""
      />
      <div className="block">
        <p className="text-[32px] md:text-[72px] font-medium text-[#3F3F3F]">
          Have an Idea?
        </p>
        <div className="flex flex-col md:flex-row justify-between items-center ">
          <div className="flex">
            <p className="text-[32px] md:text-[72px] font-medium text-[#3F3F3F]">
              Let&#39;s Build it together!
            </p>
          </div>
          <div>
            <button className="flex py-3 px-5 bg-[#087E8B] rounded-[24px] md:justify-center md:items-center font-bold text-white my-[50px] md:my[0px]">
              Get In Touch
              <img
                className="items-center ml-1 bg-inherit "
                src={arrowhead}
                alt="/"
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubFooter;
