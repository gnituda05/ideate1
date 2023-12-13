// Importing React

import React, { useState } from "react";
import logo from "./icons/Black-Dominated.png";
import { MdArrowOutward } from "react-icons/md";

// Your React component
const HoverEffectImage1 = () => {
  const [hoverPanel, setHoverPanel] = useState(false);
  const [hoverBox, setHoverBox] = useState([false]); // For 4 boxes

  // Function to handle mouse enter and leave for boxes
  const handleBoxHover = (index: number, isHover: boolean) => {
    setHoverBox(hoverBox.map((hover, i) => (i === index ? isHover : hover)));
  };

  return (
    <div className=" bg-gray-800 ">
      <div className="flex flex-col items-center overflow-hidden ">
        <div
          className=" relative group h-screen overflow-hidden "
          onMouseEnter={() => setHoverPanel(true)}
          onMouseLeave={() => setHoverPanel(false)}
        >
          <div className="flex flex-col w-full transition duration-1000 ease-in-out group-hover:blur-md ">
            <h2 className="mt-5 text-8xl text-center font-extrabold text-lime-400 duration-500 ease-in-out transform group-hover:translate-y-[-300%]">
              *
            </h2>
            <div className="flex mx-auto flex-row gap-5 ">
              <h2 className="text-8xl text-center font-extrabold text-white duration-500 ease-in-out transform group-hover:translate-y-[-400%]">
                WE ARE
              </h2>
            </div>
          </div>
          <div className="mt-7 flex flex-row gap-14 transition duration-500 ease-in-out group-hover:blur-md ">
            {/* Image */}
            <img
              src={logo} // Replace with your image source
              alt="Descriptive Alt Text"
              className="h-72 transition duration-500 ease-in-out transform group-hover:translate-y-[-100%] group-hover:opacity-40"
            />
          </div>
          <div>
            <div
              className={`absolute group inset-0 h-screen transition-transform duration-500 ease-in-out ${
                hoverPanel ? "translate-x-0" : "-translate-x-full"
              }`}
            >
              <div className="flex flex-col  ">
                <div className="flex flex-row justify-between">
                  <h2 className="text-7xl  text-left font-extrabold text-white ">
                    FROM A BLANK
                  </h2>
                  <h2 className="text-7xl text-left font-extrabold text-lime-400 ">
                    *
                  </h2>
                </div>
              </div>

              <div className="flex flex-col justify-center items-center mt-16">
                {/* Container for boxes */}
                <div className="flex space-x-4">
                  {/* Box 1 */}
                  {hoverBox.map((hovered, index) => (
                    <div
                      className="w-52 h-64 rounded-lg flex flex-col bg-blue-600 text-white"
                      key={index}
                      onMouseEnter={() => handleBoxHover(0, true)}
                      onMouseLeave={() => handleBoxHover(0, false)}
                    >
                      <h2 className=" text-6xl font-bold ms-40 mt-2 text-lime-400 duration-500 ease-in-out ">
                        *
                      </h2>
                      <img
                        src={logo}
                        alt="Logo"
                        className="h-12 w-12 ms-4 mt-16 group-hover:opacity-0 opacity-100 transition-opacity "
                      />
                      <p className="text-lg leading-none font-bold text-left ms-4 mt-3 ease-in-out duration-500 transform ${hovered ? 'translate-y-[-200%]'}  ">
                        BRAND IDENTITY DESIGN
                      </p>
                      <div
                        className={` absolute p-3 border-none inset-0 mt-28 duration-500 group-hover:opacity-100 opacity-0 transition-opacity ${
                          hoverBox ? "translate-x-0" : "-translate-x-full"
                        }`}
                      >
                        <p className="text-xs text-justify leading-none">
                          Through a thoughtful combination of elements, we
                          create a cohesive and impactful brand presence that
                          leaves a lasting impression on our client's business.
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
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
  );
};

export default HoverEffectImage1;
