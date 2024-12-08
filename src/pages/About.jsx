import React from "react";
import Navbar from "../components/Navbar";
import Button from "../components/Common/Button";
import Gallery from "../components/Gallery/Gallery";

const About = () => {
  return (
    <div className="bg-[#E97451] p-0 m-0 relative overflow-clip h-[200vh]">
      {/* Left  Border */}
      <div className="absolute top-0 -left-14 md:left-0 md:h-screen h-[50%]">
        <img  src="/illustrations/borderTopLeft.svg"  alt="Left Illustration"  className="w-[241px]"/>
        <img  src="/illustrations/border-block.svg"  alt="Left Illustration block"  className="w-[104px]"/>
        <img  src="/illustrations/border-block.svg"  alt="Left Illustration block"  className="w-[104px]"/>
        <img  src="/illustrations/border-block.svg"  alt="Left Illustration block"  className="w-[104px]"/>
        <img  src="/illustrations/border-block.svg"  alt="Left Illustration block"  className="w-[104px]"/>
      </div>

      {/* Left Right Border */}
      <div className="absolute top-0 -right-14 md:right-0 h-screen flex flex-col items-end">
        <img src="/illustrations/borderTopRight.svg" alt="Right Illustration" className="w-[241px]"/>
        <img src="/illustrations/border-block.svg" alt="Left Illustration block" className="w-[104px]"/>
        <img src="/illustrations/border-block.svg" alt="Left Illustration block" className="w-[104px]"/>
        <img src="/illustrations/border-block.svg" alt="Left Illustration block" className="w-[104px]"/>
        <img src="/illustrations/border-block.svg" alt="Left Illustration block" className="w-[104px]"/>
      </div>

      <div
        id="about"
        className="h-max flex flex-col items-center px-2 md:px-8 lg:px-16 overflow-hidden relative "
      >
        <Navbar />
        <h1 className="text-white text-4xl font-bold mt-8">About Us</h1>
        <p className="text-white text-center mt-4 px-16 md:px-52 text-xl">
          The Literary and Debating Club of NIT Calicut is one of the oldest and the most prestigious clubs of NITC. Kindled by the passion for the world of literature, the club is a stage for people to to flaunt their belletristic, oratory and expressive genius. Through the years, we have been striving persistently to spread our expense in close accordance with our rule of thumb, 'Deeds not Words'. Organizing competitions in extempore, elocution, debates, quizzes and so much more has helped the club live up to and beyond the expectations for which it was set up.
            To explore the various ventures of LnD, visit this page:

        </p>
        <Button link="/#about" bgColor="#FF8343" textColor="#FFFDD0">
          Learn More
        </Button>
      </div>

      {/* Second Section */}
      {/* <div className="absolute top-screen z-10 -left-14 md:left-0 h-screen rotate-180">
        <img
          src="/illustrations/borderTopRight.svg"
          alt="Left Illustration for Second Section"
          className="h-full"
        />
      </div>

      <div className="absolute top-screen z-10 -right-14 md:right-0 h-screen rotate-180">
        <img
          src="/illustrations/borderTopLeft.svg"
          alt="Right Illustration for Second Section"
          className="h-full"
        />
      </div> */}

      <div
          id="gallery"
          className="w-[90%] min-h-screen bg-[#feefd7] flex justify-center p-4 mx-auto"
        >
          <div className="h-[80%] my-2">
            <Gallery />
          </div>
        </div>
    </div>
  );
};

export default About;
