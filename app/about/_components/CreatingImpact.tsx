"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface ImpactsProps {
	icon: string;
	title: string;
	number: number | string;
}
[];

const CreatingImpact = () => {
	const impacts: ImpactsProps[] = [
		{
			icon: "/laptop-icon.png",
			title: "Courses",
			number: "7",
		},
		{
			icon: "/graduate-icon.png",
			title: "Learners",
			number: "50+",
		},
		{
			icon: "/time-icon.png",
			title: "Hours of Content",
			number: "250+",
		},
	];

	return (
		<motion.div
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{
				delay: 0.5,
				duration: 0.75,
			}}
			className="bg-gradient-to-r from-green-100 via-gray-100 to-green-100 py-16"
		>
			<div className="container">
				<div className="text-center">
					<h3 className="text-green-400 mb-5 text-2xl lg:text-3xl">
						Making a global impact
					</h3>
					<p className="text-xs md:text-sm lg:w-5/6">
						With our extensive global catalog covering the latest
						skills and topics, individuals and organizations
						worldwide can adapt to change and flourish.
					</p>
					<div className="mt-12 grid grid-cols-3 gap-4 lg:gap-8">
						{impacts.map((impact, index: number) => (
							<motion.div
								initial={{ scale: 0 }}
								whileInView={{
									scale: [0, 1, 1.1, 1, 1.1, 1],
								}}
								transition={{
									delay: 0.2,
									duration: 0.5,
									type: "spring",
									stiffness: 150,
								}}
								key={index}
								className="flex flex-col items-center justify-center gap-4 text-center"
							>
								<Image
									src={impact.icon}
									alt={impact.title}
									height={1000}
									width={1000}
									className="w-16 md:w-24"
								/>
								<h4 className="text-green-400 text-2xl md:text-4xl lg:text-5xl font-semibold">
									{impact.number}
								</h4>
								<p className="text-xs md:text-sm">
									{impact.title}
								</p>
							</motion.div>
						))}
					</div>
				</div>
			</div>
		</motion.div>
	);
};

export default CreatingImpact;
