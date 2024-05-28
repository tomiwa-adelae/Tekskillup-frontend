"use client";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const CoreValues = () => {
	const values = [
		{
			icon: "/flexibility-icon.png",
			value: "Flexibility",
		},
		{
			icon: "/affordability-icon.png",
			value: "Affordability",
		},
		{
			icon: "/accessibility-icon.png",
			value: "Accessibility",
		},
		{
			icon: "/community-icon.png",
			value: "Community",
		},
		{
			icon: "/quality-icon.png",
			value: "Quality",
		},
		{
			icon: "/certificate-icon.png",
			value: "Certificate",
		},
	];

	const ref = useRef(null);

	const isInView = useInView(ref);

	return (
		<div ref={ref} className="bg-white py-16">
			<div className="container text-center">
				<h3 className="text-green-400 mb-5 text-2xl lg:text-3xl">
					Our Core Values
				</h3>
				<p className="text-xs md:text-sm lg:w-5/6">
					At the core of Tekskillup are our fundamental values, which
					serve as guiding principles influencing every facet of our
					platform and community. These values aren&apos;t merely
					words but the bedrock of our actions and decisions.
				</p>
				<motion.div
					initial={{ opacity: 0, y: 100 }}
					animate={isInView ? { opacity: 1, y: 0 } : {}}
					transition={{
						duration: 2.2,
						delay: 0.5,
						type: "tween",
					}}
					className="mt-8 grid grid-cols-2 gap-2 md:gap-4 md:grid-cols-3"
				>
					{values.map((value, index) => (
						<Card
							key={index}
							className="flex flex-col items-center text-center justify-center gap-4 md:gap-8 bg-green-100 rounded-xl py-4"
						>
							<motion.div
								initial={{ opacity: 0, x: 0 }}
								animate={
									isInView
										? {
												opacity: 1,
												x: [
													-1, 0, 1, -1, 0, 1, -1, 0,
													1,
												],
										  }
										: {}
								}
								transition={{
									delay: 0.2,
									duration: 0.5,
									type: "spring",
									stiffness: 150,
								}}
							>
								<Image
									src={value.icon}
									alt={value.value}
									height={1000}
									width={1000}
									className="w-16 md:w-24"
								/>
							</motion.div>
							<h5 className="text-sm md:text-base lg:text-lg font-semibold">
								{value.value}
							</h5>
						</Card>
					))}
				</motion.div>
			</div>
		</div>
	);
};

export default CoreValues;
