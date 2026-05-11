import React from "react";
import { toast } from "react-toastify";
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaMessage } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const Form = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted successfully");
    toast.success("Thankyou for contacting");
    e.target.reset();
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="p-5 sm:p-8 lg:p-10 flex flex-col gap-6 lg:gap-8 font-man text-beige">
        {/* row inputs */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 lg:gap-10 w-full">
          <div className="flex flex-col gap-2 w-full">
            <label
              htmlFor="username"
              className="flex items-center gap-3 text-sm sm:text-base"
            >
              <FaUser /> Your Name
            </label>
            <input
              type="text"
              id="username"
              className="w-full px-3 sm:px-4 py-2 border-b border-beige
                         focus:outline-none focus:ring-0"
            />
          </div>

          <div className="flex flex-col gap-2 w-full">
            <label
              htmlFor="email"
              className="flex items-center gap-3 text-sm sm:text-base"
            >
              <MdEmail />
              Your email
            </label>

            <input
              type="email"
              required
              id="email"
              className="w-full px-3 sm:px-4 py-2 border-b border-beige 
                         focus:outline-none focus:ring-0"
            />
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 lg:gap-10 w-full">
          <div className="flex flex-col gap-2 w-full">
            <label
              htmlFor="phone"
              className="flex items-center gap-3 text-sm sm:text-base"
            >
              <FaPhoneAlt /> Your Phone
            </label>
            <input
              type="number"
              id="phone"
              className="w-full px-3 sm:px-4 py-2 border-b border-beige
                         focus:outline-none focus:ring-0"
            />
          </div>

          <div className="flex flex-col gap-2 w-full">
            <label
              htmlFor="location"
              className="flex items-center gap-3 text-sm sm:text-base"
            >
              <FaLocationDot />
              Your Location
            </label>

            <input
              type="text"
              id="location"
              className="w-full px-3 sm:px-4 py-2 border-b border-beige 
                         focus:outline-none focus:ring-0"
            />
          </div>
        </div>

        {/* message */}
        <div className="flex flex-col gap-2 w-full">
          <label
            htmlFor="message"
            className="flex items-center gap-3 text-sm sm:text-base"
          >
            <FaMessage />
            Leave us a message
          </label>

          <textarea
            id="message"
            rows={4}
            className="w-full px-3 sm:px-4 py-2 border-b border-beige
                       focus:outline-none focus:ring-0 resize-none"
          ></textarea>
        </div>

        {/* button */}
        <button
          className="w-full sm:w-fit cursor-pointer font-bold text-base sm:text-lg 
                           px-4 py-2 text-darkBlue active:scale-95 
                           rounded bg-lightBrown"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default Form;
