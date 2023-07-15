import React from "react";
import VectorLogo from "./CreativioImg/VectorLogo .png";

const Footer = () => {
  return (
    <div className=" md:h-[700px] bg-[#1B4965]">
      <div className="pt-[150px] flex-col md:flex-row lg:flex-row pb-[50px] px-12 flex md:justify-between">
        <div className="flex md:py-0 items-center">
          {" "}
          <img className="" src={VectorLogo} alt="" />
          <div className="text-white pl-2  ">
            <p>Creativio...</p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row lg:flex-row items-center  py-4 md:py-0">
          <div className="text-white  py-4 md:py-0 mr-4">
            <p>Send us an email to check availability</p>
          </div>

          <button className="bg-white  py-4  px-3 md:py-2 rounded-xl text-[#5FA8D3]">
            Hello@creativio.io
          </button>
        </div>
      </div>

      <hr className="h-[1px] w-screen bg-[1640px]"></hr>

      <div className="flex flex-col md:flex-row lg:flex-row justify-between px-12 pt-[50px] max-w-[1640px]">
        <div className="text-white">
          <p className=" font-bold text-lg pb-8">Contact Us</p>
          <p className="w-[280px]">
            483 Green Lanes, London, England, N13 4BS +351 967 949 227
          </p>
          <p className="pt-4">
            Email us <u>hello@creative.io</u>
          </p>
        </div>

        <div className="text-white py-8 md:py-0">
          <p className=" font-bold text-lg pb-8">Service</p>
          <ul className="text-sm">
            <li className="pb-4">Product Design</li>
            <li className="pb-4">Branding</li>
            <li className="pb-4">Digital Marketing</li>
            <li className="pb-4">Software Development</li>
          </ul>
        </div>
        <div className="text-white  py-8 md:py-0">
          <p className=" font-bold text-lg pb-8">Our Story</p>
          <ul>
            <li className="pb-4">Recent Work</li>
            <li className="pb-4">Meet our Team</li>
            <li className="pb-4">Testimonial</li>
            <li className="pb-4">Contact</li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between px-12 py-4 md:pt-[100px] ">
        <div className="text-white">
          <p>© 2023 Creativio. design (Reg. 1344)</p>
        </div>

        <div className="text-white flex">
          <p className="pr-4">Terms & Conditions</p>
          <p>Privacy Policy</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
