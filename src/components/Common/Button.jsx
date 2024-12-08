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
			style={{
				backgroundColor: useAlternateStyle ? "transparent" : bgColor,
				color: textColor,
				borderColor: borderColor || "transparent",
			}}
			className={`${
				big
					? "w-[60vw] h-[12vw] md:w-[18vw] md:h-[3.9vw] text-[5vw] md:text-[1.8vw]"
					: "w-[30vw] h-[4.1vw] md:w-[18vw] md:h-[3.9vw] text-[3vw] md:text-[1.8vw]"
			} px-1 py-4 rounded-full font-medium text-center hover:opacity-90 transition-opacity duration-400 flex items-center justify-center ${
				useAlternateStyle ? "border-2" : ""
			}`}
		>
			<span className="font-poppins">{children}</span>
		</a>
	);
};

export default Button;
