import React from "react";

import ideate from "./icons/ideate.png";

const Header: React.FC = () => {
  const smoothScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      className="
    fixed top-0 left-1/2 mt-6 rounded-xl transform -translate-x-1/2 z-10 
     bg-zinc-900"
    >
      <nav className="flex justify-between items-center p-4">
        <div className="flex flex-row justify-between gap-x-80 ">
          <div className="ms-10  text-white text-4xl font-bold">
            {" "}
            <img
              src={ideate}
              className="h-auto max-w-max"
              alt="image description"
            />
          </div>

          <div className="flex mt-0.5 gap-9 me-10">
            <li className="list-none">
              <a
                href="#home"
                className=" text-xs text-white hover:text-lime-400 "
                onClick={(e) => {
                  e.preventDefault();
                  smoothScroll("home");
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
                }}
              >
                TEAM
              </a>
            </li>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
