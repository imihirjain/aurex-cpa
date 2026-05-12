import React, { useRef, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaMessage } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import emailjs from "@emailjs/browser";

const Form = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  console.log(import.meta.env.VITE_EMAILJS_SERVICE_ID);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      )
      .then(() => {
        toast("Thankyou for contacting", {
          position: "top-right",
          autoClose: 3000,
        });
        form.current.reset();
      })
      .catch((err) => {
        console.log(err);
        toast.error("Failed to send");
      })
      .finally(() => {
        setLoading(false);
      });
  };
  return (
    <>
      <ToastContainer position="bottom-right" />

      <form ref={form} onSubmit={handleSubmit}>
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
                name="name"
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
                name="email"
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
                name="phone"
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
                name="location"
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
              name="message"
              rows={4}
              className="w-full px-3 sm:px-4 py-2 border-b border-beige
                       focus:outline-none focus:ring-0 resize-none"
            ></textarea>
          </div>

          {/* button */}
          <button
            className={`w-full sm:w-fit transition font-bold text-base sm:text-lg px-4 py-2 text-darkBlue  rounded bg-lightBrown ${loading ? "opacity-70 cursor-not-allowed" : "cursor-pointer active:scale-95"}`}
          >
            {loading ? "Submitting..." : "Submit"}
          </button>
        </div>
      </form>
    </>
  );
};

export default Form;
