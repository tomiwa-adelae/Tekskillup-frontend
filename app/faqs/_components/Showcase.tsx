"use client";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import Image from "next/image";
import { motion } from "framer-motion";

export function Showcase() {
	const words = [
		{
			text: "Frequently",
		},
		{
			text: "asked",
		},
		{
			text: "questions",
			className: "text-blue-500 dark:text-blue-500",
		},
	];

	return (
		<div className="pt-12 pb-16 w-full dark:bg-black bg-green-400  dark:bg-grid-small-white/[0.2] bg-grid-small-black/[0.2] relative flex items-center justify-center">
			<motion.div
				initial="hidden"
				whileInView="visible"
				transition={{ duration: 0.5, delay: 0.5 }}
				variants={{
					visible: { opacity: 1 },
					hidden: { opacity: 0 },
				}}
				className="container"
			>
				<div className="flex flex-col-reverse items-center justify-between gap-8 lg:flex-row">
					<motion.div
						initial="hidden"
						whileInView="visible"
						transition={{
							duration: 1,
							delay: 0.2,
							type: "spring",
							stiffness: 120,
						}}
						variants={{
							visible: { x: 0 },
							hidden: { x: -400 },
						}}
						className="flex-1 text-center lg:text-left text-white"
					>
						<h1 className="text-3xl leading-relaxed md:text-4xl md:leading-snug lg:text-6xl lg:leading-relaxed">
							<TypewriterEffectSmooth words={words} />
						</h1>
						<p className="text-xs md:text-sm text-gray-100 mt-4">
							Here are quick answers to some of your frequently
							asked questions.
						</p>
					</motion.div>
					<motion.div
						initial="hidden"
						whileInView="visible"
						transition={{
							duration: 1.25,
							delay: 0.75,
							type: "tween",
						}}
						variants={{
							visible: { scale: [0, 1, 1.1, 1] },
							hidden: { scale: 0 },
						}}
						className="flex-1"
					>
						<Image
							src={"/faq-showcase-img.png"}
							alt={"About page"}
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
