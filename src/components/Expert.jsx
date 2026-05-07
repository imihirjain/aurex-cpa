import React from "react";
import ExpertCard from "./ExpertCard";
import expert from "../data/expert.js";

const Expert = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-emerald-300 p-8 gap-5">
      <h1 className="text-6xl font-semibold text-white ">Expert Guidance</h1>
      <div className="flex gap-18">
        {expert.map((item) => {
          return (
            <div key={item.id}>
              <ExpertCard title={item.title} desc={item.desc} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Expert;
