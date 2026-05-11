import React from "react";
import logo from "../assets/aboutus.jpg";
const TestiCard = ({ testi }) => {
  return (
    <div className="flex h-full rounded-tl-4xl rounded-br-4xl bg-darkBlue text-beige px-10 py-5 items-center justify-center w-64">
      <p>{testi}</p>
    </div>
  );
};

export default TestiCard;
