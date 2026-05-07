import React from "react";
import icon5 from "../assets/dollar.svg";

const Card = ({ icon, title, desc }) => {
  return (
    <div className="flex flex-col gap-1 items-center p-5 rounded">
      <img src={icon} alt={title} className="w-38 h-38" />
      <h2 className="text-2xl font-bold">{title}</h2>
      <p className="leading-relaxed tracking-wider">{desc}</p>
    </div>
  );
};

export default Card;
