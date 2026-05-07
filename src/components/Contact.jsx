import React from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import Form from "./Form";

const Contact = () => {
  return (
    <div id="contact" className="flex p-10 bg-emerald-100">
      {/* left */}
      <div className="flex flex-col gap-4 w-1/2 p-9">
        <h1 className="uppercase text-lg font-bold text-amber-600">
          Get in touch
        </h1>
        <h2 className="text-5xl font-semibold text-green-700">
          Let’s Discuss Your <br /> Goals
        </h2>
        <p className="font-medium text-lg tracking-widest">
          Ready to take your business to the next level? Reach out to us today
          to discuss your goals and explore how our strategic consulting can
          help your business thrive.
        </p>
        <div className="flex gap-5 text-emerald-950">
          <FaLinkedinIn
            size={28}
            className="cursor-pointer hover:text-emerald-600 hover:scale-95 transition-all duration-200"
          />
          <FaFacebook
            size={28}
            className="cursor-pointer hover:text-emerald-600 hover:scale-95 transition-all duration-200"
          />
          <FaInstagram
            size={28}
            className="cursor-pointer hover:text-emerald-600 hover:scale-95 transition-all duration-200"
          />
        </div>
      </div>
      {/* right */}
      <div className="w-1/2">
        <Form />
      </div>
    </div>
  );
};

export default Contact;
