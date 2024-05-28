import { Card } from "@/components/ui/card";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

interface WhysProps {
	img: string;
	title: string;
	details: string;
}

const WhyTekskillup = () => {
	const whys: WhysProps[] = [
		{
			img: "/pace-icon.png",
			title: "Go at your pace",
			details: "Benefit from lifetime access to courses on Tekkillup.		",
		},
		{
			img: "/laptop-icon.png",
			title: "Learn from industry experts",
			details: "Learn from top industry experts and specialists.",
		},
		{
			img: "/certificate-icon.png",
			title: "Certificate of Completion",
			details:
				"Receive a certificate of completion when you finish our courses.",
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
			className="container bg-white py-16"
		>
			<div className="text-center">
				<h5 className="uppercase text-xs lg:text-sm">
					Why choose Tekskillup?
				</h5>
				<h3 className="text-green-400 my-5 text-2xl lg:text-3xl">
					We prioritize our customers.
				</h3>
				<p className="text-xs md:text-sm mb-8 lg:w-5/6 mx-auto">
					We deliver seamless service to our students and online
					learners worldwide.
				</p>

				<div className="flex flex-col items-center justify-between gap-4 lg:flex-row">
					{whys.map(
						(
							why: {
								img: string;
								title: string;
								details: string;
							},
							index: number
						) => (
							<Card
								key={index}
								className="flex flex-col items-center justify-center py-10 px-6 rounded-xl w-full min-h-80"
							>
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
								>
									<Image
										src={why.img}
										alt={why.title}
										height={1000}
										width={1000}
										className="w-24 md:w-32"
									/>
								</motion.div>
								<div>
									<h4 className="text-green-400 mt-3 text-lg font-medium">
										{why.title}
									</h4>
									<p className="text-xs mt-4">
										{why.details}
									</p>
								</div>
							</Card>
						)
					)}
				</div>
			</div>
		</motion.div>
	);
};

export default WhyTekskillup;
