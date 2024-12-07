"use client";
import React, { useState, useEffect } from "react";
import styles from "./Carousel.module.css";

const Carousel = ({ images, reverse = false }) => {
  return (
    <div className={styles.carouselContainer}>
      <div
        className={reverse ? styles.carouselContentrev : styles.carouselContent}
      >
        {images.map((image, index) => (
          <div className={styles.carouselItem} key={index}>
            <img src={image} className="w-full p-1 object-cover" />
          </div>
        ))}
        {images.map((image, index) => (
          <div className={styles.carouselItem} key={index}>
            <img src={image} className="w-full p-1 object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
};

const getRandomOrder = () => {
  const images = [
    "/gallery/1.jpeg",
    "/gallery/2.jpeg",
    "/gallery/3.jpeg",
    "/gallery/4.jpeg",
    "/gallery/5.jpeg",
    "/gallery/6.jpeg",
    "/gallery/7.jpeg",
    "/gallery/8.JPG",
    "/gallery/9.JPG",
    "/gallery/10.JPG",
    "/gallery/11.JPG",
    "/gallery/12.JPG",
    // "/gallery/13.JPG",
    // "/gallery/14.JPG",
    // "/gallery/15.JPG",
    // "/gallery/16.JPG",
    // "/gallery/17.JPG",
    // "/gallery/18.JPG",
    // "/gallery/19.JPG",
    // "/gallery/20.JPG",
    // "/gallery/21.JPG",
    // "/gallery/22.JPG",
    // "/gallery/23.JPG",
    // "/gallery/24.JPG",
    // "/gallery/25.JPG",
    // "/gallery/26.JPG",
  ];

  for (let i = images.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [images[i], images[j]] = [images[j], images[i]];
  }

  return images;
};

const CarouselGridxsm = () => {
  const shuffledImages = getRandomOrder();

  return (
    <div className="p-1 h-screen overflow-hidden">
      <div className={`grid grid-cols-2 ${styles.firstrow}`}>
        <div className="flex justify-center items-center">
          <Carousel images={shuffledImages.slice(0, 3)} reverse={false} />
        </div>
        <div className="flex justify-center items-center">
          <Carousel images={shuffledImages.slice(3, 6)} reverse={false} />
        </div>
      </div>

      <div className={`grid grid-cols-2 ${styles.secondrow}`}>
        <div className="flex justify-center items-center">
          <Carousel images={shuffledImages.slice(6, 9)} reverse={true} />
        </div>
        <div className="flex justify-center items-center">
          <Carousel images={shuffledImages.slice(9, 12)} reverse={true} />
        </div>
      </div>

      <div className={`grid grid-cols-2 ${styles.thirdrow}`}>
        <div className="flex justify-center items-center">
          <Carousel images={shuffledImages.slice(8, 11)} reverse={true} />
        </div>
        <div className="flex justify-center items-center">
          <Carousel images={shuffledImages.slice(1, 4)} reverse={true} />
        </div>
      </div>

      <div className="p-1 h-screen overflow-hidden -translate-y-[22vw]">
        <div className={`grid grid-cols-2 ${styles.firstrow}`}>
          <div className="flex justify-center items-center">
            <Carousel images={shuffledImages.slice(2, 5)} reverse={false} />
          </div>
          <div className="flex justify-center items-center">
            <Carousel images={shuffledImages.slice(7, 10)} reverse={false} />
          </div>
        </div>

        <div className={`grid grid-cols-2 ${styles.secondrow}`}>
          <div className="flex justify-center items-center">
            <Carousel images={shuffledImages.slice(5, 8)} reverse={true} />
          </div>
          <div className="flex justify-center items-center">
            <Carousel images={shuffledImages.slice(4, 7)} reverse={true} />
          </div>
        </div>

        <div className={`grid grid-cols-2 ${styles.thirdrow}`}>
          <div className="flex justify-center items-center">
            <Carousel images={shuffledImages.slice(8, 11)} reverse={true} />
          </div>
          <div className="flex justify-center items-center">
            <Carousel images={shuffledImages.slice(1, 4)} reverse={true} />
          </div>
        </div>

        <div className="p-1 h-screen overflow-hidden -translate-y-[22vw]">
          <div className={`grid grid-cols-2 ${styles.firstrow}`}>
            {Array.from({ length: 2 }).map((_, index) => (
              <div className="flex justify-center items-center" key={index}>
                <Carousel
                  images={getRandomOrder().slice(0, 3)}
                  reverse={false}
                />
              </div>
            ))}
          </div>

          <div className={`grid grid-cols-2 ${styles.secondrow}`}>
            {Array.from({ length: 2 }).map((_, index) => (
              <div className="flex justify-center items-center" key={index + 4}>
                <Carousel
                  images={getRandomOrder().slice(0, 3)}
                  reverse={true}
                />
              </div>
            ))}
          </div>

          <div className={`grid grid-cols-2 ${styles.thirdrow}`}>
            {Array.from({ length: 2 }).map((_, index) => (
              <div className="flex justify-center items-center" key={index + 8}>
                <Carousel
                  images={getRandomOrder().slice(0, 3)}
                  reverse={false}
                />
              </div>
            ))}
          </div>

          <div className="p-1 h-screen overflow-hidden -translate-y-[22vw]">
            <div className={`grid grid-cols-2 ${styles.firstrow}`}>
              {Array.from({ length: 2 }).map((_, index) => (
                <div className="flex justify-center items-center" key={index}>
                  <Carousel
                    images={getRandomOrder().slice(0, 3)}
                    reverse={false}
                  />
                </div>
              ))}
            </div>

            <div className={`grid grid-cols-2 ${styles.secondrow}`}>
              {Array.from({ length: 2 }).map((_, index) => (
                <div
                  className="flex justify-center items-center"
                  key={index + 4}
                >
                  <Carousel
                    images={getRandomOrder().slice(0, 3)}
                    reverse={true}
                  />
                </div>
              ))}
            </div>

            <div className={`grid grid-cols-2 ${styles.thirdrow}`}>
              {Array.from({ length: 2 }).map((_, index) => (
                <div
                  className="flex justify-center items-center"
                  key={index + 8}
                >
                  <Carousel
                    images={getRandomOrder().slice(0, 3)}
                    reverse={false}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarouselGridxsm;
