import React, { useEffect, useState } from "react";
import Card from "./Card";
import { RiArrowRightWideLine, RiArrowLeftWideLine } from "react-icons/ri";
import service from "../data/service";

const Services = () => {
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
    if (currentIndex < service.length - visibleCards) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      setCurrentIndex(0);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    } else {
      setCurrentIndex(service.length - visibleCards);
    }
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 2000);
    return () => clearInterval(timer);
  }, [currentIndex, visibleCards]);

  return (
    <div className="scroll-mt-24 font-man flex flex-col items-center py-10 gap-8">
      <h1 className="uppercase font-bold text-xl sm:text-5xl text-darkBlue">
        Our Services
      </h1>

      <div className="relative w-full max-w-7xl overflow-hidden">
        <div
          className="flex items-stretch transition-transform duration-700"
          style={{
            transform: `translateX(-${currentIndex * (100 / visibleCards)}%)`,
          }}
        >
          {service.map((elem, index) => (
            <div key={index} className="w-full sm:w-1/2 lg:w-1/4 shrink-0 px-3">
              <Card title={elem.title} desc={elem.description} />
            </div>
          ))}
        </div>

        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 text-5xl bg-heading text-beige"
        >
          <RiArrowLeftWideLine />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 text-5xl bg-heading text-beige"
        >
          <RiArrowRightWideLine />
        </button>
      </div>
    </div>
  );
};

export default Services;
