import React, {useState} from "react";
import VectorLogo from "./CreativioImg/VectorLogo .png";
import arrowhead from "./CreativioImg/arrowhead.png";
import hamburgermenu from "./CreativioImg/hamburgermenu.svg";
import closebtnone from "./CreativioImg/closebtnone.png";
import arrowup from "./CreativioImg/arrowup.png"

const Header = () => {
  const [nav, setNav] = useState(false)

  return (
    <div className="max-w-[1640px] m-auto ">
      <header className="flex bg-white shadow-sm px-4 py-2 justify-between items-center">
        <div className="flex items-center  ">
          <img src={VectorLogo} alt="/" />
          <span className="mr-[64px] text-black font-bold">Creativio...</span>

          <div>
            <ul className="hidden  md:flex space-x-[32px]">
              <li>About</li>
              <li>Projects</li>
              <li>Blogs</li>
              <li>Pricing</li>
            </ul>
          </div>
        </div>

        <div className="flex">
          <div className="hidden md:flex max-w-[164px] rounded-[24px] text-center bg-[#087E8B]">
            <button className="flex py-3 px-5  justify-center items-center font-bold text-white ">
              Contact
              <img className="items-center ml-1 " src={arrowhead} alt="/" />
            </button>
          </div>

          <img
            className="cursor-pointer block md:hidden lg:hidden"
            src={hamburgermenu}
            alt=""
            onClick={() => setNav(!nav)}

          />
        </div>

        {/* Mobile Menu */}
        {/* Overlay */}
        {nav ? (<div className="bg-black/80 fixed w-full h-screen z-10 top-0 left-0"></div>
) : ''}

        {/* Sidedrawer Menu */}

        <div className={nav ? 'fixed top-0 left-0 w-[300px] h-screen bg-[#087E8B] z-10 duration-300' : 'fixed top-0 left-[-100%] w-[300px] h-screen bg-[#087E8B] z-10 duration-300' }>
          <img
            src={closebtnone}
            className="absolute right-4 py-4 top-2 cursor-pointer"
            alt=""
            onClick={() => setNav(!nav)}
          />
          <div className="flex items-center py-4">
            <img src={VectorLogo} alt="/" />
            <span className="text-white font-bold">Creativio...</span>
          </div>


          <nav className="flex items-center flex-col">
          <ul className="flex px-4 text-white justify-center items-center flex-col">
              <li className="mb-[50px] mt-[30px]">About</li>
              <li className="mb-[50px]">Projects</li>
              <li className="mb-[50px]">Blogs</li>
              <li className="mb-[50px]">Pricing</li>
            </ul>

            <div className="flex max-w-[164px] rounded-[24px] text-center bg-white">
            <button className="flex py-3 px-5  justify-center items-center font-bold text-[#087E8B] ">
              Contact
              <img className="items-center  ml-1 " src={arrowup} alt="/" />
            </button>
          </div>
            
          </nav>
        </div>
      </header>
    </div>
  ); 
};

export default Header;
