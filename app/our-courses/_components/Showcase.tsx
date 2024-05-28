"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export function Showcase() {
	const ref = useRef(null);

	const isInView = useInView(ref);

	return (
		<div ref={ref} className="text-center lg:text-left">
			<motion.h1
				initial={{ y: 100 }}
				animate={isInView ? { y: 0 } : {}}
				transition={{
					duration: 1.2,
					delay: 0.4,
					type: "spring",
					stiffness: 120,
				}}
				className="text-[44px] leading-relaxed md:text-6xl md:leading-snug lg:text-7xl lg:leading-relaxed text-green-400"
			>
				Our courses
			</motion.h1>
			<motion.p
				initial={{ opacity: 0 }}
				animate={isInView ? { opacity: 1 } : {}}
				transition={{ duration: 2, delay: 0.5 }}
				className="text-xs md:text-sm mt-4"
			>
				Select any of our courses to get started with your Tech journey
			</motion.p>
			<br />
		</div>
	);
}
