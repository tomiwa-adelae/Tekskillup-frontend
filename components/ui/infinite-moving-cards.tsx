"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Button } from "./button";
import { Card } from "./card";

export const InfiniteMovingCards = ({
	courses,
	direction = "left",
	speed = "fast",
	pauseOnHover = true,
	className,
}: {
	courses: {
		_id: string;
		user: string;
		title: string;
		isPublished: boolean;
		lessons: {}[];
		description: string;
		image: string;
		onlinePrice: number;
		weekendPrice: number;
		weekdayPrice: number;
		weekendStartDate: string;
		weekdayStartDate: string;
	}[];
	direction?: "left" | "right";
	speed?: "fast" | "normal" | "slow";
	pauseOnHover?: boolean;
	className?: string;
}) => {
	const containerRef = React.useRef<HTMLDivElement>(null);
	const scrollerRef = React.useRef<HTMLUListElement>(null);

	useEffect(() => {
		addAnimation();
	}, []);
	const [start, setStart] = useState(false);
	function addAnimation() {
		if (containerRef.current && scrollerRef.current) {
			const scrollerContent = Array.from(scrollerRef.current.children);

			scrollerContent.forEach((item) => {
				const duplicatedItem = item.cloneNode(true);
				if (scrollerRef.current) {
					scrollerRef.current.appendChild(duplicatedItem);
				}
			});

			getDirection();
			getSpeed();
			setStart(true);
		}
	}
	const getDirection = () => {
		if (containerRef.current) {
			if (direction === "left") {
				containerRef.current.style.setProperty(
					"--animation-direction",
					"forwards"
				);
			} else {
				containerRef.current.style.setProperty(
					"--animation-direction",
					"reverse"
				);
			}
		}
	};
	const getSpeed = () => {
		if (containerRef.current) {
			if (speed === "fast") {
				containerRef.current.style.setProperty(
					"--animation-duration",
					"20s"
				);
			} else if (speed === "normal") {
				containerRef.current.style.setProperty(
					"--animation-duration",
					"40s"
				);
			} else {
				containerRef.current.style.setProperty(
					"--animation-duration",
					"80s"
				);
			}
		}
	};
	return (
		<div
			ref={containerRef}
			className={cn(
				"scroller relative z-20  max-w-7xl overflow-hidden",
				className
			)}
		>
			<ul
				ref={scrollerRef}
				className={cn(
					" flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap",
					start && "animate-scroll ",
					pauseOnHover && "hover:[animation-play-state:paused]"
				)}
			>
				{courses.map((course) => (
					<Card
						className="w-[350px] bg-transparent max-w-full relative rounded-xl flex-shrink-0 md:w-[450px]"
						key={course._id}
					>
						<div className="flex flex-col items-center justify-center py-4 px-4 gap-6">
							<div className="flex-1">
								<Image
									src={course.image}
									alt={course.title}
									height={1000}
									width={1000}
									className="aspect-video rounded-xl object-cover"
								/>
							</div>
							<div className="space-y-4 flex-1">
								<h4 className="text-green-400 text-lg font-medium md:text-2xl">
									{course.title}
								</h4>
								<p className="text-xs">{course.description}</p>
							</div>
							<Button
								className="transition ease-in-out bg-transparent px-6 outline outline-1 outline-green-400 text-green-400 hover:bg-green-400 uppercase hover:text-white text-base"
								asChild
							>
								<Link href={`/our-courses/${course._id}`}>
									View course
								</Link>
							</Button>
						</div>
					</Card>
				))}
			</ul>
		</div>
	);
};
