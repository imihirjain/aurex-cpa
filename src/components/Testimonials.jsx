import React, { useEffect, useState } from "react";
import TestiCard from "./TestiCard";
import testiData from "../data/testimonials.js";
import { RiArrowLeftWideLine, RiArrowRightWideLine } from "react-icons/ri";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(4);

  // responsive visible cards
  useEffect(() => {
    const updateVisibleCards = () => {
      if (window.innerWidth < 640) {
        setVisibleCards(1); // mobile
      } else if (window.innerWidth < 1024) {
        setVisibleCards(2); // tablet
      } else {
        setVisibleCards(4); // desktop
      }
    };

    updateVisibleCards();
    window.addEventListener("resize", updateVisibleCards);

    return () => window.removeEventListener("resize", updateVisibleCards);
  }, []);

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
    const timer = setInterval(nextSlide, 2000);
    return () => clearInterval(timer);
  }, [currentIndex, visibleCards]);

  return (
    <div
      id="testimonials"
      className="scroll-mt-24 flex flex-col font-man gap-8 justify-center items-center py-10 "
    >
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-center">
        Client Testimonials
      </h1>

      <div className="relative w-full max-w-7xl overflow-hidden px-10 sm:px-8">
        {/* slider */}
        <div
          className="flex items-stretch transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * (100 / visibleCards)}%)`,
          }}
        >
          {testiData.map((item, index) => (
            <div key={index} className="w-full sm:w-1/2 lg:w-1/4 shrink-0 px-4">
              <TestiCard testi={item.review} />
            </div>
          ))}
        </div>

        {/* Left */}
        <button
          onClick={prevSlide}
          className="absolute text-5xl left-2 top-1/2 -translate-y-1/2 bg-heading text-beige cursor-pointer"
        >
          <RiArrowLeftWideLine />
        </button>

        {/* Right */}
        <button
          onClick={nextSlide}
          className="absolute text-5xl right-2 text-beige cursor-pointer bg-heading top-1/2 -translate-y-1/2  "
        >
          <RiArrowRightWideLine />
        </button>
      </div>
    </div>
  );
};

export default Testimonials;
