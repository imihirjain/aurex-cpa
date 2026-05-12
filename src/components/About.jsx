import React from "react";
import about from "../assets/aboutus.jpg";

const About = () => {
  return (
    <div
      id="about"
      className=" scroll-mt-24 flex font-man tracking-widest flex-col lg:flex-row px-4 sm:px-8 py-10 gap-8 items-center bg-darkBlue"
    >
      {/* left */}
      <div className="flex flex-col gap-4 w-full lg:w-1/2 p-2 sm:p-5 lg:p-10">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-lightBrown">
          About us
        </h1>

        <p className="text-beige text-sm sm:text-base md:text-lg tracking-normal sm:tracking-widest">
          Aurex CPA & Advisors LLC was founded with a commitment to delivering
          reliable, forward-thinking accounting and advisory services for modern
          businesses. We work closely with entrepreneurs, startups, and
          established companies to simplify financial management, strengthen
          compliance, and support smarter business decisions.
        </p>

        <p className="text-beige text-sm sm:text-base md:text-lg tracking-normal sm:tracking-widest">
          Our approach combines professional expertise, personalized service,
          and strategic insight to help clients adapt to changing business
          environments and unlock new opportunities for growth.
        </p>
        <p className="text-beige text-sm sm:text-base md:text-lg tracking-normal sm:tracking-widest">
          At Aurex CPA, we aim to build lasting relationships by providing
          practical solutions that support both business success and long-term
          financial confidence.
        </p>
      </div>

      {/* right */}
      <div className="w-full lg:w-1/2">
        <img
          src={about}
          alt="About"
          className="w-full h-64 sm:h-80 lg:h-150 object-cover"
        />
      </div>
    </div>
  );
};

export default About;
