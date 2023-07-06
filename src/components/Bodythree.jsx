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
        <div className="p-4 md:pr-4">
          <div>
            <img src={safepal} alt="/" />
          </div>

          <div>
            <img src={safepall} alt="/" />
          </div>
        </div>
        {console.log('HEllo world!')}

        <div className="p-4 md:pl-4">
          <div>
            <img src={discovery} alt="" />
          </div>

          <div>
            <img src={discover} alt="/" />
          </div>
        </div>
      </div>

      {/* Commercials/commerce */}

      <div className="grid grid-col-2  m-auto md:grid-col-4 lg:grid-col-5 ">
        <div className="relative flex">
          <img src={commerce} alt="" />

          <div className="absolute px-auto pt-12 w-[500px] md:w-[620px] left-4 top-4">
            <button className=" text-white font-semibold mb-8 py-2 px-4 border mr-2  border-white rounded-xl ">
              {" "}
              Fintech
            </button>

            <button className=" text-white font-semibold py-2 px-4 border mr-2 border-white rounded-xl ">
              {" "}
              Fintech
            </button>

            <button className=" text-white font-semibold py-2 px-4 border mr-2 border-white rounded-xl ">
              {" "}
              EdTech
            </button>

            <button className=" text-white font-semibold py-2 px-4 border mr-2 border-white rounded-xl ">
              {" "}
              Web 3
            </button>

            <button className=" text-white font-semibold py-2 px-4 border mr-2 border-white rounded-xl ">
              {" "}
              Hospitality Tech
            </button>

            <button className=" text-white font-semibold py-2 px-4 border mr-2 border-white rounded-xl ">
              {" "}
              Saas
            </button>

            <button className=" text-white font-semibold py-2 px-4 border mr-2 border-white rounded-xl ">
              {" "}
              Community
            </button>

            <button className=" text-white font-semibold py-2 px-4 border mr-2 border-white rounded-xl ">
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
