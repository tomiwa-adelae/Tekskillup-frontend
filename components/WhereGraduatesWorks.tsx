import { motion } from "framer-motion";
import CompaniesCarousel from "./CompaniesCarousel";

const WhereGraduatesWorks = () => {
	return (
		<div className="bg-white">
			<div className="container pt-16 ">
				<div className="text-center flex items-center justify-center flex-col lg:flex-row lg:justify-between lg:text-left lg:gap-6">
					<motion.div
						initial="hidden"
						whileInView="visible"
						transition={{
							duration: 2,
							delay: 0.1,
							type: "spring",
							stiffness: 150,
						}}
						variants={{
							visible: { x: 0 },
							hidden: { x: -200 },
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
							initial="hidden"
							whileInView="visible"
							transition={{
								duration: 3,
								delay: 0.1,
								type: "spring",
								stiffness: 120,
							}}
							variants={{
								visible: { x: 0 },
								hidden: { x: 200 },
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
