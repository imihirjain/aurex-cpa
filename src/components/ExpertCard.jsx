import React from "react";

const ExpertCard = ({ title, desc }) => {
  return (
    <div
      className="flex flex-col text-white bg-emerald-400/20 backdrop-blur-md 
                    rounded-xl p-5 sm:p-6 md:p-7 
                    w-full sm:w-64 md:w-72 
                    gap-2 shadow-md"
    >
      <h1 className="text-lg sm:text-xl md:text-2xl font-semibold">{title}</h1>

      <p className="text-sm sm:text-base font-normal leading-relaxed">{desc}</p>
    </div>
  );
};

export default ExpertCard;
