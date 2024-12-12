import React from "react";
import Navbar from "../components/Navbar";
import Button from "../components/Common/Button";
import Gallery from "../components/Gallery/Gallery";
import RightArchBorder from "../components/Common/RightArchBorder";
import LeftArchBorder from "../components/Common/LeftArchBorder";

const Debate = () => {
  return (
    <div className="bg-[#FF8343] p-0 m-0 relative overflow-clip h-max">
      {/* Left  Border */}
      <LeftArchBorder />

      <RightArchBorder />

      <div
        id="about"
        className="min-h-screen flex flex-col items-center px-2 md:px-8 lg:px-16 overflow-hidden relative "
      >
        <Navbar />
        <h1 className="text-white md:text-6xl text-3xl center font-bold mt-8 mx-20 text-center ">Sahiti Parliamentary Debate</h1>

        <img className="h-[200px] w-auto mt-6" src="/logos/sahiti-cream.svg" alt="alt" />
        {/* <img
					className="w-[60vw] ipadAir:w-[65vw] ipadPro:w-[60vw] smallHeight:w-[50vw] md:w-[60vw] lg:w-[25vw] my-3"
					src="/logos/debate-orange.png"
					alt="Sahiti Debate"
				/> */}

      
        <p className="text-white m-10 mt-7 mb-3 px-4 md:px-52 text-xl text-justify">
          The flagstone event will be the NITC Parliamentary Debate - held in a BPD format under the WUDC (World Universities Debating Championship) model. The Debate will span 2 days and aims to provide participants with a platform to engage in structured debates, enhancing their public speaking, analytical, and decision-making skills
          <br />
          <br />
          To register for the event, visit :
        </p>
        

        <br />

        <div className="flex flex-col md:flex-row justify-center items-center space-y-2 md:space-x-4 md:space-y-0 mt-6">
          <Button
            link="/brochures/Sahiti-Brochure.pdf"
            bgColor="#FFFDD0"
            textColor="#FF8343"
            isPDF={true}
          >
            View Brochure
          </Button>
          <Button
          link="https://docs.google.com/forms/d/e/1FAIpQLSci2XwY2BLfXg76cKGpRZ_88dmbxmWtUZoGcrCkJ9kPGUqk7A/viewform"
          bgColor="#FFFDD0"
          textColor="#FF8343"
        >
          Register Now
        </Button>
        </div>

        <br /><br />
        

        
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
    </div>
  );
};

export default Debate;
