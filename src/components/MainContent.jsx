import React from "react";
import Button from "../components/Common/Button";

const MainContent = () => {
  return (
    <div className="flex flex-col md:flex-row items-center w-full my-10 smallHeight:my-1 medHeight:my-1">
      <div className="w-full smallHeight:w-full ipadAir:w-[65%] text-[#FFEFD5] space-y-2 lg:space-y-4 translate-x-6 translate-y-6 lg:translate-y-0 smallHeight:-translate-y-5 medHeight:-translate-y-0">
        <h3 className="font-caslon text-[22vw] ipadAir:text-[15vw] smallHeight:text-[12vw] md:text-[16vw] lg:text-[10vw] font-bold leading-none tracking-wider md:translate-y-4">
          SAHITI
        </h3>
        <p className="font-poppins text-justify md:text-left text-[4.5vw] ipadAir:text-[2.5vw] smallHeight:text-[4vw] md:text-[3vw] lg:text-[1.4vw] max-w-[90%] lg:max-w-[75%] leading-tight lg:text-justify">
          Welcome to Sahiti, Kozhikode’s literary gem! Immerse yourself in a
          celebration of words with thought-provoking discussions, captivating
          readings, and engaging workshops.
        </p>
        <p className="font-poppins text-[4.5vw] ipadAir:text-[2.6vw] smallHeight:text-[4.5vw] md:text-[3vw] lg:text-[1.4vw] max-w-[80%] lg:max-w-[60%] leading-tight">
          Join us at Sahiti, Where literature meets inspiration!
        </p>
        <p className="font-poppins font-bold text-[5.4vw] ipadAir:text-[3.4vw] smallHeight:text-[4.5vw] md:text-[3vw] lg:text-[2.4vw] max-w-[80%] lg:max-w-[60%] leading-tight">
          January 11 & 12 2025
        </p>
      </div>
      <div className="w-full ipadAir:w-[35%] smallHeight:w-[40%] flex flex-col items-center space-y-6 translate-y-[17vh] ipadAir:translate-y-[25vh] smallHeight:translate-y-[20vh] md:translate-y-[40vh] lg:translate-y-16">
        <div className="flex flex-col items-center space-y-4 scale-[1.2] ipadAir:-translate-x-4 smallHeight:-translate-x-3 md:-translate-x-8 lg:translate-x-6 smallHeight:-translate-y-5 medHeight:-translate-y-5">
          <img
            className="w-[50%] ipadAir:w-[60%] smallHeight:w-[70%] md:w-[100%] lg:w-[80%] h-auto smallHeight:scale-[1.7] smallHeight:-translate-y-7"
            src="/logos/logo-orange.png"
            alt="Sahiti Logo"
          />
          <Button
            link="https://example.com"
            bgColor="#FF8343"
            textColor="#FFFDD0"
            className=""
          >
            Learn More
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
