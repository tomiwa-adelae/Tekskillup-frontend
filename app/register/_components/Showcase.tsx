"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import RegisterForm from "./RegisterForm";
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
			<div className="container flex flex-col md:flex-row gap-4 lg:gap-8 items-start justify-between">
				<div className="hidden lg:block flex-none text-white mt-10">
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
						Welcome back
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
						Already have an account? Sign in now
					</motion.p>
					<motion.div
						initial={{ scale: 0 }}
						animate={isInView ? { scale: [0, 1, 1.1, 1] } : {}}
						transition={{
							duration: 1.25,
							delay: 0.75,
							type: "tween",
						}}
					>
						<Button
							className="bg-green-400 py-8 px-8  hover:bg-green-500 transition-all duration-100 uppercase"
							asChild
						>
							<Link href="/login">Login</Link>
						</Button>
					</motion.div>
				</div>
				<motion.div
					initial={{ scale: 0 }}
					animate={isInView ? { scale: [0, 1, 1.1, 1] } : {}}
					transition={{
						duration: 1.25,
						delay: 0.75,
						type: "tween",
					}}
					className="flex-auto w-full lg:max-w-screen-sm"
				>
					<RegisterForm />
				</motion.div>
			</div>
		</div>
	);
};

export default Showcase;
