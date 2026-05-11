import React, { useEffect, useState } from "react";
import Card from "./Card";
import { RiArrowRightWideLine } from "react-icons/ri";
import { RiArrowLeftWideLine } from "react-icons/ri";
import service from "../data/service";

const Services = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // kitne cards ek time pe dikhane hain
  const visibleCards = 4;

  const nextSlide = () => {
    if (currentIndex < service.length - visibleCards) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      setCurrentIndex(0); // loop back
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    } else {
      setCurrentIndex(service.length - visibleCards);
    }
  };

  // Auto slide
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 2000);

    return () => clearInterval(timer);
  }, [currentIndex]);

  return (
    <div
      id="service"
      className="scroll-mt-24 font-man flex flex-col items-center py-10 gap-8"
    >
      <h1 className="uppercase font-bold text-xl sm:text-5xl text-darkBlue">
        Our Services
      </h1>

      <div className="relative w-full max-w-7xl overflow-hidden">
        {/* cards wrapper */}
        <div
          className="flex items-stretch transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * (100 / visibleCards)}%)`,
          }}
        >
          {service.map((elem, index) => (
            <div
              key={index}
              className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 shrink-0 px-3 h-full"
            >
              <Card title={elem.title} desc={elem.description} />
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

export default Services;
