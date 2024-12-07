import React from "react";

const BiggerButton = ({
  link,
  bgColor,
  textColor,
  borderColor,
  useAlternateStyle = false,
  children,
}) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        backgroundColor: useAlternateStyle ? "transparent" : bgColor,
        color: textColor,
        borderColor: borderColor || "transparent",
      }}
      className={`w-[80vw] h-[16vw] md:w-[30vw] md:h-[8vw] lg:w-[18vw] lg:h-[3.9vw] lg:text-[1.8vw] text-[6vw] md:text-[2.8vw] px-2 py-6 rounded-full align-middle font-medium text-center hover:opacity-90 transition-opacity duration-400 ${
        useAlternateStyle ? "border-4" : ""
      }`}
    >
      <div
        className={`-translate-y-[2vw] font-poppins ${
          useAlternateStyle
            ? "md:-translate-y-[1.7vw] lg:-translate-y-[.8vw]"
            : "md:-translate-y-[1.3vw] lg:-translate-y-[0.6vw]"
        }`}
      >
        {children}
      </div>
    </a>
  );
};

export default BiggerButton;
