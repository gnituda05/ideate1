// React component with TypeScript
import React from "react";

const AnimatedText: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      {["Word1", "Word2", "Word3"].map((word, index) => (
        <div
          key={word}
          className={`text-2xl font-bold text-blue-500 animate-rise delay-${index}`}
        >
          {word}
        </div>
      ))}
    </div>
  );
};

export default AnimatedText;
