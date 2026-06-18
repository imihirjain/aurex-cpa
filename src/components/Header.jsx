import React from "react";
import header from "../assets/header.jpg";

const Header = () => {
  return (
    <div
      id="home"
      className="relative h-screen w-full overflow-hidden font-man"
    >
      <img
        src={header}
        alt="CPA tax preparation bookkeeping and accounting services"
        className="object-cover w-full h-full"
      />

      <div className="absolute inset-0 flex flex-col justify-center px-6 sm:px-10 md:px-16 bg-black/30">
        <h1
          className="text-beige font-semibold leading-tight
          text-3xl sm:text-4xl md:text-6xl lg:text-7xl"
        >
          CPA, Tax & Accounting Services
          <br />
          for Growing Businesses
        </h1>

        <p className="mt-4 text-beige max-w-3xl text-base md:text-lg">
          Aurex CPA Solutions provides bookkeeping, tax preparation, payroll
          management and accounting services for businesses across the United
          States.
        </p>

        <a
          href="#contact"
          className="mt-6 w-fit cursor-pointer hover:bg-beige
          hover:text-darkBlue transition-all duration-200
          px-5 py-2 sm:px-6 sm:py-3 bg-darkBlue
          text-beige text-sm sm:text-base md:text-lg
          font-semibold rounded-full"
        >
          Get Started
        </a>
      </div>
    </div>
  );
};

export default Header;
