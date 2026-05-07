import React from "react";
import Card from "./Card";
import service from "../data/service.js";

const Services = () => {
  return (
    <div
      id="service"
      className="scroll-mt-24 flex flex-col justify-center items-center px-4 py-10 sm:p-8 gap-6"
    >
      <h1 className="uppercase font-bold text-xl sm:text-2xl text-center">
        Our Services
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full max-w-6xl">
        {service.map((elem, index) => {
          return (
            <Card
              key={index}
              icon={elem.icon}
              title={elem.title}
              desc={elem.description}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Services;
