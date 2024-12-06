import React from 'react';

const Design = () => {
  return (
    <div className="min-h-screen bg-custom-bg text-white flex flex-col md:flex-row bg-cover bg-center bg-no-repeat bg-fixed items-center md:items-start justify-center md:justify-start p-6 md:p-16 lg:p-24">
      <div className="md:mt-10 md:ml-16 lg:mt-[2rem] lg:ml-[2rem] flex flex-col items-center md:items-start">
        <div className="mb-[5rem]">
        <button className="relative text-black font-bold py-2 px-[4rem] rounded-lg shadow-lg">
        <span className="absolute inset-0 bg-gray-700 translate-y-2 translate-x-2 rounded-lg"></span>
        <span className="absolute inset-0 bg-yellow-500 rounded-lg"></span>
        <span className="relative z-10 font-mono text-[20px]">ASSIGNMENT</span>
      </button>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-sora mt-4 md:mt-5 font-extrabold uppercase text-center md:text-left">
          UI Developer
        </h1>
        <h1 className="mb-[5rem] text-3xl sm:text-4xl md:text-6xl lg:text-8xl mt-3 md:mt-5 font-sora font-extrabold uppercase text-center md:text-left">
          Assignment
        </h1>
        <p className="text-base sm:text-lg md:text-xl lg:text-[30px] font-mono mt-8 md:mt-12 font-normal uppercase tracking-wide text-center md:text-left">
          Company
        </p>
        <p className="text-base sm:text-lg md:text-xl lg:text-[30px] font-mono mt-4 md:mt-5 font-normal uppercase tracking-wide text-center md:text-left">
          Juspay Technologies Private Limited
        </p>
      </div>
    </div>
  );
};

export default Design ;
