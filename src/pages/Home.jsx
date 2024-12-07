import React from "react";
import Navbar from "../components/Navbar";
import MainContent from "../components/MainContent";
import AboutSahiti from "../components/AboutSahiti";
import Debate from "../components/Debate";
import Dates from "../components/Dates";
import Divider from "../components/Common/Divider";
import Divider2 from "../components/Common/Divider2";
import Gallery from "../components/Gallery/Gallery";

const Home = () => {
  return (
    <div className="bg-[#feefd7]">
      <div
        className="h-screen bg-no-repeat bg-cover bg-[center_top_98%]
      bg-[url('/bg/Hero-Mobile.svg')] 
      sm:bg-[url('/bg/Hero-Tablet.svg')] 
      lg:bg-[url('/bg/Hero-Desktop.svg')]
      flex flex-col items-center px-2 md:px-8 lg:px-16 overflow-hidden"
      >
        <Navbar />
        <MainContent />
      </div>
      <div
        className="h-[70vh] md:h-[90vh] lg:h-screen bg-no-repeat bg-cover bg-[center_top_0%]
   bg-[url('/bg/Date-Mobile.svg')] 
      sm:bg-[url('/bg/Date-Tablet.svg')] 
      lg:bg-[url('/bg/Date.svg')]    
      flex flex-col items-center px-8 lg:px-16 overflow-hidden"
      >
        <Dates />
      </div>
      <div className="overflow-hidden">
        {" "}
        <Divider2 />
      </div>
      <div
        className="h-screen bg-no-repeat bg-cover bg-[center_top_100%]
   bg-[url('/bg/AboutSahiti-Mobile.svg')] 
      sm:bg-[url('/bg/AboutSahiti-Tablet.svg')] 
      lg:bg-[url('/bg/AboutSahiti.svg')]    
      flex flex-col items-center px-8 lg:px-16 overflow-hidden"
      >
        <AboutSahiti />
      </div>

      <div
        className="h-screen bg-no-repeat bg-cover bg-[center_top_0%]
      bg-[url('/bg/Debate-Mobile.svg')] 
    sm:bg-[url('/bg/Debate-Tablet.svg')] 
      lg:bg-[url('/bg/Debate.svg')]  
      flex flex-col items-center px-8 lg:px-16 overflow-hidden"
      >
        {" "}
        <Debate />
      </div>
      <Divider />

      <div className="w-[95%] min-h-screen bg-[#feefd7] flex justify-center p-4 mx-auto">
        <div className="h-[80%] my-2">
          <Gallery />
        </div>
      </div>
    </div>
  );
};

export default Home;
