import React, { useState } from "react";
import { MdArrowOutward } from "react-icons/md";
import circle from "./icon/Component_2.png";
import logo from "./icon/White-Dominated.png";
import "./home.css"; // Import your Tailwind CSS file

interface HomePageProps {
  onNavigate: () => void;
}

const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  return (
    <div className="py-3 bg-home" id="home">
     
      <div className="flex flex-col mb-44 mx-auto gap-48 max-w-screen-sm ">
      <img
              src={logo}
              alt="Static Icon"
              className=" w-20 mt-10 ms-10 lg:hidden  "
            />
        <div className="flex flex-row gap-">
        <div className="flex flex-col ">
        
          <div className="flex flex-col ms-10 mb-10   ">

          
            <h1 className="text-7xl font-general-sans font-hbold text-white animate-rise delay-0 mb-0">
              THINK
            </h1>
            {/* <img
                src={logo}
                alt="Descriptive Alt Text"
                className="w-48 h-48 object-cover"
              /> */}

            <h1 className="text-7xl font-hbold text-white animate-rise delay-1 my-0">
              BUILD
            </h1>
            <h1 className="text-7xl font-hbold text-white animate-rise delay-2 mt-0">
              DELIVER
            </h1>
          </div>
          <div className="flex-row group ms-12 ">
            <button
              type="submit"
              onClick={onNavigate}
              className=" p-3 w-40 h-12 rounded-2xl bg-blue-600 text-white   "
            >
              <p className="flex ms-2 items-center text-base font-semibold  ">
                {" "}
                work with us<span className="mr-3"></span> <MdArrowOutward  />
                
              </p>
             
            </button>
          </div>
        </div>
        <div className="hidden lg:flex items-center   ">
          <div className="relative   ">
            <img
              src={circle}
              alt="Rotating Circle "
              className=" h-full  rounded-full animate-spin-slow "
            />
            <img
              src={logo}
              alt="Static Icon"
              className="sm:h-4 h-14 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2   "
            />
          </div>
        </div>
        </div>
        
      </div>
    </div>
  );
};

export default HomePage;
