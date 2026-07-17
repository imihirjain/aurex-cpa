import React, { useEffect, useRef, useState } from "react";
import arrow from "../assets/arrow.png";
import menu from "../assets/menu-white.png";
import logo from "../assets/logo.png";
import close from "../assets/close-black.png";

const Navbar = () => {
  const sideMenuRef = useRef();

  const [isScroll, setIsScroll] = useState(false);

  const openMenu = () => {
    sideMenuRef.current.style.transform = "translateX(-16rem)";
  };
  const closeMenu = () => {
    sideMenuRef.current.style.transform = "translateX(16rem)";
  };
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (scrollY > 50) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    });
  }, []);
  return (
    <>
      <nav
        className={`flex font-man justify-between  items-center w-full fixed px-5 lg:px-8 xl:px-[8%] z-50 ${
          isScroll ? "bg-darkBlue backdrop-blur-lg shadow-sm" : ""
        } `}
      >
        <a href="#home">
          {/* <h2 className="px-4 py-2 bg-darkBlue rounded-md text-beige tracking-wider font-semibold">
            Aurex CPA
          </h2> */}
          <img src={logo} alt="logo" className="w-24 h-24" />
        </a>

        <ul
          className={`hidden text-beige md:flex font-semibold items-center gap-6 lg:gap-8 px-12 py-3 rounded-full ${
            isScroll ? "" : "shadow-sm bg-darkBlue "
          }  `}
        >
          <li>
            {" "}
            <a href="#home" className="font-ovo hover:underline">
              Home
            </a>{" "}
          </li>
          <li>
            {" "}
            <a href="#service" className="font-ovo hover:underline  ">
              Services
            </a>{" "}
          </li>
          <li>
            {" "}
            <a href="#about" className="font-ovo hover:underline  ">
              About
            </a>{" "}
          </li>

          <li>
            {" "}
            <a href="#testimonials" className="font-ovo hover:underline">
              Testimonials
            </a>{" "}
          </li>
          <li>
            {" "}
            <a href="#contact" className="font-ovo hover:underline">
              Contact us
            </a>{" "}
          </li>
        </ul>

        <div className="flex items-center gap-4">
          {/* <button>
            <Image src={assets.moon_icon} alt="" className="w-6" />
          </button> */}
          <a
            href="#contact"
            className="hidden lg:flex bg-darkBlue text-beige hover:transition-all hover:duration-200 items-center gap-3 px-10 py-2.5 border border-[$caaa98] rounded-full ml-4 font-ovo"
          >
            Contact
          </a>
          <button className="block md:hidden ml-3" onClick={openMenu}>
            <img src={menu} alt="" className="w-6 cursor-pointer" />
          </button>
        </div>

        {/* Mobile menu */}
        <ul
          ref={sideMenuRef}
          className="flex md:hidden flex-col gap-4 py-20 text-darkBlue font-semibold px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-[#e9d8cf] transition duration-500"
        >
          <div onClick={closeMenu} className="absolute right-6 top-6">
            <img src={close} alt="" className="w-5 cursor-pointer" />
          </div>
          <li>
            {" "}
            <a
              href="#home"
              onClick={closeMenu}
              className="font-ovo hover:text-heading hover:underline"
            >
              Home
            </a>{" "}
          </li>
          <li>
            {" "}
            <a
              href="#service"
              onClick={closeMenu}
              className="font-ovo hover:text-heading hover:underline"
            >
              Services
            </a>{" "}
          </li>

          <li>
            {" "}
            <a
              href="#about"
              onClick={closeMenu}
              className="font-ovo hover:text-heading hover:underline  "
            >
              About
            </a>{" "}
          </li>

          <li>
            {" "}
            <a
              href="#testimonials"
              onClick={closeMenu}
              className="font-ovo hover:text-heading hover:underline"
            >
              Testimonials
            </a>{" "}
          </li>
          <li>
            {" "}
            <a
              href="#contact"
              onClick={closeMenu}
              className="font-ovo hover:text-heading hover:underline"
            >
              Contact us
            </a>{" "}
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
