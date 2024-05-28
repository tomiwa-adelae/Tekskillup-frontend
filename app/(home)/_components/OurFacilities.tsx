import React, { useRef } from "react";
import { FaciltiesImages } from "./FacilitiesImages";
import { motion, useInView } from "framer-motion";

const OurFacilities = () => {
	const ref = useRef(null);

	const isInView = useInView(ref);

	return (
		<div ref={ref} className="bg-white">
			<div className="container pt-16">
				<div className="text-center flex items-center justify-center flex-col lg:flex-row lg:justify-between lg:text-left lg:gap-6">
					<motion.div
						initial={{ x: "-100vw" }}
						animate={isInView ? { x: 0 } : {}}
						transition={{
							duration: 0.75,
							delay: 0.5,
							type: "spring",
							stiffness: 120,
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
						initial={{ opacity: 0, y: 100 }}
						animate={isInView ? { opacity: 1, y: 0 } : {}}
						transition={{
							duration: 0.75,
							delay: 0.5,
							type: "spring",
							stiffness: 120,
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
