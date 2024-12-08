import React from "react";

const Button = ({
  link,
  bgColor,
  textColor,
  borderColor,
  useAlternateStyle = false,
  children,
  big = false,
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
      className={`${
        big
          ? "p-5 px-5 text-5xl"
          : "p-3 px-5 text-3xl"
      } flex items-center justify-center rounded-full font-medium text-center hover:opacity-80 h-full transition-opacity duration-400 ${
        useAlternateStyle ? "border-2" : ""
      }`}
    >
      <div className="font-poppins">
        {children}
      </div>
    </a>
  );
};

export default Button;
