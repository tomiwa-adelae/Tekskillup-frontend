"use client";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export function Showcase() {
	const words = [
		{
			text: "We",
		},
		{
			text: "would",
		},
		{
			text: "love",
		},
		{
			text: "to",
		},
		{
			text: "hear",
		},
		{
			text: "from",
			className: "text-blue-500 dark:text-blue-500",
		},
		{
			text: "you",
			className: "text-blue-500 dark:text-blue-500",
		},
	];

	const ref = useRef(null);

	const isInView = useInView(ref);

	return (
		<div
			ref={ref}
			className="pt-12 pb-16 w-full dark:bg-black bg-green-400  dark:bg-grid-small-white/[0.2] bg-grid-small-black/[0.2] relative flex items-center justify-center"
		>
			<motion.div
				initial={{ opacity: 0 }}
				animate={isInView ? { opacity: 1 } : {}}
				transition={{ duration: 0.5, delay: 0.5 }}
				className="container"
			>
				<div className="flex flex-col-reverse items-center justify-between gap-8 lg:flex-row">
					<motion.div
						initial={{ x: "-100vw" }}
						animate={isInView ? { x: 0 } : {}}
						transition={{
							duration: 1,
							delay: 0.2,
							type: "spring",
							stiffness: 120,
						}}
						className="flex-1 text-center lg:text-left text-white"
					>
						<h1 className="text-3xl leading-relaxed md:text-4xl md:leading-snug lg:text-6xl lg:leading-relaxed">
							<TypewriterEffectSmooth words={words} />
						</h1>
						<p className="text-xs md:text-sm text-gray-100 mt-4">
							Have any questions? We are here to help.
						</p>
					</motion.div>
					<motion.div
						initial={{ x: 0 }}
						animate={isInView ? { x: [0, 1, 1.1, 1] } : {}}
						transition={{
							duration: 1.25,
							delay: 0.75,
							type: "tween",
						}}
						className="flex-1"
					>
						<Image
							src={"/contact-showcase-img.png"}
							alt={"Contact page"}
							height={1000}
							width={1000}
							className="w-auto"
						/>
					</motion.div>
				</div>
			</motion.div>
		</div>
	);
}
