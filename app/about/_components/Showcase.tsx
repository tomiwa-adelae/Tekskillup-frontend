"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import SmallShowcase from "./SmallShowcase";
import { useRef } from "react";

export function Showcase() {
	const ref = useRef(null);

	const isInView = useInView(ref);

	return (
		<div className="py-16 w-full dark:bg-black bg-white  dark:bg-grid-small-white/[0.2] bg-grid-small-black/[0.2] relative flex items-center justify-center">
			<div
				ref={ref}
				className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_50%,black)]"
			></div>
			<motion.div
				initial={{ opacity: 0 }}
				animate={isInView ? { opacity: 1 } : {}}
				transition={{ duration: 0.5, delay: 0.5 }}
				className="container"
			>
				<div className="flex flex-col-reverse items-center justify-between gap-8 lg:flex-row">
					<div className="flex-1 text-center lg:text-left space-y-5">
						<motion.h5
							initial={{ y: 0 }}
							animate={isInView ? { y: 0 } : {}}
							transition={{
								duration: 1,
								delay: 0.2,
								type: "spring",
								stiffness: 120,
							}}
							className="uppercase text-xs lg:text-sm"
						>
							Know more about us
						</motion.h5>
						<motion.h1
							initial={{ y: 200 }}
							animate={isInView ? { y: 0 } : {}}
							transition={{
								duration: 1.2,
								delay: 0.4,
								type: "spring",
								stiffness: 120,
							}}
							className="text-[44px] leading-relaxed md:text-6xl md:leading-snug lg:text-7xl lg:leading-relaxed text-green-400"
						>
							About us
						</motion.h1>
						<motion.p
							initial={{ opacity: 0 }}
							animate={isInView ? { opacity: 1 } : {}}
							transition={{ duration: 1, delay: 1.5 }}
							className="text-xs md:text-sm mt-4"
						>
							Welcome to Tekskillup, your gateway to mastering
							tech and digital skills for a dynamic and
							ever-evolving world. At Tekskillup, we are committed
							to empowering individuals with the knowledge and
							expertise needed to thrive in the digital age.
						</motion.p>
						<motion.h5
							initial={{ opacity: 0 }}
							animate={isInView ? { opacity: 0 } : {}}
							transition={{ duration: 1, delay: 1.5 }}
							className="text-base text-green-400 font-semibold uppercase"
						>
							Our mission:
						</motion.h5>
						<motion.p
							initial={{ opacity: 0 }}
							animate={isInView ? { opacity: 1 } : {}}
							transition={{ duration: 1, delay: 1.5 }}
							className="text-xs md:text-sm"
						>
							Tekskillup is on a mission to democratize education,
							making high-quality tech and digital skills
							accessible to everyone. We believe that learning
							should be a lifelong journey, and with the right
							tools and guidance, individuals can unlock their
							full potential and shape the future.
						</motion.p>
						<motion.h5
							initial={{ opacity: 0 }}
							animate={isInView ? { opacity: 1 } : {}}
							transition={{ duration: 1, delay: 1.5 }}
							className="text-base text-green-400 font-semibold uppercase"
						>
							What distinguishes us?
						</motion.h5>
						<motion.p
							initial={{ opacity: 0 }}
							animate={isInView ? { opacity: 1 } : {}}
							transition={{ duration: 1, delay: 1.5 }}
							className="text-xs md:text-sm"
						>
							Our platform offers a diverse range of courses
							covering e-commerce, web development, digital
							marketing, and more. Whether you&apos;re a beginner
							or an experienced professional, we have tailored
							programs to suit your learning needs.
						</motion.p>
						<p className="text-xs md:text-sm">
							We believe in learning by doing. Our courses include
							practical, real-world projects that allow you to
							apply your knowledge and build a robust portfolio to
							showcase your skills to future employers.
						</p>
					</div>
					<motion.div
						initial={{ scale: 0 }}
						animate={isInView ? { scale: [0, 1, 1.1, 1] } : {}}
						transition={{
							duration: 1.25,
							delay: 0.75,
							type: "tween",
						}}
						className="flex-1"
					>
						<Image
							src={"/about-showcase-img.png"}
							alt={"About page"}
							height={1000}
							width={1000}
							className="w-auto"
						/>
					</motion.div>
				</div>
				<SmallShowcase />
			</motion.div>
		</div>
	);
}
