import React from "react";
import arrowup from "./CreativioImg/arrowup.png";
import Loom from "./CreativioImg/Loom.png";
import Arrowdirection from "./CreativioImg/Arrowdirection.png";

const BodyText = () => {
  return (
    <section >
      <div className="flex mt-[100px] justify-between items-center flex-col md:flex-row lg:flex-row px-6">
        <p className="text-[#3F3F3F] font-medium text-2xl md:text-4xl lg:text-5xl h-0 md:h-[100px] md:w-[500px]">
          What our clients say about{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#087E8B] via-[#5FA8D3] to-[#1B4965]">
            creativio...
          </span>
        </p>

        <div className="flex items-end h-0 md:h-[100px] ">
          <button className="flex py-4 md:py-4 font-bold text-[#1B4965] ">
            More Testimonials{" "}
            <img
              className="items-center ml-1 bg-inherit "
              src={arrowup}
              alt=""
            />
          </button>
        </div>
      </div>

    
        <p className="p-12 text-xl mt-8 pt-[50px] text-[#3F3F3F] w-[400px] md:w-[900px]">
          "We were blown away by Creativio's branding services! Their team of
          experts took the time to understand our business and designed a brand
          identity that accurately reflects our values and resonates with our
          target audience. We've received countless compliments on our branding
          since working with them."
        </p>

      <div className="px-12 flex items-center">
        <div>
          <div>
            {" "}
            <p className="font-medium text-[18px] text-[#3F3F3F]">
              Laura Hernandez{" "}
            </p>
          </div>
          <div>
            <p className="font-normal text-[#3F3F3F] ">CEO | LOOM</p>
          </div>
        </div>

        <div className=" hidden md:flex h-[1.5px] bg-[#C1C1C1]  mx-4 w-[300px]"></div>
        <div className="hidden md:flex">
          <img src={Loom} alt="" />
        </div>
      </div>

      <div className=" hidden md:flex absolute mt-[100px] max-w-[1640px] right-4  mx-4 ">
        <img src={Arrowdirection} alt="" />
      </div>
    </section>
  );
};

export default BodyText;
