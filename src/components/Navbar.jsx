import React from "react";
import { Link } from "react-router";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

const Navbar = () => {
  const scrollToSection = (id) => {
    const target = document.getElementById(id);
    if (target) {
      gsap.to(window, {
        duration: 1.2,
        scrollTo: { y: target.offsetTop, autoKill: true },
        ease: "power2.inOut",
      });
    }
  };

  return (
    <div className="navbar font-poppins text-[#FFEFD5] mt-4">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="h-8 w-8 stroke-black"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-[#FFEFD5] text-[#FF8343] rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li onClick={() => scrollToSection("about")}>
              <Link href="/about">About</Link>
            </li>
            <li onClick={() => scrollToSection("about")}>
              <a>Debate</a>
            </li>
            <li>
              <a>Sponsors</a>
            </li>
            <li onClick={() => scrollToSection("about")}>
              <a>Contact</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-xl">
          <li onClick={() => scrollToSection("about")}>
            <Link href="/about">About</Link>
          </li>
          <li onClick={() => scrollToSection("debate")}>
            <a>Debate</a>
          </li>
          <li>
            <a>Sponsors</a>
          </li>
          <li onClick={() => scrollToSection("gallery")}>
            <a>Contact</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <li onClick={() => scrollToSection("main")}>
          <img
            className="translate-y-1"
            src="/illustrations/homeButton.svg"
            alt="Home Button"
          />
        </li>
      </div>
    </div>
  );
};

export default Navbar;
