import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { CircleCheckBig } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

const ProcessShowcase = () => {
	return (
		<div className="bg-gradient-to-r from-green-100 via-gray-100 to-green-100 py-16">
			<div className="container flex flex-col items-center justify-center lg:flex-row text-white gap-8">
				<Card className="p-8 flex-1 text-white bg-green-400 rounded-xl">
					<motion.div
						initial="hidden"
						whileInView="visible"
						transition={{
							duration: 0.75,
							delay: 0.2,
							type: "spring",
							stiffness: 120,
						}}
						variants={{
							visible: { y: 0, opacity: 1 },
							hidden: { y: 100, opacity: 0 },
						}}
					>
						<h4 className="text-base md:text-lg mb-3 uppercase lg:text-2xl">
							<CircleCheckBig className="inline text-green-100 mr-2" />
							Apply
						</h4>
						<p className="text-xs lg:text-sm">
							At Tekskillup, we provide a range of courses aimed
							at enhancing your skills and advancing your
							professional development. Simply apply to get
							started.
						</p>
					</motion.div>
					<Separator className="my-5" />
					<motion.div
						initial="hidden"
						whileInView="visible"
						transition={{
							duration: 1,
							delay: 0.5,
							type: "spring",
							stiffness: 120,
						}}
						variants={{
							visible: { y: 0, opacity: 1 },
							hidden: { y: 100, opacity: 0 },
						}}
					>
						<h4 className="text-base md:text-lg mb-3 uppercase lg:text-2xl">
							<CircleCheckBig className="inline text-green-100 mr-2" />
							Get admitted
						</h4>
						<p className="text-xs lg:text-sm">
							Upon confirming your payment for the program, we
							secure your spot, and you will undergo the
							onboarding process before the program commences.
						</p>
					</motion.div>
					<Separator className="my-5" />
					<motion.div
						initial="hidden"
						whileInView="visible"
						transition={{
							duration: 1.25,
							delay: 0.75,
							type: "spring",
							stiffness: 120,
						}}
						variants={{
							visible: { y: 0, opacity: 1 },
							hidden: { y: 100, opacity: 0 },
						}}
					>
						<h4 className="text-base md:text-lg mb-3 uppercase lg:text-2xl">
							<CircleCheckBig className="inline text-green-100 mr-2" />
							Start classes
						</h4>
						<p className="text-xs lg:text-sm">
							Ensure you attend the introductory classes as they
							will significantly impact your subsequent learning
							stages. You&apos;ll engage in projects, personal
							tasks, and group work, allowing our tutors to assess
							your skills, growth, and knowledge. We&apos;ve
							created a conducive learning environment and
							equipped it with modern facilities to facilitate
							your learning experience.
						</p>
					</motion.div>
				</Card>
				<motion.div
					initial="hidden"
					whileInView="visible"
					transition={{
						duration: 3,
						delay: 0.2,
						type: "tween",
					}}
					variants={{
						visible: { x: 0, opacity: 1 },
						hidden: { x: 300, opacity: 0 },
					}}
					className="flex-1"
				>
					<Image
						src={"/tablet-courses-img.png"}
						alt="Courses inside 2 tablets"
						height={1000}
						width={1000}
						className="object-cover"
					/>
				</motion.div>
			</div>
		</div>
	);
};

export default ProcessShowcase;
