import React from "react";
import TestiCard from "./TestiCard";
import testiData from "../data/testimonials.js";

const Testimonials = () => {
  return (
    <div
      id="testimonials"
      className="flex flex-col gap-10 justify-center items-center p-10 overflow-hidden mt-10"
    >
      <h1 className="text-5xl font-semibold">Client Testimonials</h1>

      <div className="flex gap-4 flex-wrap p-9">
        {testiData.map((item, index) => (
          <div key={index} className="min-w-75 shrink-0">
            <TestiCard img={item.image} testi={item.review} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
