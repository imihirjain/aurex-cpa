import React from "react";
import header from "../assets/header.jpg";

const Header = () => {
  return (
    <div
      id="home"
      className="relative h-screen w-full overflow-hidden font-man"
    >
      <img src={header} alt="Header" className="object-cover w-full h-full" />

      {/* Overlay */}
      <div className="absolute inset-0 flex flex-col justify-center px-6 sm:px-10 md:px-16 bg-black/30">
        <h1
          className="text-[#caaa98] font-semibold leading-tight 
                       text-3xl sm:text-4xl md:text-6xl lg:text-7xl"
        >
          Strategic Tax, <br />
          Accounting & Advisory Services for <br /> Modern Businesses
        </h1>

        {/* <p className="mt-4 text-white text-sm sm:text-base md:text-lg max-w-xl">
          Building a Robust Financial Framework for Long-Term Success.
        </p> */}

        <a
          href="#contact"
          className="mt-6 w-fit cursor-pointer hover:bg-[#caaa98] hover:text-[#202940] transition-all duration-200 
                           px-5 py-2 sm:px-6 sm:py-3 
                           bg-[#202940] text-[#caaa98] 
                           text-sm sm:text-base md:text-lg 
                           font-semibold rounded-full"
        >
          Get Started
        </a>
      </div>
    </div>
  );
};

export default Header;
