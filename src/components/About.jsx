import React from "react";
import about from "../assets/aboutus.jpg";
const About = () => {
  return (
    <div id="about" className="px-8 flex">
      {/* left */}
      <div className="flex flex-col gap-4 w-1/2 p-10">
        <h1 className="text-4xl font-semibold text-emerald-600">About us</h1>
        <p className="text-emerald-900 text-xl tracking-widest px-5">
          AT&F is a growing CPA firm with a vision of becoming one of the finest
          accounting and advisory firms at global level. We believe we can grow
          if we help our clients grow. This mindset, which is at the core of our
          business values, makes us the ideal growth partner for your business.
        </p>
        <p className="text-emerald-900 text-xl tracking-widest px-5">
          We operate in more than 100 countries and territories, offering
          world-class tax, audit, accounting, consultancy and financial advisory
          services. From cutting-edge tools to the seasoned experts needed to
          make the most of said tools, you get the complete finance experience
          when you choose AT&F.
        </p>
      </div>

      {/* right */}
      <div className="w-1/2">
        <img src={about} alt="About" className="h-150 object-cover w-full" />
      </div>
    </div>
  );
};

export default About;
