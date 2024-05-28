"use client";
import { motion, useInView } from "framer-motion";
import VerifyCodeForm from "./VerifyCodeForm";
import { useRef } from "react";

const Showcase = () => {
	const ref = useRef(null);

	const isInView = useInView(ref);

	return (
		<div
			ref={ref}
			className="py-16 bg-no-repeat bg-scroll bg-center bg-cover"
			style={{ backgroundImage: `url(/auth-showcase-img.jpg)` }}
		>
			<div className="bg-blend overlay"></div>
			<div className="container flex flex-col md:flex-row gap-4 lg:gap-8 items-center justify-between">
				<div className="hidden md:block flex-1 text-white">
					<motion.h1
						initial={{ y: 100 }}
						animate={isInView ? { y: 0 } : {}}
						transition={{
							duration: 1.2,
							delay: 0.4,
							type: "spring",
							stiffness: 120,
						}}
						className="text-7xl"
					>
						Verify code
					</motion.h1>
					<motion.p
						initial={{ y: 100 }}
						animate={isInView ? { y: 0 } : {}}
						transition={{
							duration: 1.2,
							delay: 0.4,
							type: "spring",
							stiffness: 120,
						}}
						className="text-sm mt-4 mb-6 text-slate-200"
					>
						Please enter the code sent to your email address inbox
					</motion.p>
				</div>
				<motion.div
					initial={{ scale: 0 }}
					animate={isInView ? { scale: [0, 1, 1.1, 1] } : {}}
					transition={{
						duration: 1.25,
						delay: 0.75,
						type: "tween",
					}}
					className="flex-1 w-full lg:max-w-lg"
				>
					<VerifyCodeForm />
				</motion.div>
			</div>
		</div>
	);
};

export default Showcase;
