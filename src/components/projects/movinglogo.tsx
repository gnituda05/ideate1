// Importing React
import React, { useState } from "react";
import logo from "./icons/Black-Dominated.png";

// Your React component
const ImageAnimation = () => {
  const [hover, setHover] = useState(false);
  return (
    <div className="bg-black flex justify-center items-center h-screen">
      {/* Container for the moving image */}
      <div className="animate-moveUp">
        {/* Image tag - replace with your image source */}
        <img
          src={logo}
          alt="Descriptive Alt Text"
          className="w-48 h-48 object-cover"
        />
      </div>

      <div className="flex flex-col justify-center items-center">
        {/* Container for boxes */}
        <div className="flex space-x-4">
          {/* Box 1 */}
          <div className="w-52 h-64 rounded-lg flex flex-col bg-blue-600 text-white">
            <div
              className=" relative group h-screen overflow-hidden "
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
            >
              <h2 className=" text-6xl font-bold ms-40 mt-2 text-lime-400 duration-500 ease-in-out ">
                *
              </h2>
              <img
                src={logo}
                alt="Logo"
                className="h-12 w-12 ms-4 mt-16 group-hover:opacity-0 opacity-100 transition-opacity "
              />
              <p className="text-lg leading-none font-bold text-left ms-4 mt-3 ease-in-out duration-500 transform group-hover:translate-y-[-330%] ">
                BRAND IDENTITY DESIGN
              </p>
              <div
                className={` absolute p-3 border-none inset-0 mt-28 duration-500 group-hover:opacity-100 opacity-0 transition-opacity ${
                  hover ? "translate-x-0" : "-translate-x-full"
                }`}
              >
                <p className="text-xs text-justify leading-none">
                  Through a thoughtful combination of elements, we create a
                  cohesive and impactful brand presence that leaves a lasting
                  impression on our client's business.
                </p>
              </div>
            </div>
          </div>

          {/* Box 2 */}
          <div className="w-52 h-64 rounded-lg flex flex-col bg-white  text-black">
            <div
              className=" relative group h-screen  overflow-hidden "
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
            >
              <h2 className=" text-6xl font-bold ms-40 mt-2 text-blue-400 duration-500 ease-in-out ">
                *
              </h2>
              <img
                src={logo}
                alt="Logo"
                className="h-12 w-12 ms-4 mt-16 group-hover:opacity-0 opacity-100 transition-opacity  "
              />
              <p className="text-lg leading-none font-bold text-left ms-4 mt-3 ease-in-out duration-500 transform group-hover:translate-y-[-330%]">
                WEB &emsp; &emsp;DEVELOPMENT
              </p>
              <div
                className={` absolute p-3 border-none inset-0 mt-28 duration-500 group-hover:opacity-100 opacity-0 transition-opacity ${
                  hover ? "translate-x-0" : "-translate-x-full"
                }`}
              >
                <p className="text-xs text-justify leading-none">
                  Through a thoughtful combination of elements, we create a
                  cohesive and impactful brand presence that leaves a lasting
                  impression on our client's business.
                </p>
              </div>
            </div>
          </div>

          {/* Box 3 */}
          <div className="w-52 h-64 rounded-lg flex flex-col bg-blue-600 text-white">
            <div
              className=" relative group h-screen  overflow-hidden "
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
            >
              <h2 className=" text-6xl font-bold ms-40 mt-2 text-lime-400 duration-500 ease-in-out ">
                *
              </h2>
              <img
                src={logo}
                alt="Logo"
                className="h-12 w-12 ms-4 mt-16 group-hover:opacity-0 opacity-100 transition-opacity   "
              />
              <p className="text-lg leading-none font-bold text-left ms-4 mt-3 ease-in-out duration-500 transform group-hover:translate-y-[-330%]">
                SOFTWARE DEVELOPMENT
              </p>
              <div
                className={` absolute p-3 border-none inset-0 mt-28 duration-500 group-hover:opacity-100 opacity-0 transition-opacity ${
                  hover ? "translate-x-0" : "-translate-x-full"
                }`}
              >
                <p className="text-xs text-justify leading-none">
                  Through a thoughtful combination of elements, we create a
                  cohesive and impactful brand presence that leaves a lasting
                  impression on our client's business.
                </p>
              </div>
            </div>
          </div>

          {/* Box 4 */}
          <div className="w-52 h-64 rounded-lg flex flex-col bg-white  text-black">
            <div
              className=" relative group h-screen  overflow-hidden "
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
            >
              <h2 className=" text-6xl font-bold ms-40 mt-2 text-blue-400 duration-500 ease-in-out ">
                *
              </h2>
              <img
                src={logo}
                alt="Logo"
                className="h-12 w-12 ms-4 mt-16 group-hover:opacity-0 opacity-100 transition-opacity   "
              />
              <p className="text-lg leading-none font-bold text-left ms-4 mt-3 ease-in-out duration-500 transform group-hover:translate-y-[-330%]">
                STAFF AUGMENTATION
              </p>
              <div
                className={` absolute p-3 border-none inset-0 mt-28 duration-500 group-hover:opacity-100 opacity-0 transition-opacity ${
                  hover ? "translate-x-0" : "-translate-x-full"
                }`}
              >
                <p className="text-xs text-justify leading-none">
                  Through a thoughtful combination of elements, we create a
                  cohesive and impactful brand presence that leaves a lasting
                  impression on our client's business.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageAnimation;
