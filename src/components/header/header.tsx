import React, { useState, useEffect } from "react";
import { MdArrowOutward, MdMenu } from "react-icons/md";
import ideate from "./icons/ideate.png";

interface HeaderProps {
  isShrunk: boolean;
  onNavigate1: (target: string) => void;
}

const Header: React.FC<HeaderProps> = ({ onNavigate1 }) => {
  const [isShrunk, setIsShrunk] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 640);

  const smoothScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 640);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsShrunk(currentScrollY > window.innerHeight / 2); // Change threshold as needed
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const handleNavigate = (e: React.MouseEvent<HTMLAnchorElement>, target: string) => {
    e.preventDefault();
    smoothScroll(target);
    onNavigate1(target);
};


  return (
    <div
      className="
  fixed ms-0 top-0 left-1/2 mt-6 rounded-full transform -translate-x-1/2 z-10 
   bg-zinc-900 lg:hidden "
    >
      <nav className="flex items-center ">
        <div className="flex flex-row">
          <div className="ms-10 text-white text-4xl font-bold">
            {" "}
            <img
              src={ideate}
              className="mt-4 h-auto max-w-max"
              alt="image description"
              onClick={(e) => {
                e.preventDefault();
                smoothScroll("home");
                onNavigate1("home");
              }}
            />
          </div>

        
          <div
            className={`flex ${
              isShrunk
                ? "p-4 transform  mt-0.5 ms-28 gap-0 duration-500 opacity-0  "
                : " transform p-4 mt-0.5 ms-52 gap-9 me-5 duration-500 opacity-100"
            }`}
          >
            <li className="list-none">
              <a
                href="#home"
                className=" text-xs text-white hover:text-lime-400 "
                onClick={(e) => {
                  e.preventDefault();
                  smoothScroll("home");
                  onNavigate1("home");
                }}
              >
                HOME
              </a>{" "}
            </li>

            <li className="list-none">
              <a
                href="#works"
                className=" text-xs text-white hover:text-lime-400"
                onClick={(e) => {
                  e.preventDefault();
                  smoothScroll("works");
                  onNavigate1("works");
                }}
              >
                WORKS
              </a>
            </li>
            <li className="list-none">
              <a
                href="#iteam"
                className="text-xs text-white hover:text-lime-400"
                onClick={(e) => {
                  e.preventDefault();
                  smoothScroll("iteam");
                  onNavigate1("iteam");
                }}
              >
                TEAM
              </a>
            </li>
          </div>

          <div
            className={` absolute group   ${
              isShrunk
                ? "transform ms-52 mt-2.5 gap-0 duration-100 opacity-100"
                : "p-4 duration-100 opacity-0"
            }
            `}
          >
            <button
              type="submit"
              className="flex h-10 w-36 ms-2 rounded-full bg-blue-600 text-white duration-500 transform group-hover:bg-lime-400 group-hover:text-black group-hover:w-40 group-hover:ms-0 "
              onClick={(e) => {
                e.preventDefault();
                isShrunk ? onNavigate1("ContactUs") : onNavigate1("home");
              }}
            >
              <p className="text-center mt-2 ms-4 font-bold  duration-500 transform group-hover:ms-6  ">
                {" "}
                work with us
              </p>
              <MdArrowOutward className="ms-1 h-5 mt-2.5" />
            </button>
          </div>
        </div>
        
      </nav>
    </div>
  );
};

export default Header;
