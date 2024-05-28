import { Button } from "@/components/ui/button";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Lottie, { LottieRefCurrentProps } from "lottie-react";
import animationData from "../../../public/animation-2.json";
import { useRef } from "react";
import { motion } from "framer-motion";

const Showcase = () => {
	const words = [
		{
			text: "Upgrade",
		},
		{
			text: "your",
		},
		{
			text: "Tech",
		},
		{
			text: "Skills",
		},
		{
			text: "now!",
			className: "text-blue-500 dark:text-blue-500",
		},
	];

	const techRef = useRef<LottieRefCurrentProps>(null);

	return (
		<div className="bg-green-400 pt-12 pb-16">
			<motion.div
				initial="hidden"
				whileInView="visible"
				transition={{ duration: 0.5, delay: 0.5 }}
				variants={{
					visible: { opacity: 1 },
					hidden: { opacity: 0 },
				}}
				className="container flex flex-col-reverse items-center justify-center gap-5 lg:flex-row min-h-[50vh]"
			>
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
					className="text-center text-white flex items-center justify-center gap-4 flex-col lg:items-start lg:text-left"
				>
					<h1 className="text-3xl leading-relaxed md:text-4xl md:leading-snug lg:text-6xl lg:leading-relaxed">
						<TypewriterEffectSmooth words={words} />
					</h1>
					<p className="text-xs md:text-sm text-gray-100">
						Elevate your career and gain expertise as a tech
						professional by enrolling at Tekkillup.
					</p>
					<div className="flex items-center justify-center gap-3 md:gap-6 mt-4">
						<Button
							className="bg-green-200 py-6 px-6 lg:py-8 lg:px-8  hover:bg-green-300 uppercase"
							asChild
						>
							<Link href="/register">Enroll now</Link>
						</Button>
						<Button
							className="bg-transparent outline outline-2 outline-green-200 py-6 px-6 lg:py-8 lg:px-8  uppercase hover:bg-green-300"
							asChild
						>
							<Link href="/our-courses">Explore courses</Link>
						</Button>
					</div>
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
					{/* <Image
						src={"/animation-1.json"}
						alt="Home showcase image"
						height={1000}
						width={1000}
						className="w-auto"
					/> */}
					<Lottie lottieRef={techRef} animationData={animationData} />
				</motion.div>
			</motion.div>
		</div>
	);
};

export default Showcase;
