import "./Footer.css";
import Divider2 from "../Common/Divider2";

const Footer = () => {
	return (
		<footer
			className="font-poppins text-white relative"
			style={{ backgroundColor: "#fe7f49" }}
		>
			{/* UPPER FOOTER SECTION */}
			<div className="flex flex-col justify-between bpoint4:pl-3  bpoint4:h-[270px] bpoint4:flex-row">
				<div className="overflow-hidden">
					{" "}
					<Divider2 />
				</div>
				{/* GET IN TOUCH AND LOGOS DIV */}
				<div className=" flex flex-col items-center justify-evenly h-[250px] w-[100%] bpoint4:h-auto bpoint4:min-w-56 bpoint4:flex-row">
					<div className="flex flex-col min-w-[10rem]  justify-center bpoint4:ml-4 bpoint3:min-w-[16rem]">
						<p className=" text-md font-bold mt-6 mb-2">Get in touch</p>
						<p className="text-3xl font-bold  bpoint3:text-4xl">
							Lnd@nitc.ac.in
						</p>
					</div>

					{/* LOGOS */}
					<div className="justify-center flex flex-col">
						<div className="flex min-w-24 justify-center bpoint4:flex-col bpoint4:justify-end bpoint1:flex-row space-x-8 mr-8 mt-4 gap-4 imgdiv">
							<div className="flex justify-center">
								<a
									href="https://www.facebook.com"
									target="_blank"
									rel="noopener noreferrer"
								>
									<img
										className="h-12 w-12 translate-y-1"
										src="/logos/fb.png"
										alt="Facebook"
									/>
								</a>
							</div>
							<div className="flex justify-center">
								<a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
									<img className="h-14 w-14 " src="/logos/linkedin.svg" alt="LinkedIn"/>
								</a>
							</div>
							<div className="flex justify-center">
								<a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
									<img className="h-14 w-14 " src="/logos/insta.svg" alt="Instagram"/>
								</a>
							</div>
						</div>
					</div>
				</div>

				{/* ALL LINKS on below div */}
				<div
					className="flex border-t-2 bpoint4:b-0 h-[250px] bpoint4:h-auto bpoint4:border-t-0"
					style={{ color: "#FFEFD5", borderColor: "#D05E3B" }}
				>
					<div
						className=" bpoint4:border-l-2 flex font-semibold flex-1 flex-col pl-6 bpoint4:w-[160px] justify-center bpoint2:w-[230px]"
						style={{ borderColor: "#D05E3B" }}
					>
						<ul className="space-y-2">
							<li>
								<a href="/" className=" hover:underline duration-500"> Home </a>
							</li>
							<li>
								<a href="/sponsors" className=" hover:underline duration-500"> Sponsors </a>
							</li>
							<li>
								<a href="/events" className=" hover:underline duration-500"> Events </a>
							</li>
						</ul>
					</div>

					<div
						className=" border-l-2 flex font-semibold flex-1 flex-col pl-6  bpoint4:w-[160px] justify-center bpoint2:w-[230px]"
						style={{ borderColor: "#D05E3B" }}
					>
						<ul className="space-y-2">
							<li>
								<a href="/debate" className=" hover:underline duration-500">Debate</a>
							</li>
							<li>
								<a href="/workers" className=" hover:underline duration-500">Workers</a>
							</li>
							<li>
								<a href="/speakers" className=" hover:underline duration-500">Speakers</a>
							</li>
							<li>
								<a href="/contact-us" className=" hover:underline duration-500">Contact Us</a>
							</li>
						</ul>
					</div>

					<div
						className=" border-l-2 flex font-semibold flex-1 flex-col pl-6  bpoint4:w-[160px] justify-center bpoint2:w-[230px]"
						style={{ borderColor: "#D05E3B" }}
					>
						<ul className="space-y-2">
							<li>
								<a href="/schedule" className=" hover:underline duration-500">
									Schedule
								</a>
							</li>
							<li>
								<a href="/tickets" className=" hover:underline duration-500">
									Tickets
								</a>
							</li>
							<li>
								<a href="/registration" className=" hover:underline duration-500">
									Registration
								</a>
							</li>
							<li>
								<a href="/faq" className=" hover:underline duration-500">
									FAQ
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>

			{/* BOTTOM FOOTER SECTION */}

			<div
				className="flex flex-row font-semibold justify-between  items-center  py-5 bpoint4:py-3 px-6"
				style={{ backgroundColor: "#D05E3B", color: "#FFBA82" }}
			>
				<p className="text-sm">@2024 Sahiti NITC</p>
				<p className="text-sm">Terms and Conditions</p>
			</div>
		</footer>
	);
};

export default Footer;
