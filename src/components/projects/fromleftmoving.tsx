// Importing React
import React, { useState } from "react";

// Your React component
const BackgroundSlideEffect = () => {
  const [hover, setHover] = useState(false);

  //   return (
  //     <div
  //       className="relative w-full h-screen overflow-hidden"
  //       onMouseEnter={() => setHover(true)}
  //       onMouseLeave={() => setHover(false)}
  //     >
  //       {/* Initial background */}
  //       <div className="absolute inset-0 bg-blue-500 flex justify-center items-center">
  //         {/* Your content here */}
  //         <p className="text-white text-3xl">Original Background</p>
  //       </div>

  //       {/* Sliding background */}
  //       <div
  //         className={`absolute inset-0 bg-green-500 transition-transform duration-500  ${
  //           hover ? "translate-x-0" : "translate-x-full"
  //         }`}
  //       >
  //         {/* Content for the sliding background */}
  //         <p className="text-white text-3xl">New Background</p>
  //       </div>
  //     </div>
  //   );
  // };
  return (
    <div
      className="relative w-full h-screen overflow-hidden"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {/* Initial background */}
      <div className="absolute inset-0 bg-blue-500 flex justify-center items-center">
        {/* Your content here */}
        <p className="text-white text-3xl">Original Background</p>
      </div>

      {/* Sliding background */}
      <div
        className={`absolute inset-0 bg-green-500 transition-transform duration-500 ease-in-out ${
          hover ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Content for the sliding background */}
        <p className="text-white text-3xl">New Background</p>
      </div>

      <div
        className="relative w-full h-screen overflow-hidden"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        {/* Initial background */}

        {/* Sliding background */}
        <div
          className={`absolute inset-0 bg-green-500 transition-transform duration-500 ease-in-out ${
            hover ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          {/* Content for the sliding background */}
          <p className="text-white text-3xl">New Background</p>
        </div>
      </div>
    </div>
  );
};

export default BackgroundSlideEffect;
