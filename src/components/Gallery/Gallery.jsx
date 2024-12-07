"use client";
import React, { useEffect, useState, useRef } from "react";
import CarouselGrid from "./gridmd";
import CarouselGridxsm from "./gridsmaller";
import CarouselGridsm from "./gridsm";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Gallery = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [isMedScreen, setIsMedScreen] = useState(false);
  const GalleryRef = useRef(null); // Ref to target the component for animation
  const GalleryRef2 = useRef(null); // Ref to target the component for animation

  const handleResize = () => {
    setIsSmallScreen(window.innerWidth < 880);
    setIsMedScreen(window.innerWidth < 1500);
  };

  useEffect(() => {
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const GalleryElement = GalleryRef.current;

    // GSAP ScrollTrigger for smooth appearance on scroll
    gsap.fromTo(
      GalleryElement,
      { opacity: 0, scale: 0.8 }, // Initial state (hidden and smaller)
      {
        opacity: 1,
        scale: 1, // Final state (fully visible and normal size)
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: GalleryElement,
          start: "top 40%", // When 70% of the component is visible
          toggleActions: "play none none none",
        },
      }
    );

    gsap.fromTo(
      GalleryElement,
      { opacity: 0, scale: 0.8 }, // Initial state (hidden and smaller)
      {
        opacity: 1,
        scale: 1, // Final state (fully visible and normal size)
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: GalleryElement,
          start: "top 50%", // When 70% of the component is visible
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  return (
    <div className="relative h-screen overflow-hidden bg-[#feefd7]">
      <div
        ref={GalleryRef}
        href={"./Gallery"}
        className="absolute top-[10%] left-0 w-full text-center text-white p-4 z-10 flex flex-col"
      ></div>

      <div ref={GalleryRef2} className="relative z-0">
        {isMedScreen ? (
          isSmallScreen ? (
            <CarouselGridxsm />
          ) : (
            <CarouselGridsm />
          )
        ) : (
          <CarouselGrid />
        )}
      </div>
    </div>
  );
};

export default Gallery;
