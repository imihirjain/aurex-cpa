import React, { useEffect, useRef, useState } from "react";
import header from "../assets/header-bg-color.png";
import arrow from "../assets/arrow.png";
import menu from "../assets/menu-white.png";
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
      <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] ">
        <img alt="header" src={header} className="w-full" />
      </div>

      <nav
        className={`flex justify-between items-center w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 z-50 ${
          isScroll ? "bg-white/50 backdrop-blur-lg shadow-sm" : ""
        } `}
      >
        <a href="#home">
          <h2 className="px-4 py-2 bg-linear-to-r from-emerald-800 to-emerald-600 rounded-md text-white tracking-wider font-semibold">
            Aurex CPA
          </h2>
        </a>

        <ul
          className={`hidden md:flex items-center gap-6 lg:gap-8 px-12 py-3 rounded-full ${
            isScroll ? "" : "shadow-sm bg-white/50"
          }  `}
        >
          <li>
            {" "}
            <a href="#home" className="font-ovo hover:text-emerald-600">
              Home
            </a>{" "}
          </li>
          <li>
            {" "}
            <a href="#service" className="font-ovo hover:text-emerald-600">
              Services
            </a>{" "}
          </li>
          <li>
            {" "}
            <a href="#about" className="font-ovo hover:text-emerald-600  ">
              About
            </a>{" "}
          </li>

          <li>
            {" "}
            <a href="#testimonials" className="font-ovo hover:text-emerald-600">
              Testimonials
            </a>{" "}
          </li>
          <li>
            {" "}
            <a href="#contact" className="font-ovo hover:text-emerald-600">
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
            className="hidden md:flex bg-emerald-600 text-white hover:transition-all hover:duration-200 items-center gap-3 px-10 py-2.5 border border-emerald-500 rounded-full ml-4 font-ovo"
          >
            Contact
            <img src={arrow} alt="" className="w-3" />
          </a>
          <button className="block md:hidden ml-3" onClick={openMenu}>
            <img src={menu} alt="" className="w-6" />
          </button>
        </div>

        {/* Mobile menu */}
        <ul
          ref={sideMenuRef}
          className="flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-emerald-50 transition duration-500"
        >
          <div onClick={closeMenu} className="absolute right-6 top-6">
            <img src={close} alt="" className="w-5 cursor-pointer" />
          </div>
          <li>
            {" "}
            <a
              href="#home"
              onClick={closeMenu}
              className="font-ovo hover:text-emerald-600"
            >
              Home
            </a>{" "}
          </li>
          <li>
            {" "}
            <a
              href="#service"
              onClick={closeMenu}
              className="font-ovo hover:text-emerald-600"
            >
              Services
            </a>{" "}
          </li>

          <li>
            {" "}
            <a
              href="#about"
              onClick={closeMenu}
              className="font-ovo hover:text-emerald-600  "
            >
              About
            </a>{" "}
          </li>

          <li>
            {" "}
            <a
              href="#testimonials"
              onClick={closeMenu}
              className="font-ovo hover:text-emerald-600"
            >
              Testimonials
            </a>{" "}
          </li>
          <li>
            {" "}
            <a
              href="#contact"
              onClick={closeMenu}
              className="font-ovo hover:text-emerald-600"
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
