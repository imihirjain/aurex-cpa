import React, { useEffect, useState } from "react";
import TestiCard from "./TestiCard";
import testiData from "../data/testimonials.js";
import { RiArrowLeftWideLine, RiArrowRightWideLine } from "react-icons/ri";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const visibleCards = 6;

  const nextSlide = () => {
    if (currentIndex < testiData.length - visibleCards) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      setCurrentIndex(0);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    } else {
      setCurrentIndex(testiData.length - visibleCards);
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 2500);

    return () => clearInterval(timer);
  }, [currentIndex]);

  return (
    <div
      id="testimonials"
      className="scroll-mt-24 flex flex-col font-man gap-8 justify-center items-center px-4 py-10 sm:p-10 mt-10"
    >
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-center">
        Client Testimonials
      </h1>

      <div className="relative w-full max-w-6xl overflow-hidden">
        {/* slider */}
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * (100 / visibleCards)}%)`,
          }}
        >
          {testiData.map((item, index) => (
            <div key={index} className="w-full md:w-1/2 lg:w-1/3 shrink-0 px-3">
              <TestiCard testi={item.review} />
            </div>
          ))}
        </div>

        {/* Left */}
        <button
          onClick={prevSlide}
          className="absolute text-5xl left-0 top-1/2 -translate-y-1/2 bg-heading text-beige cursor-pointer"
        >
          <RiArrowLeftWideLine />
        </button>

        {/* Right */}
        <button
          onClick={nextSlide}
          className="absolute text-5xl right-0 text-beige cursor-pointer bg-heading top-1/2 -translate-y-1/2  "
        >
          <RiArrowRightWideLine />
        </button>
      </div>
    </div>
  );
};

export default Testimonials;
