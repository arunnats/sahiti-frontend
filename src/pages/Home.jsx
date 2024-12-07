import React from "react";
import Navbar from "../components/Navbar";
import MainContent from "../components/MainContent";
import AboutSahiti from "../components/AboutSahiti";
import Debate from "../components/Debate";
import Divider from "../components/Common/Divider";

const Home = () => {
  return (
    <div>
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
      <Divider />
      <div
        className="h-screen bg-no-repeat bg-cover bg-[center_top_100%]
   bg-[url('/bg/AboutSahiti-Mobile.svg')] 
      sm:bg-[url('/bg/AboutSahiti-Tablet.svg')] 
      lg:bg-[url('/bg/AboutSahiti.svg')]    
      flex flex-col items-center px-8 lg:px-16 overflow-hidden"
      >
        <AboutSahiti />
      </div>
      <Divider />

      <div
        className="h-screen bg-no-repeat bg-cover bg-[center_top_100%]
      bg-[url('/bg/Debate-Mobile.svg')] 
    sm:bg-[url('/bg/Debate-Tablet.svg')] 
      lg:bg-[url('/bg/Debate.svg')]  
      flex flex-col items-center px-8 lg:px-16 overflow-hidden"
      >
        {" "}
        <Debate />
      </div>
    </div>
  );
};

export default Home;
