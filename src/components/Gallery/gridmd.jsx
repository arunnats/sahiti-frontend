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
  // "/gallery/11.JPG",
];

const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const CarouselGrid = () => {
  const shuffledImages1 = shuffleArray([...images]);
  const shuffledImages2 = shuffleArray([...images]);
  const shuffledImages3 = shuffleArray([...images]);

  return (
    <div className="p-1 h-screen overflow-hidden">
      <div className={`grid grid-cols-4 ${styles.firstrow}`}>
        {Array.from({ length: 4 }).map((_, index) => (
          <div className="flex justify-center items-center" key={index}>
            <Carousel
              images={shuffledImages1.slice(index * 3, index * 3 + 3)}
              reverse={false}
            />
          </div>
        ))}
      </div>

      <div className={`grid grid-cols-4 ${styles.secondrow}`}>
        {Array.from({ length: 4 }).map((_, index) => (
          <div className="flex justify-center items-center" key={index + 4}>
            <Carousel
              images={shuffledImages2.slice(index * 3, index * 3 + 3)}
              reverse={true}
            />
          </div>
        ))}
      </div>

      <div className={`grid grid-cols-4 ${styles.thirdrow}`}>
        {Array.from({ length: 4 }).map((_, index) => (
          <div className="flex justify-center items-center" key={index + 8}>
            <Carousel
              images={shuffledImages3.slice(index * 3, index * 3 + 3)}
              reverse={false}
            />
          </div>
        ))}
      </div>

      <div className="p-1 h-screen overflow-hidden -translate-y-[11vw]">
        <div className={`grid grid-cols-4 ${styles.firstrow}`}>
          {Array.from({ length: 4 }).map((_, index) => (
            <div className="flex justify-center items-center" key={index}>
              <Carousel
                images={shuffledImages1.slice(index * 3 + 1, index * 3 + 1 + 3)}
                reverse={false}
              />
            </div>
          ))}
        </div>

        <div className={`grid grid-cols-4 ${styles.secondrow}`}>
          {Array.from({ length: 4 }).map((_, index) => (
            <div className="flex justify-center items-center" key={index + 4}>
              <Carousel
                images={shuffledImages2.slice(index * 3 + 1, index * 3 + 1 + 3)}
                reverse={true}
              />
            </div>
          ))}
        </div>

        <div className={`grid grid-cols-4 ${styles.thirdrow}`}>
          {Array.from({ length: 4 }).map((_, index) => (
            <div className="flex justify-center items-center" key={index + 8}>
              <Carousel
                images={shuffledImages3.slice(index * 3 + 1, index * 3 + 1 + 3)}
                reverse={false}
              />
            </div>
          ))}
        </div>
        <div className="p-1 h-screen overflow-hidden -translate-y-[11vw]">
          <div className={`grid grid-cols-4 ${styles.firstrow}`}>
            {Array.from({ length: 4 }).map((_, index) => (
              <div className="flex justify-center items-center" key={index}>
                <Carousel
                  images={shuffledImages1.slice(
                    index * 3 + 2,
                    index * 3 + 2 + 3
                  )}
                  reverse={false}
                />
              </div>
            ))}
          </div>

          <div className={`grid grid-cols-4 ${styles.secondrow}`}>
            {Array.from({ length: 4 }).map((_, index) => (
              <div className="flex justify-center items-center" key={index + 4}>
                <Carousel
                  images={shuffledImages2.slice(
                    index * 3 + 2,
                    index * 3 + 2 + 3
                  )}
                  reverse={true}
                />
              </div>
            ))}
          </div>

          <div className={`grid grid-cols-4 ${styles.thirdrow}`}>
            {Array.from({ length: 4 }).map((_, index) => (
              <div className="flex justify-center items-center" key={index + 8}>
                <Carousel
                  images={shuffledImages3.slice(
                    index * 3 + 2,
                    index * 3 + 2 + 3
                  )}
                  reverse={false}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarouselGrid;
