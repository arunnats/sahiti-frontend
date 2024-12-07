import React from "react";

const AboutSahiti = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full px-4 md:px-8 lg:px-16 my-16">
      {/* Logo Image */}
      <img
        className="w-[40vw] ipadAir:w-[35vw] smallHeight:w-[40vw] md:w-[25vw] lg:w-[15vw] h-auto"
        src="/logos/logo-orange.png"
        alt="Sahiti Logo"
      />

      {/* Text Content */}
      <div className="text-[4.4vw] ipadAir:text-[2.3vw] smallHeight:text-[3.6vw] md:text-[2vw] lg:text-[1.35vw] font-poppins w-[90vw] ipadAir:w-[80vw] smallHeight:w-[85vw] md:w-[75vw] lg:w-[55vw] mt-[6vw] lg:mt-[4vw] text-[#FF7900] text-justify leading-relaxed">
        <p>
          Welcome to the world of Sahiti, the literature fest organized by the
          Literary and Debating Club of NITC! Leveraging Kozhikode's designation
          as 'The City of Literature,' our aim is to enhance our contribution to
          this literary legacy by actively promoting and increasing the reading
          habits among students.
        </p>
        <p className="mt-4">
          Through a carefully curated series of engaging workshops, lectures,
          and cultural events, our goal is to revive the love for literature
          among today’s youngsters.
        </p>
        <p className="mt-4">
          Join us on the <strong>11th and 12th of January, 2025</strong> to
          immerse yourself in a world where words inspire and ideas connect!
        </p>
      </div>
    </div>
  );
};

export default AboutSahiti;
