import React from "react";

const ExpertCard = ({ title, desc }) => {
  return (
    <div className="flex flex-col text-white text-2xl font-semibold gap-2 p-7">
      <h1>{title}</h1>
      <p>{desc}</p>
    </div>
  );
};

export default ExpertCard;
