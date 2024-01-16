import "./error.css";

const Error = () => {
  return (
    <div className="error-container">
      <div className="eclipse"></div>
      <div className="flex flex-col ms-5 sm:ms-10 mb-10">
        <h1 className="text-8xl font-bold lg:text-9xl lg:font-extrabold custom-heading px-0 error-message">
          OOPS!
        </h1>
        <h1 className="text-4xl font-bold lg:font-extrabold lg:text-5xl custom-heading suggestion">
          PAGE NOT FOUND
        </h1>
        <h1 className="p-5 xl:p-1 text-sm lg:text-base xl:text-lg xl:mb-8 text-center font-lato text-white">
          We can't find the page that you are looking for <br /> at the moment, it might be removed or is temporarily unavailable.
        </h1>
      </div>
    </div>
  );
};

export default Error;

