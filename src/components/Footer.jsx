import { FaRegCopyright } from "react-icons/fa";
import React from "react";
import { IoIosMail } from "react-icons/io";
import { IoLogoWhatsapp } from "react-icons/io";
import { ToastContainer } from "react-toastify";
const Footer = () => {
  return (
    <>
      <div className="text-center font-man bg-beige text-darkBlue font-bold sm:flex items-center justify-between p-10">
        <p className="flex items-center lg:gap-2">
          <FaRegCopyright /> 2026 Aurex CPA. All rights reserved.
        </p>

        <ul className="flex flex-col lg:flex-row items-center justify-center gap-2 sm:gap-10 mt-4 sm:mt-0">
          <li>
            <a
              className="flex gap-2 items-center"
              href="mailto:info@aurexcpas.com"
            >
              <IoIosMail
                size={24}
                className="cursor-pointer hover:text-heading hover:scale-95 transition-all duration-200"
              />
              info@aurexcpas.com
            </a>
          </li>

          <li>
            <a
              href="https://wa.me/919096019133"
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-2 items-center"
            >
              <IoLogoWhatsapp
                size={24}
                className="cursor-pointer hover:text-heading hover:scale-95 transition-all duration-200"
              />
              +91 9096019133
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Footer;
