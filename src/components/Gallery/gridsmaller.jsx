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
		"/gallery/1.webp",
		"/gallery/2.webp",
		"/gallery/3.webp",
		"/gallery/4.webp",
		"/gallery/5.webp",
		"/gallery/6.webp",
		"/gallery/7.webp",
		"/gallery/8.webp",
		"/gallery/9.webp",
		"/gallery/10.webp",
		"/gallery/11.webp",
		"/gallery/12.webp",
		"/gallery/13.webp",
		"/gallery/14.webp",
		"/gallery/15.webp",
		"/gallery/16.webp",
		"/gallery/17.webp",
		"/gallery/18.webp",
		"/gallery/19.webp",
		"/gallery/20.webp",
		"/gallery/21.webp",
		"/gallery/22.webp",
		"/gallery/23.webp",
		"/gallery/24.webp",
		"/gallery/25.webp",
		"/gallery/26.webp",
		"/gallery/27.webp",
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
