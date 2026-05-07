import React from "react";
import ExpertCard from "./ExpertCard";
import expert from "../data/expert.js";

const Expert = () => {
  return (
    <div className="scroll-mt-24 flex flex-col justify-center items-center bg-emerald-300 px-4 py-10 sm:p-8 gap-6">
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-white text-center">
        Expert Guidance
      </h1>

      <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-6 sm:gap-10 w-full">
        {expert.map((item) => {
          return (
            <div key={item.id} className="w-full sm:w-auto">
              <ExpertCard title={item.title} desc={item.desc} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Expert;
