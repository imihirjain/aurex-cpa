import React from "react";
import about from "../assets/aboutus.jpg";

const About = () => {
  return (
    <div
      id="about"
      className=" scroll-mt-24 flex flex-col lg:flex-row px-4 sm:px-8 py-10 gap-8 items-center"
    >
      {/* left */}
      <div className="flex flex-col gap-4 w-full lg:w-1/2 p-2 sm:p-5 lg:p-10">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-emerald-600">
          About us
        </h1>

        <p className="text-emerald-900 text-sm sm:text-base md:text-lg tracking-normal sm:tracking-wide">
          Aurex CPA is a growing CPA firm with a vision of becoming one of the
          finest accounting and advisory firms at global level. We believe we
          can grow if we help our clients grow. This mindset, which is at the
          core of our business values, makes us the ideal growth partner for
          your business.
        </p>

        <p className="text-emerald-900 text-sm sm:text-base md:text-lg tracking-normal sm:tracking-wide">
          We operate in more than 100 countries and territories, offering
          world-class tax, audit, accounting, consultancy and financial advisory
          services. From cutting-edge tools to the seasoned experts needed to
          make the most of said tools, you get the complete finance experience
          when you choose Aurex CPA.
        </p>
      </div>

      {/* right */}
      <div className="w-full lg:w-1/2">
        <img
          src={about}
          alt="About"
          className="w-full h-64 sm:h-80 md:h-[400px] lg:h-[500px] object-cover rounded-lg"
        />
      </div>
    </div>
  );
};

export default About;
