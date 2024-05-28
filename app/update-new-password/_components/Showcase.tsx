"use client";

import { motion } from "framer-motion";
import { useSearchParams } from "next/navigation";

import UpdatePasswordForm from "./UpdatePasswordForm";

const Showcase = () => {
	const searchParams = useSearchParams();

	const id = searchParams.get("id");
	const code = searchParams.get("code");
	const email = searchParams.get("email");

	return (
		<div
			className="py-16 bg-no-repeat bg-scroll bg-center bg-cover"
			style={{ backgroundImage: `url(/auth-showcase-img.jpg)` }}
		>
			<div className="container flex flex-col md:flex-row gap-4 lg:gap-8 items-center justify-between">
				<div className="hidden md:block flex-1 text-white">
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
						className="text-6xl leading-tight"
					>
						Enter new password
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
						Your email address is {email}
					</motion.p>
				</div>
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
					className="flex-1 w-full lg:max-w-lg"
				>
					<UpdatePasswordForm id={id!} code={code!} email={email!} />
				</motion.div>
			</div>
		</div>
	);
};

export default Showcase;
