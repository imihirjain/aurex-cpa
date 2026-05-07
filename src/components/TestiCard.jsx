import React from "react";
import logo from "../assets/aboutus.jpg";
const TestiCard = ({ img, testi }) => {
  return (
    <div className="flex flex-col gap-2 bg-emerald-100 p-6 items-center justify-center w-80 h-76 overflow-y-auto border-emerald-950 rounded-2xl border">
      <img
        src={img}
        alt="logo"
        className="rounded-full w-24 object-cover h-24"
      />
      <p>{testi}</p>
    </div>
  );
};

export default TestiCard;
