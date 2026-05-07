import React from "react";
import Card from "./Card";
import service from "../data/service.js";

const Services = () => {
  return (
    <>
      <div
        id="service"
        className="flex flex-col justify-center items-center p-8 gap-5"
      >
        <h1 className="uppercase font-bold text-2xl">Our Services</h1>
        <div className="grid-cols-4 grid gap-8">
          {service.map((elem) => {
            return (
              <div>
                <Card
                  icon={elem.icon}
                  title={elem.title}
                  desc={elem.description}
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Services;
