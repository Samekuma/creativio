import React from "react";
import safepal from "./CreativioImg/safepal.png";
import safepall from "./CreativioImg/safepall.png";
import discovery from "./CreativioImg/discovery.png";
import discover from "./CreativioImg/discover.png";
import commerce from "./CreativioImg/commerce.png";

const Bodythree = () => {
  return (
    <section>
      <div className="block md:flex max-w-[1640px] m-auto mb-[100px] justify-center px-4 items-center">
        <div >
          <div>
            <img className="p-4 md:pr-4" src={safepal} alt="/" />
          </div>

          <div>
            <img src={safepall} alt="/" />
          </div>
        </div>
    

        <div>
          <div>
            <img  className="p-4 md:pl-4" src={discovery} alt="" />
          </div>

          <div>
            <img  className="p-4 md:pl-4" src={discover} alt="/" />
          </div>
        </div>
      </div>

      {/* Commercials/commerce */}

      <div  className="grid grid-col-2  m-auto md:grid-col-4 lg:grid-col-5 ">
        <div className="relative flex">
          <img className="w-[700px] h-[370px] md:w-screen  md:h-screen p-4 object-cover" src={commerce} alt="" />

          <div className="absolute px-4 pt-12 md:w-[700px] lg:w-[900px] flex flex-row flex-wrap md:flex-col-2  left-4 top-4">
            <button className=" w-[150px] text-white font-semibold mb-4 py-2 px-4 border mr-2  border-white rounded-xl ">
              {" "}
              Fintech
            </button>

            <button className="  w-[150px] text-white font-semibold mb-4 py-2 px-4 border mr-2 border-white rounded-xl ">
              {" "}
              Fintech
            </button>

            <button className="  w-[150px] text-white font-semibold mb-4 py-2 px-4 border mr-2 border-white rounded-xl ">
              {" "}
              EdTech
            </button>

            <button className="  w-[150px] text-white font-semibold mb-4 py-2 px-4 border mr-2 border-white rounded-xl ">
              {" "}
              Web 3
            </button>

            <button className=" w-[150px] text-white font-semibold mb-4 py-2 px-4 border mr-2 border-white rounded-xl ">
              {" "}
              Hospitality Tech
            </button>

            <button className="  w-[150px] text-white font-semibold mb-4 py-2 px-4 border mr-2 border-white rounded-xl ">
              {" "}
              Saas
            </button>

            <button className="  w-[150px] text-white font-semibold mb-4 py-2 px-4 border mr-2 border-white rounded-xl ">
              {" "}
              Community
            </button>

            <button className="  w-[150px] text-white font-semibold mb-4 py-2 px-4 border mr-2 border-white rounded-xl ">
              {" "}
              Growth{" "}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bodythree;
