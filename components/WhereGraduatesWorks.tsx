import { motion, useInView } from "framer-motion";
import CompaniesCarousel from "./CompaniesCarousel";
import { useRef } from "react";

const WhereGraduatesWorks = () => {
	const ref = useRef(null);

	const isInView = useInView(ref);

	return (
		<div className="bg-white">
			<div ref={ref} className="container pt-16 ">
				<div className="text-center flex items-center justify-center flex-col lg:flex-row lg:justify-between lg:text-left lg:gap-6">
					<motion.div
						initial={{ x: "-100vw" }}
						animate={isInView ? { x: 0 } : {}}
						transition={{
							duration: 1.5,
							delay: 0.2,
							type: "tween",
						}}
						className="flex-1"
					>
						<h5 className="uppercase text-xs lg:text-sm">
							Life after training
						</h5>
						<h3 className="text-green-400 my-5 text-2xl lg:text-3xl">
							Where our graduates work
						</h3>
					</motion.div>
					<div className="flex-1">
						<motion.p
							initial={{ x: "100vw" }}
							animate={isInView ? { x: 0 } : {}}
							transition={{
								duration: 1.5,
								delay: 0.3,
								type: "tween",
							}}
							className="text-xs md:text-sm"
						>
							Our skilled graduates thrive in top companies
							worldwide, bringing valuable contributions to their
							personal development and the organizations they
							join. They excel in diverse industries, including
							Information Technology, Telecommunications, and
							beyond.
						</motion.p>
					</div>
				</div>
				<CompaniesCarousel />
			</div>
		</div>
	);
};

export default WhereGraduatesWorks;
