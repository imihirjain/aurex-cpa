import React from "react";

const Form = () => {
  return (
    <>
      <form>
        <div className="p-10 flex flex-col justify-center items-center gap-8 ">
          <div className="flex gap-20">
            <div className="flex flex-col gap-2">
              <label htmlFor="username">Your Name</label>
              <input
                type="text"
                id="username"
                className="px-4 py-2 border-b border-emerald-700 focus:outline-none focus:ring-0"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="email">Your email</label>

              <input
                type="email"
                required
                id="email"
                className="px-4 py-2 border-b border-emerald-700 focus:outline-none focus:ring-0"
              />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="message">Leave us a message</label>
            <textarea
              id="message"
              className="px-4 py-2 border-b border-emerald-700 focus:outline-none focus:ring-0 w-130"
            ></textarea>
          </div>
          <button className="cursor-pointer font-medium text-lg px-4 py-1 text-white active:scale-95 rounded bg-emerald-400">
            Submit
          </button>
        </div>
      </form>
    </>
  );
};

export default Form;
