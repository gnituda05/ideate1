import React, { useState, useEffect, useRef } from "react";
import logo from "./icons/Black-Dominated.png";
import brand from "./icons/branding.png";
import web from "./icons/web_dev.png";
import soft from "./icons/soft_dev.png";
import staff from "./icons/staff_aug.png";
import projs from "./icons/PROJS (1).png";

import { MdArrowOutward } from "react-icons/md";
// import "./project.css"; // Make sure to import your CSS

const BGS: React.FC = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [showBackground, setShowBackground] = useState(false);
  const [hover, setHover] = useState(false);

  const [scrolledDown, setScrolledDown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.pageYOffset);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  useEffect(() => {
    const checkPanelPosition = () => {
      const panel = document.getElementById("target-panel");
      if (panel) {
        const panelPosition = panel.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (panelPosition <= windowHeight / 2) {
          setShowBackground(true);
        } else {
          setShowBackground(false);
        }
      }
    };

    window.addEventListener("scroll", checkPanelPosition);
    return () => window.removeEventListener("scroll", checkPanelPosition);
  }, []);

  const popUpStart = 300;

  const [animate, setAnimate] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);

  // useEffect(() => {
  //   const onScroll = () => {
  //     if (panelRef.current) {
  //       const panelTop = panelRef.current.getBoundingClientRect().top;
  //       const panelBottom = panelRef.current.getBoundingClientRect().bottom;
  //       const windowHeight = window.innerHeight;

  //       // Check if the panel is within the viewport
  //       if (panelTop < windowHeight && panelBottom >= 0) {
  //         setAnimate(true);
  //       } else {
  //         setAnimate(false);
  //       }
  //     }
  //   };

  //   window.addEventListener("scroll", onScroll);
  //   return () => window.removeEventListener("scroll", onScroll);
  // }, []);

  useEffect(() => {
    const handleScroll = () => {
      const panel = document.getElementById("yourPanelId");
      if (panel) {
        const panelHeight = panel.offsetHeight;
        const windowHeight = window.innerHeight;
        const scrollY = window.scrollY;
        const panelTop = panel.getBoundingClientRect().top + scrollY;
        const triggerPoint = panelTop - windowHeight * 0.5;

        if (scrollY > triggerPoint) {
          setAnimate(true);
        } else {
          setAnimate(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`bg-gray-900  screen `} id="works">
      <div className="flex flex-col mx-auto max-w-screen-xl gap-6 overflow-hidden ">
        <div className="relative h-screen mb-16  ">
          <div
            className={`absolute inset-0 transition-all duration-1000 ms-5 me-5 ${
              scrollPosition > popUpStart ? "blur-lg" : ""
            }`}
            style={{
              transform: `translateY(${
                scrollPosition > popUpStart
                  ? (scrollPosition - popUpStart) * -0.5
                  : 0
              }px)`,
            }}
            ref={panelRef}
          >
            <div className="flex flex-col items-center w-full transition duration-1000 ease-in-out h-screen   ">
              <div className=" flex flex-row transition duration-500 ease-in-out   ">
                {/* Image */}
                {/* <img
                  src={logo} // Replace with your image source
                  alt="Descriptive Alt Text"
                  className="h-72 transition duration-500 ease-in-out transform "
                /> */}
                <img
                  src={projs} // Replace with your image source
                  alt="Descriptive Alt Text"
                  className="  duration-500 ease-in-out transform h-auto "
                />
                {/* <img
                  src={logo} // Replace with your image source
                  alt="Descriptive Alt Text"
                  className="h-72 mt-72 transition duration-500 ease-in-out transform "
                /> */}
              </div>
            </div>
          </div>

          <div
            id="yourPanelId"
            className={`absolute inset-0 transition-transform duration-1000 ease-in-out  ${
              animate ? "translate-x-0" : "-translate-x-full "
            }`}
          >
            <div className="flex flex-col mt-28  ">
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
                  We take our client's creative visions and bring them to life,
                  making their dreams even better than they could have imagined.
                  We don't only transform blank pages into stunning websites but
                  also craft unique and unforgettable experiences. Ideate goes
                  beyond simply delivering results - we inject playful and
                  creative approach to ensure that every project is a
                  masterpiece.
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center mt-16 ">
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
                      src={brand}
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
                        Through a thoughtful combination of elements, we create
                        a cohesive and impactful brand presence that leaves a
                        lasting impression on our client's business.
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
                      src={web}
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
                        Through a thoughtful combination of elements, we create
                        a cohesive and impactful brand presence that leaves a
                        lasting impression on our client's business.
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
                      src={soft}
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
                        Through a thoughtful combination of elements, we create
                        a cohesive and impactful brand presence that leaves a
                        lasting impression on our client's business.
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
                      src={staff}
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
                        Through a thoughtful combination of elements, we create
                        a cohesive and impactful brand presence that leaves a
                        lasting impression on our client's business.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="group">
                <button
                  type="submit"
                  className=" flex p-5 w-44 h-16 gap-2 duration-500 transform rounded-full mt-10 bg-blue-600 text-white group-hover:bg-lime-400 group-hover:text-black group-hover:w-52 "
                >
                  <p className="text-center ms-2 font-bold duration-500 transform group-hover:ms-7 ">
                    {" "}
                    see our work
                  </p>
                  <MdArrowOutward className="h-5" />
                </button>
              </div>
            </div>
            {/* Content that animates */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BGS;
