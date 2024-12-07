import React from "react";
import Button from "../components/Common/Button";
import { Link } from "react-router";

const Home = () => {
  return (
    <main
      className="h-screen bg-no-repeat bg-cover bg-[center_top_100%]
      bg-[url('/bg/Hero-Mobile.svg')] 
      sm:bg-[url('/bg/Hero-Tablet.svg')] 
      lg:bg-[url('/bg/Hero-Desktop.svg')]
      flex flex-col  items-center px-8 lg:px-16 overflow-hidden"
    >
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
                <a>Gallary</a>
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
              <a>Gallary</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <Link href="/">
            <img
              className="translate-y-1"
              src="/illustrations/homeButton.svg"
              alt=""
            />
          </Link>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center w-full space-x-10 my-10">
        <div className="w-full md:w-[60%] text-[#FFEFD5] space-y-4 translate-x-6 translate-y-6 lg:translate-y-0">
          <h3 className="justify-center md:justify-start font-caslon text-[22vw] md:text-[16vw] lg:text-[10vw] font-bold leading-none tracking-wider">
            SAHITI
          </h3>
          <p className="font-poppins text-[4.5vw] md:text-[3vw] lg:text-[1.8vw] max-w-[90%] lg:max-w-[70%] leading-tight lg:text-justify">
            Welcome to Sahiti, Kozhikode’s literary gem! Immerse yourself in a
            celebration of words with thought-provoking discussions, captivating
            readings, and engaging workshops.
          </p>
          <p className="font-poppins text-[4.8vw] md:text-[3vw] lg:text-[1.8vw] max-w-[80%] lg:max-w-[60%] leading-tight">
            Join us at Sahiti, Where literature meets inspiration!
          </p>
        </div>

        <div className="w-full md:w-[40%] flex flex-col items-center space-y-6 translate-y-[17vh] md:translate-y-[40vh] lg:translate-y-16">
          <div className="flex flex-col items-center space-y-4 scale-[1.2] -translate-x-5 md:-translate-x-8 lg:translate-x-0">
            <img
              className="w-[50%] md:w-[100%] lg:w-[80%] h-auto"
              src="/logos/logo-orange.png"
              alt="Sahiti Logo"
            />
            <Button
              link="https://example.com"
              bgColor="#FF8343"
              textColor="#FFFDD0"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
