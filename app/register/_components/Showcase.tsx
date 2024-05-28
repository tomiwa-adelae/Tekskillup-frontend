"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import RegisterForm from "./RegisterForm";

const Showcase = () => {
	return (
		<div
			className="py-16 bg-no-repeat bg-scroll bg-center bg-cover"
			style={{ backgroundImage: `url(/auth-showcase-img.jpg)` }}
		>
			<div className="container flex flex-col md:flex-row gap-4 lg:gap-8 items-start justify-between">
				<div className="hidden lg:block flex-none text-white mt-10">
					<motion.h1
						initial="hidden"
						whileInView="visible"
						transition={{
							duration: 1.2,
							delay: 0.4,
							type: "spring",
							stiffness: 120,
						}}
						variants={{
							visible: { y: 0 },
							hidden: { y: 100 },
						}}
						className="text-7xl"
					>
						Welcome back
					</motion.h1>
					<motion.p
						initial="hidden"
						whileInView="visible"
						transition={{
							duration: 1.2,
							delay: 0.4,
							type: "spring",
							stiffness: 120,
						}}
						variants={{
							visible: { y: 0 },
							hidden: { y: 200 },
						}}
						className="text-sm mt-4 mb-6 text-slate-200"
					>
						Already have an account? Sign in now
					</motion.p>
					<motion.div
						initial="hidden"
						whileInView="visible"
						transition={{
							duration: 1.25,
							delay: 0.75,
							type: "tween",
						}}
						variants={{
							visible: { scale: [0, 1, 1.1, 1] },
							hidden: { scale: 0 },
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
				<div className="flex-auto w-full lg:max-w-screen-sm">
					<RegisterForm />
				</div>
			</div>
		</div>
	);
};

export default Showcase;
