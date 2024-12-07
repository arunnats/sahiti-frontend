import React from "react";
import { Link } from "react-router";

const Navbar = () => {
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
            <li>
              <a>About</a>
            </li>
            <li>
              <a>Debate</a>
            </li>
            <li>
              <a>Sponsors</a>
            </li>
            <li>
              <a>Gallery</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-2xl">
          <li>
            <a>About</a>
          </li>
          <li>
            <a>Debate</a>
          </li>
          <li>
            <a>Sponsors</a>
          </li>
          <li>
            <a>Gallery</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <Link href="/">
          <img
            className="translate-y-1"
            src="/illustrations/homeButton.svg"
            alt="Home Button"
          />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
