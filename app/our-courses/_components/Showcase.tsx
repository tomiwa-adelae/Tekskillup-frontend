"use client";
import { motion } from "framer-motion";

export function Showcase() {
	return (
		<div className="text-center lg:text-left">
			<motion.h1
				initial="hidden"
				whileInView="visible"
				transition={{
					duration: 1.2,
					delay: 0.4,
					type: "spring",
					stiffness: 120,
				}}
				variants={{
					visible: { y: 0 },
					hidden: { y: -100 },
				}}
				className="text-[44px] leading-relaxed md:text-6xl md:leading-snug lg:text-7xl lg:leading-relaxed text-green-400"
			>
				Our courses
			</motion.h1>
			<motion.p
				initial="hidden"
				whileInView="visible"
				transition={{ duration: 2, delay: 0.5 }}
				variants={{
					visible: { opacity: 1 },
					hidden: { opacity: 0 },
				}}
				className="text-xs md:text-sm mt-4"
			>
				Select any of our courses to get started with your Tech journey
			</motion.p>
			<br />
		</div>
	);
}
