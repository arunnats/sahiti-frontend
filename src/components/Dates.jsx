import React from "react";
import Button from "./Common/BiggerButton";
const Dates = () => {
  return (
    <div className="flex flex-col items-center w-full relative">
      {" "}
      {/* Add relative here */}
      <div className="flex flex-col justify-center items-center w-full px-4 md:px-8 lg:px-16 ipadPro:my-[6vh]">
        {/* Header Text */}
        <h3 className="text-[10vw] ipadAir:text-[8vw] ipadPro:text-[8.7vw] smallHeight:text-[8.5vw] md:text-[8vw] lg:text-[5.2vw] font-caslon w-[90vw] ipadAir:w-[80vw] ipadPro:w-[100vw] smallHeight:w-[85vw] md:w-[75vw] lg:w-[55vw] mt-[16vh] lg:mt-[10vw] text-[#FFEFD5] text-center leading-none">
          NIT CALICUT'S OWN
        </h3>
        <h3 className="text-[12vw] ipadAir:text-[8.4vw] ipadPro:text-[10vw] smallHeight:text-[9vw] md:text-[9vw] lg:text-[5.2vw] font-caslon w-[90vw] ipadAir:w-[80vw] ipadPro:w-[100vw] smallHeight:w-[85vw] md:w-[75vw] lg:w-[55vw] text-[#FFEFD5] text-center leading-none">
          LITERATURE FEST
        </h3>
        {/* Book Image */}
        <img
          className="w-[90vw] ipadAir:w-[80vw] ipadPro:w-[80vw] smallHeight:w-[40vw] md:w-[80vw] lg:w-[30vw]"
          src="/illustrations/book.png"
          alt="Sahiti Debate"
        />
        {/* Date Text */}
        <h3 className="text-[7vw] ipadAir:text-[6vw] ipadPro:text-[6vw] smallHeight:text-[6vw] md:text-[6vw] lg:text-[3.6vw] font-caslon w-[90vw] ipadAir:w-[80vw] smallHeight:w-[85vw] md:w-[75vw] lg:w-[55vw text-[#FFEFD5] mt-[3vh] lg:mt-0 text-center leading-none">
          10TH AND 11TH JANUARY 2025
        </h3>

        <div className="flex flex-col justify-center items-center mt-6">
          <Button
            link="https://www.instagram.com/sahiti_nitc/"
            bgColor="transparent"
            textColor="#feefd7"
            borderColor="#feefd7"
            useAlternateStyle={true}
            big={true}
          >
            @sahiti_nitc
          </Button>
        </div>
      </div>
      {/* Illustration Section */}
      <div className="w-full absolute bottom-0 scale-150 ipadPro:scale-[1.3] lg:scale-105 translate-y-[7vh] ipadPro:translate-y-[3vh] ipadAir:translate-y-[14.6vh] smallHeight:translate-y-[12.8vh] medHeight:translate-y-[7vh] lg:translate-y-[17vh]">
        <img
          src="/illustrations/datesIllustration-Desktop.svg"
          alt="Illustration"
          className="w-full"
        />
      </div>
    </div>
  );
};

export default Dates;
