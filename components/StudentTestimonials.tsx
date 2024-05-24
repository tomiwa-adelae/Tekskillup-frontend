"use client";
import React from "react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import Image from "next/image";

import {
	Carousel,
	CarouselContent,
	CarouselItem,
} from "@/components/ui/carousel";

import Autoplay from "embla-carousel-autoplay";

export function StudentTestimonials() {
	const plugin = React.useRef(
		Autoplay({ delay: 8000, stopOnInteraction: true })
	);

	const testimonies: {
		name: string;
		image: string;
		portfolio: string;
		testimony: string;
	}[] = [
		{
			name: "Tomiwa Adelae",
			image: "/tomiwa-adelae.jpg",
			portfolio: "Full stack developer",
			testimony:
				"Tekskillup has been one of the big push I needed to get in the real world space. I had an immense learning that was really different from the self learning I started with. The learning was fun and there were some internship job opportunities that were presented to us. I got my first gig immediately after the program. Thank you Tekskillup for that push I needed.",
		},
		{
			name: "Michael Jordan",
			image: "/speaker-one.jpg",
			portfolio: "Frontend React developer",
			testimony:
				"Tekskillup has been one of the big push I needed to get in the real world space. I had an immense learning that was really different from the self learning I started with. The learning was fun and there were some internship job opportunities that were presented to us. I got my first gig immediately after the program. Thank you Tekskillup for that push I needed.",
		},
		{
			name: "David Okpor",
			image: "/speaker-two.jpg",
			portfolio: "Data Scientist",
			testimony:
				"Tekskillup has been one of the big push I needed to get in the real world space. I had an immense learning that was really different from the self learning I started with. The learning was fun and there were some internship job opportunities that were presented to us. I got my first gig immediately after the program. Thank you Tekskillup for that push I needed.",
		},
	];

	return (
		<div className="flex flex-col overflow-hidden">
			<ContainerScroll
				titleComponent={
					<>
						<h3 className="text-2xl md:text-3xl text-green-400 lg:text-4xl dark:text-white">
							What our graduates are saying
						</h3>
					</>
				}
			>
				<Carousel
					plugins={[plugin.current]}
					opts={{
						align: "center",
						loop: true,
						dragFree: true,
					}}
					className="flex flex-col items-center justify-between gap-4 overflow-hidden lg:flex-row mt-8"
				>
					<CarouselContent>
						{testimonies.map(
							(
								testimony: {
									name: string;
									image: string;
									testimony: string;
									portfolio: string;
								},
								index: number
							) => (
								<CarouselItem key={index}>
									<div className="flex flex-col items-center justify-center gap-8">
										<p className="text-center text-sm flex-1">
											{testimony.testimony}
										</p>
										<div className="flex-1 flex flex-col items-center justify-center">
											<Image
												src={testimony.image}
												alt="Test"
												height={1000}
												width={1000}
												className="w-28 h-28 md:w-32 md:h-32 rounded-full object-cover"
											/>
											<h4 className="text-green-100 text-xl md:text-2xl my-4">
												{testimony.name}
											</h4>
											<p className="text-xs md:text-sm">
												{testimony.portfolio}
											</p>
										</div>
									</div>
								</CarouselItem>
							)
						)}
					</CarouselContent>
				</Carousel>
			</ContainerScroll>
		</div>
	);
}
