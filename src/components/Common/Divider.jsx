import React from "react";
import Marquee from "react-fast-marquee";

const Divider = () => {
  return (
    <Marquee
      play={true}
      pauseOnClick={false}
      direction="left"
      speed={20}
      loop={0}
      gradient={false}
      className="w-full h-14 bg-[#fe7f49] border-t-4 border-b-4 border-[#f8b793]"
      autoFill={true}
    >
      <img
        src="/illustrations/dividerComp.svg"
        className="w-14 h-14"
        alt="Divider Logo"
      />
    </Marquee>
  );
};

export default Divider;
