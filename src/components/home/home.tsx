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
      <div className="flex flex-row lg:mt-32 lg:mb-64 lg:mx-auto lg:max-w-screen-xl lg:gap-72 sm:gap-0 sm:max-w-screen-md">
        <div className="flex flex-col mb-20">
          <div className="mt-36 mb-9 ">
            <h1 className="text-9xl font-extrabold text-white animate-rise delay-0">
              THINK
            </h1>
            {/* <img
                src={logo}
                alt="Descriptive Alt Text"
                className="w-48 h-48 object-cover"
              /> */}

            <h1 className="text-9xl font-extrabold text-white animate-rise delay-1">
              BUILD
            </h1>
            <h1 className="text-9xl font-extrabold text-white animate-rise delay-2">
              DELIVER
            </h1>
          </div>
          <div className="group">
            <button
              type="submit"
              onClick={onNavigate}
              className="flex p-5 w-64 h-20 ms-3 rounded-2xl bg-blue-600 text-white duration-500 transform group-hover:bg-lime-400 gap-2 group-hover:text-black group-hover:w-72 group-hover:ms-0  "
            >
              <p className="ms-11  mt-1 text-xl font-semibold duration-500 transform group-hover:ms-12 group-hover:text-2xl ">
                {" "}
                work with us
              </p>
              <MdArrowOutward className="h-9 w-6 duration-500 transform group-hover:text-black group-hover:h-10" />
            </button>
          </div>
        </div>
        <div className="flex items-center mb-72 ms-24">
          <div className="relative  ">
            <img
              src={circle}
              alt="Rotating Circle"
              className=" lg:h-full  rounded-full animate-spin-slow"
            />
            <img
              src={logo}
              alt="Static Icon"
              className="sm:h-4 lg:h-14 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2   "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
