import React from "react";
import TestiCard from "./TestiCard";
import testiData from "../data/testimonials.js";

const Testimonials = () => {
  return (
    <div
      id="testimonials"
      className="scroll-mt-24 flex flex-col gap-8 justify-center items-center px-4 py-10 sm:p-10 mt-10"
    >
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-center">
        Client Testimonials
      </h1>

      <div className="flex gap-4 sm:gap-6 overflow-x-auto w-full px-2 sm:px-4 py-6 scroll-smooth">
        {testiData.map((item, index) => (
          <div key={index} className="shrink-0 w-[85%] sm:w-80 md:w-96">
            <TestiCard img={item.image} testi={item.review} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
