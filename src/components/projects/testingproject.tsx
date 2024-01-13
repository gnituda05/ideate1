import React, { useState, useEffect, useRef } from "react";
import logo from "./icons/Black-Dominated.png";
import brand from "./icons/branding.png";
import web from "./icons/web_dev.png";
import soft from "./icons/soft_dev.png";
import staff from "./icons/staff_aug.png";
import projs from "./icons/PROJS (1).png";
import "./project.css";

import { MdArrowOutward } from "react-icons/md";
// import "./project.css"; // Make sure to import your CSS

interface BGSProps {
  onNavigate: () => void;
}

const BGS: React.FC<BGSProps> = ({ onNavigate }) => {
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
      const panel = document.getElementById("PanelId");
      if (panel) {
        const windowHeight = window.innerHeight;
        const scrollY = window.scrollY;
        const panelRect = panel.getBoundingClientRect();
        // const panelBottom = panelRect.bottom + scrollY;

        // Trigger point when the top 1/4 of the panel first becomes visible
        const triggerPoint = windowHeight - panelRect.height * 0.7;

        if (scrollY >= triggerPoint) {
          setAnimate(true);
        } else {
          setAnimate(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`bg-zinc-950  screen px-5 `} id="works">
      <div className="flex flex-col mx-auto max-w-screen-xl gap-5  overflow-hidden">
        <div className="relative h-screen max-h-700:mb-96 min-h-700:mb-48 xl:mb-52 lg:mt-10 xl:mt-1 ">
          <div
            className={`absolute inset-0 transition-all duration-1000 ms-5 me-5 ${
              scrollPosition > popUpStart ? "bg-black opacity-30 blur-lg" : ""
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
                <img
                  src={projs} // Replace with your image source
                  alt="Descriptive Alt Text"
                  className="  duration-500 ease-in-out transform h-auto "
                />
              </div>
            </div>
          </div>

          <div
            id="PanelId"
            className={`absolute content inset-0 transition-transform duration-1000 ease-in-out  ${
              animate ? "center-panel_1" : "translate-y-full"
            }`}
          >
            <div className="flex flex-col mt-16 xl:mt-36 w-full px-2 transition duration-1000 ease-in-out group-hover:blur-md ">
              <h2 className=" text-7xl lg:text-8xl text-center font-extrabold text-lime-400  ">
                *
              </h2>
              <div className="flex mx-auto flex-row gap-5 ">
                <h2 className="text-5xl lg:text-8xl text-center font-extrabold text-white  ">
                  WE
                </h2>
                <h2 className="text-5xl lg:text-8xl text-center font-extrabold text-blue-600 ">
                  EXCEL
                </h2>
                <h2 className="text-5xl lg:text-8xl text-center font-extrabold text-white ">
                  ON
                </h2>
              </div>

              <h2 className="text-5xl lg:text-8xl  text-center font-extrabold text-white duration-500 ease-in-out transform group-hover:translate-y-[-400%]">
                WHAT WE DO.
              </h2>
            </div>
            <div className="flex flex-col justify-center items-center mt-24 lg:mt-10 xl:mt-20 ">
              <div className="xl:flex flex-row gap-4 xl:gap-8">
                {/* Container for boxes */}
                <div className="flex space-x-4 lg:space-x-8 lg:mb-8">
                  {/* Box 1 */}
                  <div className="w-40 h-60 lg:w-64 lg:h-72 rounded-lg flex flex-col bg-blue-600 text-white">
                    <div
                      className=" relative group h-screen overflow-hidden "
                      onMouseEnter={() => setHover(true)}
                      onMouseLeave={() => setHover(false)}
                    >
                      <h2 className=" text-5xl lg:text-6xl font-bold text-right me-3 mt-2 text-lime-400  ">
                        *
                      </h2>
                      <img
                        src={brand}
                        alt="Logo"
                        className="h-12 w-12 ms-3 mt-12 lg:h-16 lg:w-16 lg:mt-16 group-hover:opacity-0 opacity-100 transition-opacity "
                      />
                      <p className="text-base lg:text-lg mt-2 custom-heading1  leading-none font-bold text-left ms-3  ease-in-out duration-500 transform group-hover:translate-y-[-300%] lg:group-hover:translate-y-[-350%] ">
                        BRAND <br></br> IDENTITY DESIGN
                      </p>
                      <div
                        className={` absolute p-5 mt-20  lg:mt-20 border-none inset-0  duration-500 group-hover:opacity-100 opacity-0 transition-opacity ${
                          hover ? "translate-x-0" : "-translate-x-full"
                        }`}
                      >
                        <p className="text-xs lg:text-base text-left leading-none">
                          Through a thoughtful combination of elements, we
                          create a cohesive and impactful brand presence that
                          leaves a lasting impression on our client's business.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Box 2 */}
                  <div className="w-40 h-60 lg:w-64 lg:h-72 rounded-lg flex flex-col bg-white  text-black">
                    <div
                      className=" relative group h-screen  overflow-hidden "
                      onMouseEnter={() => setHover(true)}
                      onMouseLeave={() => setHover(false)}
                    >
                      <h2 className=" text-5xl lg:text-6xl font-bold text-right me-3 mt-2 text-blue-400 duration-500 ease-in-out ">
                        *
                      </h2>
                      <img
                        src={web}
                        alt="Logo"
                        className="h-12 w-12 lg:h-16 lg:w-16 ms-3  mt-12 lg:mt-16 group-hover:opacity-0 opacity-100 transition-opacity  "
                      />
                      <p className="text-base lg:text-lg custom-heading1  leading-none font-bold text-left ms-4 mt-1 ease-in-out duration-500 transform group-hover:translate-y-[-300%] lg:group-hover:translate-y-[-350%]">
                        WEB<br></br> DEVELOPMENT
                      </p>
                      <div
                        className={` absolute p-5  mt-20  lg:mt-20 border-none inset-0  duration-500 group-hover:opacity-100 opacity-0 transition-opacity ${
                          hover ? "translate-x-0" : "-translate-x-full"
                        }`}
                      >
                        <p className="text-xs lg:text-base text-left leading-none">
                          With a focus on user-friendly interfaces, intuitive
                          design, and efficient coding, we build websites that
                          not only captivate visitors but also drive business
                          growth.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex space-x-4 lg:space-x-8 mt-10 lg:mt-0">
                  {/* Box 3 */}
                  <div className="w-40 h-60 lg:w-64 lg:h-72 rounded-lg flex flex-col bg-blue-600 text-white">
                    <div
                      className=" relative group h-screen  overflow-hidden "
                      onMouseEnter={() => setHover(true)}
                      onMouseLeave={() => setHover(false)}
                    >
                      <h2 className=" text-5xl lg:text-6xl font-bold text-right me-3 mt-2 text-lime-400 duration-500 ease-in-out ">
                        *
                      </h2>
                      <img
                        src={soft}
                        alt="Logo"
                        className="h-12 w-12 lg:h-16 lg:w-16 ms-3 mt-12 lg:mt-16 group-hover:opacity-0 opacity-100 transition-opacity   "
                      />
                      <p className="text-base lg:text-lg custom-heading1 leading-none font-bold text-left ms-4 mt-2 ease-in-out duration-500 transform group-hover:translate-y-[-300%] lg:group-hover:translate-y-[-350%]">
                        SOFTWARE <br></br> DEVELOPMENT
                      </p>
                      <div
                        className={` absolute p-5  mt-20  lg:mt-20 border-none inset-0  duration-500 group-hover:opacity-100 opacity-0 transition-opacity ${
                          hover ? "translate-x-0" : "-translate-x-full"
                        }`}
                      >
                        <p className="text-xs lg:text-base  text-left leading-none">
                          With a meticulous approach to coding, rigorous quality
                          assurance, and user-centric mindset, we deliver
                          reliable and effiecient software applications that
                          drive an organization forward.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Box 4 */}
                  <div className="w-40 h-60 lg:w-64 lg:h-72 rounded-lg flex flex-col bg-white  text-black">
                    <div
                      className=" relative group h-screen  overflow-hidden "
                      onMouseEnter={() => setHover(true)}
                      onMouseLeave={() => setHover(false)}
                    >
                      <h2 className=" text-5xl lg:text-6xl font-bold text-right me-3 mt-2 text-blue-400 duration-500 ease-in-out ">
                        *
                      </h2>
                      <img
                        src={staff}
                        alt="Logo"
                        className="h-12 w-12 lg:h-16 lg:w-16 ms-3 mt-12 lg:mt-16 group-hover:opacity-0 opacity-100 transition-opacity   "
                      />
                      <p className="text-base lg:text-lg custom-heading1 leading-none font-bold text-left ms-4 mt-2 ease-in-out duration-500 transform group-hover:translate-y-[-300%] lg:group-hover:translate-y-[-350%]">
                        STAFF <br></br> AUGMENTATION
                      </p>
                      <div
                        className={` absolute p-5 mt-20 lg:mt-20 border-none inset-0 duration-500 group-hover:opacity-100 opacity-0 transition-opacity ${
                          hover ? "translate-x-0" : "-translate-x-full"
                        }`}
                      >
                        <p className="text-xs lg:text-base text-left leading-none">
                          We carefully match our clients with experienced and
                          qualified talents who seamlessly integrate into their
                          workflows and contribute to the sucess of their
                          project.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Content that animates */}
            </div>
            <div className="group flex justify-center">
              <button
                type="submit"
                onClick={onNavigate}
                className=" flex p-5 w-44 h-16 gap-2 duration-500 transform rounded-2xl mt-10 bg-blue-600 text-white group-hover:bg-lime-400 group-hover:text-black group-hover:w-56 group-hover:h-20 group-hover:mt-8 "
              >
                <p className="text-center ms-2 font-bold duration-500 transform group-hover:ms-5 group-hover:mt-1.5 group-hover:text-xl ">
                  {" "}
                  see our work
                </p>
                <MdArrowOutward className="h-6 w-5 duration-500 transform group-hover:mt-1.5 group-hover:w-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BGS;
