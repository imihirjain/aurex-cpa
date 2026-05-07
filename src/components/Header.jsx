import React from "react";
import header from "../assets/header.jpg";
const Header = () => {
  return (
    <div id="home" className="relative h-screen">
      <img src={header} alt="Header" className="object-cover w-full h-full" />
      <h1 className="absolute top-1/5 p-8 text-emerald-400  text-8xl font-bold">
        Global Partners for <br /> Thriving Businesses
      </h1>
      <p className="absolute top-1/2 p-8 text-black text-xl">
        Building a Robust Financial Framework for Long-Term Success.
      </p>
      <button className="absolute top-3/5 m-8 cursor-pointer border border-emerald-500 px-6 py-3 bg-emerald-400 text-white text-lg font-semibold rounded-full">
        Get Started
      </button>
    </div>
  );
};

export default Header;
