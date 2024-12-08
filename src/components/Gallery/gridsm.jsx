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
	"/gallery/1.webp",
	"/gallery/2.webp",
	"/gallery/3.webp",
	"/gallery/4.webp",
	"/gallery/5.webp",
	"/gallery/6.webp",
	"/gallery/7.webp",
	"/gallery/8.webp",
	"/gallery/27.webp",
	"/gallery/10.webp",
	"/gallery/11.webp",
	"/gallery/12.webp",
	// "/gallery/13.webp",
	// "/gallery/14.webp",
	// "/gallery/15.webp",
	// "/gallery/16.webp",
	// "/gallery/17.webp",
	// "/gallery/18.webp",
	// "/gallery/19.webp",
	// "/gallery/20.webp",
	// "/gallery/21.webp",
	// "/gallery/22.webp",
	// "/gallery/23.webp",
	// "/gallery/24.webp",
	// "/gallery/25.webp",
	// "/gallery/26.webp",
	// "/gallery/27.webp",
];

const shuffleArray = (array) => {
	for (let i = array.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[array[i], array[j]] = [array[j], array[i]];
	}
	return array;
};

const CarouselGridsm = () => {
	const shuffledImages1 = shuffleArray([...images]);
	const shuffledImages2 = shuffleArray([...images]);
	const shuffledImages3 = shuffleArray([...images]);

	return (
		<div className="p-1 h-screen overflow-hidden">
			<div className={`grid grid-cols-3 ${styles.firstrow}`}>
				{Array.from({ length: 3 }).map((_, index) => (
					<div className="flex justify-center items-center" key={index}>
						<Carousel
							images={shuffledImages1.slice(index * 3, index * 3 + 3)}
							reverse={false}
						/>
					</div>
				))}
			</div>

			<div className={`grid grid-cols-3 ${styles.secondrow}`}>
				{Array.from({ length: 3 }).map((_, index) => (
					<div className="flex justify-center items-center" key={index + 4}>
						<Carousel
							images={shuffledImages2.slice(index * 3, index * 3 + 3)}
							reverse={true}
						/>
					</div>
				))}
			</div>

			<div className={`grid grid-cols-3 ${styles.thirdrow}`}>
				{Array.from({ length: 3 }).map((_, index) => (
					<div className="flex justify-center items-center" key={index + 8}>
						<Carousel
							images={shuffledImages3.slice(index * 3, index * 3 + 3)}
							reverse={false}
						/>
					</div>
				))}
			</div>
			<div className="p-1 h-screen overflow-hidden  -translate-y-[15vw]">
				<div className={`grid grid-cols-3 ${styles.firstrow}`}>
					{Array.from({ length: 3 }).map((_, index) => (
						<div className="flex justify-center items-center" key={index}>
							<Carousel
								images={shuffledImages1.slice(index * 3 + 1, index * 3 + 1 + 3)}
								reverse={false}
							/>
						</div>
					))}
				</div>

				<div className={`grid grid-cols-3 ${styles.secondrow}`}>
					{Array.from({ length: 3 }).map((_, index) => (
						<div className="flex justify-center items-center" key={index + 4}>
							<Carousel
								images={shuffledImages2.slice(index * 3 + 1, index * 3 + 1 + 3)}
								reverse={true}
							/>
						</div>
					))}
				</div>

				<div className={`grid grid-cols-3 ${styles.thirdrow}`}>
					{Array.from({ length: 3 }).map((_, index) => (
						<div className="flex justify-center items-center" key={index + 8}>
							<Carousel
								images={shuffledImages3.slice(index * 3 + 1, index * 3 + 1 + 3)}
								reverse={false}
							/>
						</div>
					))}
				</div>
				<div className="p-1 h-screen overflow-hidden  -translate-y-[15vw]">
					<div className={`grid grid-cols-3 ${styles.firstrow}`}>
						{Array.from({ length: 3 }).map((_, index) => (
							<div className="flex justify-center items-center" key={index}>
								<Carousel
									images={shuffledImages1.slice(
										index * 3 + 1 + 1,
										index * 3 + 1 + 1 + 3
									)}
									reverse={false}
								/>
							</div>
						))}
					</div>

					<div className={`grid grid-cols-3 ${styles.secondrow}`}>
						{Array.from({ length: 3 }).map((_, index) => (
							<div className="flex justify-center items-center" key={index + 4}>
								<Carousel
									images={shuffledImages2.slice(
										index * 3 + 1 + 1,
										index * 3 + 1 + 1 + 3
									)}
									reverse={true}
								/>
							</div>
						))}
					</div>

					<div className={`grid grid-cols-3 ${styles.thirdrow}`}>
						{Array.from({ length: 3 }).map((_, index) => (
							<div className="flex justify-center items-center" key={index + 8}>
								<Carousel
									images={shuffledImages3.slice(
										index * 3 + 1 + 1,
										index * 3 + 1 + 1 + 3
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

export default CarouselGridsm;
