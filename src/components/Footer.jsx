import { FaRegCopyright } from "react-icons/fa";
import React from "react";

const Footer = () => {
  return (
    <div className="text-center font-man bg-beige text-darkBlue font-bold sm:flex items-center justify-between p-10">
      <p className="flex items-center lg:gap-2">
        {" "}
        <FaRegCopyright /> 2026 Aurex CPA. All rights reserved.
      </p>
      <ul className=" flex items-center justify-center gap-10 mt-4 sm:mt-0">
        <li>
          <a href="mailto:info@aurexcpas.com">info@aurexcpas.com</a>
        </li>
        <li>+91 XXXXXXXXXX</li>
      </ul>
    </div>
  );
};

export default Footer;
