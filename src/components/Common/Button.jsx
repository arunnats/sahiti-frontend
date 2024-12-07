import React from "react";

const Button = ({
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
      className={`w-[30vw] h-[4.1vw] md:w-[18vw] md:h-[3.9vw] px-1 py-4 rounded-full align-middle font-medium text-[3vw] md:text-[1.8vw] text-center hover:opacity-90 transition-opacity duration-400 ${
        useAlternateStyle ? "border-2" : ""
      }`}
    >
      <div className="-translate-y-[1.6vw] md:-translate-y-[0.9vw] lg:-translate-y-[0.3vw]">
        {children}
      </div>
    </a>
  );
};

export default Button;
