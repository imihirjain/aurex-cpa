import { FaRegCopyright } from "react-icons/fa";
import React from "react";

const Footer = () => {
  return (
    <div className="">
      <div className="text-center sm:flex items-center justify-between p-10">
        <p className="flex items-center lg:gap-2">
          {" "}
          <FaRegCopyright /> 2026 Aurex CPA. All rights reserved.
        </p>
        <ul className=" flex items-center justify-center gap-10 mt-4 sm:mt-0">
          <li>
            {/* <a target="_blank" href="https://github.com/imihirjain">
              Github
            </a> */}
            punkaj@aurexcpa.com
          </li>
          <li>
            {/* <a
              target="_blank"
              href="https://www.linkedin.com/in/mihir-jain-583633213"
            >
              Linkedin
            </a> */}
            +91 XXXXXXXXXX
          </li>
        </ul>
      </div>
      <hr />
    </div>
  );
};

export default Footer;
