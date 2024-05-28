import React from "react";
import { FaciltiesImages } from "./FacilitiesImages";
import { motion } from "framer-motion";

const OurFacilities = () => {
	return (
		<div className="bg-white">
			<div className="container pt-16">
				<div className="text-center flex items-center justify-center flex-col lg:flex-row lg:justify-between lg:text-left lg:gap-6">
					<motion.div
						initial="hidden"
						whileInView="visible"
						transition={{
							duration: 0.75,
							delay: 0.5,
							type: "spring",
							stiffness: 120,
						}}
						variants={{
							visible: { x: 0 },
							hidden: { x: -100 },
						}}
						className="flex-1"
					>
						<h5 className="uppercase text-xs lg:text-sm">
							What to expect
						</h5>
						<h3 className="text-green-400 my-5 text-2xl lg:text-3xl">
							Our facilities
						</h3>
					</motion.div>
					<motion.div
						initial="hidden"
						whileInView="visible"
						transition={{
							duration: 0.75,
							delay: 0.5,
							type: "spring",
							stiffness: 120,
						}}
						variants={{
							visible: { y: 0 },
							hidden: { y: 100 },
						}}
						className="flex-1"
					>
						<p className="text-xs md:text-sm">
							We&apos;ve established comfortable and conducive
							learning facilities equipped with ample resources
							for your access. Additionally, we&apos;ve invested
							in unlimited internet to ensure our students face no
							hindrances in their learning journey.
						</p>
					</motion.div>
				</div>
				<FaciltiesImages />
			</div>
		</div>
	);
};

export default OurFacilities;
