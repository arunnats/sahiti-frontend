import React from "react";
import Button from "../components/Common/Button";

const HeroImageWithButton = () => {
  return (
    <div className="w-full ipadAir:w-[35%] smallHeight:w-[40%] flex flex-col items-center space-y-6 translate-y-[17vh] ipadAir:translate-y-[25vh] smallHeight:translate-y-[20vh] md:translate-y-[40vh] lg:translate-y-16">
      <div className="flex flex-col items-center space-y-4 scale-[1.2] -translate-x-5 ipadAir:-translate-x-4 smallHeight:-translate-x-3 md:-translate-x-8 lg:translate-x-0">
        <img
          className="w-[50%] ipadAir:w-[60%] smallHeight:w-[70%] md:w-[100%] lg:w-[80%] h-auto"
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
  );
};

export default HeroImageWithButton;
