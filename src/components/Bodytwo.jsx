import React from "react";
import arrowup from "./CreativioImg/arrowup.png";
import framebody from "./CreativioImg/framebody.png";


const Bodytwo = () => {
  return (
    <section className="max-w-[1640px] m-auto px-4 mt-[200px] ">
      <div className="block md:flex justify-between">
        <div className="w-[500px] flex items-end ">
          <button className="flex py-3 px-5 font-bold text-[#1B4965]  ">
            Go to Gallery
            <img
              className="items-center ml-1 bg-inherit "
              src={arrowup}
              alt="/"
            />
          </button>
        </div>

        <p className="text-4xl w-[300px] md:text-6xl md:w-[500px] font-medium">
          Some of our featured{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-l from-[#087E8B] to-[#5FA8D3] ">
            Projects
          </span>
        </p>
      </div>

      <div className="flex justify-center my-[100px] max-w-[1640px]">
        <img  src={framebody} alt="" />
      </div>


    </section>
  );
};
export default Bodytwo;
