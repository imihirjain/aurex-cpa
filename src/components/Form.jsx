import React from "react";

const Form = () => {
  return (
    <form>
      <div className="p-5 sm:p-8 lg:p-10 flex flex-col gap-6 lg:gap-8">
        {/* row inputs */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 lg:gap-10 w-full">
          <div className="flex flex-col gap-2 w-full">
            <label htmlFor="username" className="text-sm sm:text-base">
              Your Name
            </label>
            <input
              type="text"
              id="username"
              className="w-full px-3 sm:px-4 py-2 border-b border-emerald-700 
                         focus:outline-none focus:ring-0"
            />
          </div>

          <div className="flex flex-col gap-2 w-full">
            <label htmlFor="email" className="text-sm sm:text-base">
              Your email
            </label>

            <input
              type="email"
              required
              id="email"
              className="w-full px-3 sm:px-4 py-2 border-b border-emerald-700 
                         focus:outline-none focus:ring-0"
            />
          </div>
        </div>

        {/* message */}
        <div className="flex flex-col gap-2 w-full">
          <label htmlFor="message" className="text-sm sm:text-base">
            Leave us a message
          </label>

          <textarea
            id="message"
            rows={4}
            className="w-full px-3 sm:px-4 py-2 border-b border-emerald-700 
                       focus:outline-none focus:ring-0 resize-none"
          ></textarea>
        </div>

        {/* button */}
        <button
          className="w-full sm:w-fit cursor-pointer font-medium text-base sm:text-lg 
                           px-4 py-2 text-white active:scale-95 
                           rounded bg-emerald-400"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default Form;
