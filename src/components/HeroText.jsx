import React from "react";

const HeroText = () => {
  return (
    <div className="w-full ipadAir:w-[65%] smallHeight:w-[60%] text-[#FFEFD5] space-y-4 translate-x-6 translate-y-6 lg:translate-y-0">
      <h3 className="font-caslon text-[22vw] ipadAir:text-[16vw] smallHeight:text-[18vw] md:text-[16vw] lg:text-[10vw] font-bold leading-none tracking-wider">
        SAHITI
      </h3>
      <p className="font-poppins text-[4.5vw] ipadAir:text-[3vw] smallHeight:text-[4vw] md:text-[3vw] lg:text-[1.8vw] max-w-[90%] lg:max-w-[70%] leading-tight lg:text-justify">
        Welcome to Sahiti, Kozhikode’s literary gem! Immerse yourself in a
        celebration of words with thought-provoking discussions, captivating
        readings, and engaging workshops.
      </p>
      <p className="font-poppins text-[4.8vw] ipadAir:text-[3.2vw] smallHeight:text-[4.5vw] md:text-[3vw] lg:text-[1.8vw] max-w-[80%] lg:max-w-[60%] leading-tight">
        Join us at Sahiti, Where literature meets inspiration!
      </p>
    </div>
  );
};

export default HeroText;
