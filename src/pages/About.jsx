import React from "react";
import Navbar from "../components/Navbar";
import Button from "../components/Common/Button";
import Gallery from "../components/Gallery/Gallery";

const About = () => {
  return (
    <div className="bg-[#E97451] p-0 m-0 relative overflow-clip h-max">
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
        <p className="text-white text-center m-10 px-4 md:px-52 text-xl">
          <a href="https://www.lndnitc.org/" className="font-bold underline">The Literary and Debating Club</a> of NIT Calicut is one of the oldest and the most prestigious clubs of NITC. 
          Kindled by the passion for the world of literature, the club is a stage for people to to flaunt their belletristic, oratory and expressive genius. Through the years, we have been striving persistently to spread our expense in close accordance with our rule of thumb, 'Deeds not Words'. Organizing competitions in extempore, elocution, debates, quizzes and so much more has helped the club live up to and beyond the expectations for which it was set up.
          <br /><br />To explore the various ventures of LnD, visit this page:

        </p>
        <br />
        <Button link="https://links.lndnitc.org/" bgColor="#FF8343" textColor="#FFFDD0" >
            links.lndnitc.org
        </Button>
        <br />
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
          className=" min-h-screen bg-[#feefd7] flex justify-center mx-[106px] mx-auto"
          style={{
            width: "calc('100%-208px')",
          }}
        >
          <div className="h-[10%] my-2">
            <Gallery />
          </div>
        </div>
    </div>
  );
};

export default About;
