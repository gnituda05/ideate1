import { MdArrowOutward } from "react-icons/md";
import React, { useState } from "react";
import Mara from "./icons/Marac.png";
import Daily from "./icons/Daily.png";
import Renegades from "./icons/Renegades.png";

const Proj_Details = () => {
  const [hover, setHover] = useState(false);
  return (
    <div className="py-3 bg-gray-900  ">
      <div className="flex flex-col mx-auto max-w-screen-xl gap-6 mt-16 mb-32 ">
        <div className="flex flex-col  mt-14 ">
          <div className="flex flex-row justify-between">
            <h2 className="text-7xl text-left font-bold text-white ">
              WHERE DESIGN
            </h2>
          </div>
          <div className="flex flex-row gap-5 ">
            <h2 className="text-7xl  txt-left font-bold text-white ">MEETS</h2>
            <div className="flex flex-row">
              <p className="text-7xl text-left font-bold text-blue-600 ">
                TECH
              </p>
              <h2 className="text-7xl text-left font-bold text-lime-400 ">.</h2>
            </div>
          </div>
          <div className="flex flex-col gap-1 mt-7">
            <p className="text-xl text-white">
              At the crossroads of innovation and imagination. We craft
              solutions that blend creativity<br></br> and technology
              seamlessly, delivering experiences that redefine what's possible.
              <br></br> Join us in our design-driven innovation journey.
            </p>
          </div>
        </div>

        <div className=" flex flex-row gap-9  mt-7">
          {/* <!-- Individual box --> */}

          <div
            className="  relative group overflow-hidden "
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          >
            <img
              src={Mara}
              alt="Description"
              className="rounded-xl duration-500  group-hover:opacity-20 opacity-100  "
            />
            {/* <!-- Content for box 1 --> */}

            <div
              className={` absolute p-3 border-none inset-0  duration-500  group-hover:opacity-100 opacity-0 transition-opacity ${
                hover ? "translate-x-0" : "-translate-x-full"
              }`}
            >
              <div className="text-center text-white">
                <h2 className="text-xs font-bold text-white">APPAREL</h2>
                <h2 className="text-5xl mt-20 font-bold text-white">MARA C</h2>
                <p className="text-xs font-medium text-white">
                  THE MODERN FILIPINO
                </p>
                <div className="flex flex-row justify-center mt-9 gap-6 ">
                  <button
                    type="submit"
                    className="flex p-1 border  rounded-lg mt-3  text-white gap-2  "
                  >
                    <p className="text-center text-xs font-normal  ">
                      &emsp;BRANDING&emsp;
                    </p>
                  </button>
                  <button
                    type="submit"
                    className="flex p-1 border rounded-lg mt-3  text-white gap-2  "
                  >
                    <p className="text-center text-xs font-normal  ">
                      &emsp;WEB DESIGN&emsp;
                    </p>
                  </button>
                </div>
                <div className="flex flex-row justify-center gap-1 mt-1">
                  <p className="text-xs font-medium text-white">Learn more</p>
                  <MdArrowOutward className="h-3 w-3 mt-1" />
                </div>
              </div>
            </div>
          </div>
          <div
            className=" relative group  overflow-hidden "
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          >
            <img
              src={Daily}
              alt="Description"
              className="rounded-xl duration-500  group-hover:opacity-20 opacity-100  "
            />
            {/* <!-- Content for box 1 --> */}

            <div
              className={` absolute p-3 border-none inset-0  duration-500  group-hover:opacity-100 opacity-0 transition-opacity ${
                hover ? "translate-x-0" : "-translate-x-full"
              }`}
            >
              <div className="text-center text-white">
                <h2 className="text-xs font-bold text-white">BIKESHOP</h2>
                <h2 className="text-5xl mt-20  font-bold text-white">
                  DAILYPEDAL
                </h2>
                <p className="text-xs font-medium text-white">
                  GEARS AND APPAREL
                </p>
                <div className="flex flex-row justify-center mt-9 gap-6 ">
                  <button
                    type="submit"
                    className="flex p-1 border  rounded-lg mt-3  text-white gap-2  "
                  >
                    <p className="text-center text-xs font-normal  ">
                      &emsp;BRANDING&emsp;
                    </p>
                  </button>
                  <button
                    type="submit"
                    className="flex p-1 border rounded-lg mt-3  text-white gap-2  "
                  >
                    <p className="text-center text-xs font-normal  ">
                      &emsp;WEB DESIGN&emsp;
                    </p>
                  </button>
                </div>
                <div className="flex flex-row justify-center gap-1 mt-1">
                  <p className="text-xs font-medium text-white">Learn more</p>
                  <MdArrowOutward className="h-3 w-3 mt-1" />
                </div>
              </div>
            </div>
          </div>
          <div
            className=" relative group overflow-hidden "
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          >
            <img
              src={Renegades}
              alt="Logo"
              className=" rounded-xl group-hover:opacity-20 opacity-100 "
            />
            {/* <!-- Content for box 1 --> */}

            <div
              className={` absolute p-3 border-none inset-0  duration-500  group-hover:opacity-100 opacity-0 transition-opacity ${
                hover ? "translate-x-0" : "-translate-x-full"
              }`}
            >
              <div className="text-center text-white">
                <h2 className="text-xs font-bold text-white">
                  MENS ESSENTIALS
                </h2>
                <h2 className="text-5xl mt-14  font-bold text-white">
                  WE <br></br>RENEGADES
                </h2>
                <p className="text-xs font-medium text-white">GENTS OF TODAY</p>
                <div className="flex flex-row justify-center mt-3 gap-6 ">
                  <button
                    type="submit"
                    className="flex p-1 border  rounded-lg mt-3  text-white gap-2  "
                  >
                    <p className="text-center text-xs font-normal  ">
                      &emsp;BRANDING&emsp;
                    </p>
                  </button>
                  <button
                    type="submit"
                    className="flex p-1 border rounded-lg mt-3  text-white gap-2  "
                  >
                    <p className="text-center text-xs font-normal  ">
                      &emsp;WEB DESIGN&emsp;
                    </p>
                  </button>
                </div>
                <div className="flex flex-row justify-center gap-1 mt-1">
                  <p className="text-xs font-medium text-white">Learn more</p>
                  <MdArrowOutward className="h-3 w-3 mt-1" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Proj_Details;
