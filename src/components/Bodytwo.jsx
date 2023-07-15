import React from "react";
import arrowup from "./CreativioImg/arrowup.png";
import framebody from "./CreativioImg/framebody.png";


const Bodytwo = () => {
  return (
    <section className="max-w-[1640px] m-auto px-4  mt-[100px] lg:mt-[200px] ">
      <div className="block md:flex md:justify-between">
        <div className="md:w-[500px] flex md:items-end ">
          <button className ="flex py-4  font-bold text-[#1B4965]">
            Go to Gallery
            <img
              className="items-center ml-1 "
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

      <div className="flex justify-center py-[50px] md:py-[100px] ">
        <img className=" w-[700px] h-[500px] md:w-screen md:h-screen"  
        src={framebody} 
        alt="" />
      </div>


    </section>
  );
};
export default Bodytwo;
