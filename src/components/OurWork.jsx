import React from "react";
import salesimg from "./CreativioImg/salesimg.png";
import arrowup from "./CreativioImg/arrowup.png";

const OurWork = () => {
  return (
    <>
      <section>
        <div className="flex flex-col md:flex-row lg:flex-row max-w-[1640px] m-auto p-12 bg-gradient-to-b mt-[100px] from-white/75  to-[#CAE9FF]  md:h-[650px]">
          <div className="flex flex-col md:w-[40%]">
            <div>
              {" "}
              <h1 className="text-[36px] md:text-[72px] ">
                Our work at{" "}
                <span className=" font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#087E8B] via-[#5FA8D3] to-[#1B4965]">
                  {" "}
                  creativio...
                </span>
              </h1>
            </div>
            <div className="flex t">
              <ul>
                <li className="text-[#3F3F3F] font-[24px] mt-[24px] mb-[24px]">
                  Branding
                </li>
                <li className="text-[#3F3F3F] font-[24px] mb-[24px] ">
                  Product Design
                </li>
                <li className="text-[#3F3F3F] font-[24px] mb-[24px] ">
                  Digital Marketing
                </li>
                <li className="text-[#3F3F3F] font-[24px] mb-[24px] ">
                  Software Enginnering
                </li>
              </ul>
            </div>
          </div>

          <div className="flex md:flex flex-col md:w-[60%] ">
            <div className="items-center bg-white shadow-md h-[250px]  md:w-[732px] flex flex-col">
              <p className=" p-5 md:pt-12 text-start md:px-6 w-[300px] md:w-[600px]">
                At Creativio, we create unique and effective brand identities
                tailored to each business's needs. Our branding experts design
                brand guidelines, and marketing collateral to communicate your
                brand's identity to your target audience.
                <button className="flex pt-4 pb-5 font-bold text-[#1B4965] ">
                  Get In Touch
                  <img
                    className="items-center  ml-1 bg-inherit "
                    src={arrowup}
                    alt="/"
                  />
                </button>
              </p>
            </div>

            <div className="">
              <img
                className="  md:w-[732px] h-[250px] object-cover"
                src={salesimg}
                alt="/"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OurWork;
