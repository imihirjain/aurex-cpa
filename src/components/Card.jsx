import React from "react";

const Card = ({ title, desc }) => {
  return (
    <div className="min-h-76 gap-4 flex flex-col px-10 py-5 bg-darkBlue rounded-tl-4xl rounded-br-4xl">
      <h2 className="text-2xl font-bold text-lightBrown text-center">
        {title}
      </h2>
      <p className=" text-justify text-beige">{desc}</p>
    </div>
  );
};

export default Card;
