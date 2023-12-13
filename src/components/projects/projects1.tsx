// Importing React

import React, { useState } from "react";
import logo from "./icons/Black-Dominated.png";
import { MdArrowOutward } from "react-icons/md";

// Your React component
const HoverEffectImage = () => {
  const [hover, setHover] = useState(false);

  return (
    <div className="  bg-gray-800 h-screen overflow-hidden ">
      <div className="flex flex-col mx-auto max-w-screen-lg gap-6 ">
        <div
          className=" relative group h-screen overflow-hidden "
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          <div className="mt-14 ">
            <div className="flex flex-col  w-full transition duration-1000 ease-in-out group-hover:blur-md ">
              <h2 className=" text-8xl text-center font-extrabold text-lime-400 duration-500 ease-in-out transform group-hover:translate-y-[-300%]">
                *
              </h2>
              <div className="flex mx-auto flex-row gap-5 ">
                <h2 className="text-8xl text-center font-extrabold text-white duration-500 ease-in-out transform group-hover:translate-y-[-400%]">
                  WE ARE
                </h2>
                <p className="text-8xl text-center font-extrabold text-blue-600 duration-500 ease-in-out transform group-hover:translate-y-[-400%]">
                  EXCEL
                </p>
              </div>

              <h2 className="text-8xl text-center font-extrabold text-white duration-500 ease-in-out transform group-hover:translate-y-[-400%]">
                ON WHAT WE DO.
              </h2>
            </div>
            <div className="mt-14 flex flex-row gap-14 transition duration-500 ease-in-out group-hover:blur-md ">
              {/* Image */}
              <img
                src={logo} // Replace with your image source
                alt="Descriptive Alt Text"
                className="h-72 transition duration-500 ease-in-out transform group-hover:translate-y-[-100%] group-hover:opacity-40"
              />
              <img
                src={logo} // Replace with your image source
                alt="Descriptive Alt Text"
                className="h-72 mt-36 transition duration-500 ease-in-out transform group-hover:translate-y-[-100%] group-hover:opacity-40"
              />
              <img
                src={logo} // Replace with your image source
                alt="Descriptive Alt Text"
                className="h-72 mt-72 transition duration-500 ease-in-out transform group-hover:translate-y-[-100%] group-hover:opacity-40"
              />
            </div>
            {/* Overlay for blur effect */}
          </div>

          <div className="flex flex-col mx-auto max-w-screen-lg gap-6">
            <div
              className={`absolute group flex flex-col mx-auto max-w-screen-lg gap-6 inset-0  transition-transform duration-500 ease-in-out ${
                hover ? "translate-x-0" : "-translate-x-full"
              }`}
            >
              <div className="flex flex-col mt-14 ">
                <div className="flex flex-row justify-between">
                  <h2 className="text-7xl  text-left font-extrabold text-white ">
                    FROM A BLANK
                  </h2>
                  <h2 className="text-7xl text-left font-extrabold text-lime-400 ">
                    *
                  </h2>
                </div>
                <div className="flex flex-row gap-5 ">
                  <h2 className="text-7xl  txt-left font-extrabold text-white ">
                    PAGE TO
                  </h2>
                  <div className="flex flex-row">
                    <p className="text-7xl text-left font-extrabold text-blue-600 ">
                      REALITY
                    </p>
                    <h2 className="text-7xl  text-left font-extrabold text-white ">
                      .
                    </h2>
                  </div>
                </div>
                <div className="flex flex-col gap-1 mt-7">
                  <p className="text-lg text-white">
                    We take our client's creative visions and bring them to
                    life, making their dreams even better than they could have
                    imagined. We don't only transform blank pages into stunning
                    websites but also craft unique and unforgettable
                    experiences. Ideate goes beyond simply delivering results -
                    we inject playful and creative approach to ensure that every
                    project is a masterpiece.
                  </p>
                </div>
              </div>

              <div className="flex flex-col justify-center items-center mt-16 ">
                {/* Container for boxes */}
                <div className="flex space-x-4">
                  {/* Box 1 */}
                  <div className="w-52 h-64 rounded-lg flex flex-col bg-blue-600 text-white">
                    <h2 className=" text-6xl font-bold ms-40 mt-2 text-lime-400 duration-500 ease-in-out ">
                      *
                    </h2>
                    <img
                      src={logo}
                      alt="Logo"
                      className="h-12 w-12 ms-4 mt-16  "
                    />
                    <p className="text-lg leading-none font-bold text-left ms-4 mt-3 ease-in-out duration-500 transform  ">
                      BRAND IDENTITY DESIGN
                    </p>
                  </div>
                  {/* Box 2 */}
                  <div className="w-52 h-64 rounded-lg flex flex-col bg-white  text-black">
                    <h2 className=" text-6xl font-bold ms-40 mt-2 text-blue-400 duration-500 ease-in-out ">
                      *
                    </h2>
                    <img
                      src={logo}
                      alt="Logo"
                      className="h-12 w-12 ms-4 mt-16  "
                    />
                    <p className="text-lg leading-none font-bold text-left ms-4 mt-3 ease-in-out duration-500 transform  ">
                      BRAND IDENTITY DESIGN
                    </p>
                  </div>
                  {/* Box 3 */}
                  <div className="w-52 h-64 rounded-lg flex flex-col bg-blue-600 text-white">
                    <h2 className=" text-6xl font-bold ms-40 mt-2 text-lime-400 duration-500 ease-in-out ">
                      *
                    </h2>
                    <img
                      src={logo}
                      alt="Logo"
                      className="h-12 w-12 ms-4 mt-16  "
                    />
                    <p className="text-lg leading-none font-bold text-left ms-4 mt-3 ease-in-out duration-500 transform  ">
                      BRAND IDENTITY DESIGN
                    </p>
                  </div>

                  {/* Box 4 */}
                  <div className="w-52 h-64 rounded-lg flex flex-col bg-white  text-black">
                    <h2 className=" text-6xl font-bold ms-40 mt-2 text-blue-400 duration-500 ease-in-out ">
                      *
                    </h2>
                    <img
                      src={logo}
                      alt="Logo"
                      className="h-12 w-12 ms-4 mt-16  "
                    />
                    <p className="text-lg leading-none font-bold text-left ms-4 mt-3 ease-in-out duration-500 transform  ">
                      BRAND IDENTITY DESIGN
                    </p>
                  </div>
                </div>
                <button
                  type="submit"
                  className=" mx-auto mt-12 flex p-5 border border-transparent rounded-full bg-blue-600 text-white hover:bg-lime-400 hover:text-black "
                >
                  <p className="text-center font-bold  "> see our work</p>
                  <MdArrowOutward className="h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HoverEffectImage;
