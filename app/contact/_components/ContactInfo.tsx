"use client";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { motion } from "framer-motion";

const ContactInfo = () => {
	return (
		<motion.div
			initial="hidden"
			whileInView="visible"
			transition={{
				duration: 1,
				delay: 0.2,
				type: "tween",
			}}
			variants={{
				visible: { y: 0, opacity: 1 },
				hidden: { y: 100, opacity: 0 },
			}}
		>
			<Card className="bg-transparent outline outline-green-400 rounded-xl p-8">
				<h3 className="text-center uppercase text-xl lg:text-3xl text-green-400 mb-8">
					Get in touch
				</h3>
				<div className="space-y-6">
					<div>
						<h5 className="uppercase text-base">
							Our office location
						</h5>
						<p className="text-xs md:text-sm mt-2">
							The Petrus Place, Opposite Ntachi Osa, New Haven,
							Enugu State.
						</p>
					</div>
					<Separator className="bg-gray-300" />
					<div>
						<h5 className="uppercase text-base">Phone</h5>
						<p className="text-xs md:text-sm mt-2">
							+234 703 9967 834
						</p>
					</div>
					<Separator className="bg-gray-300" />

					<div>
						<h5 className="uppercase text-base">Email address</h5>
						<p className="text-xs md:text-sm mt-2">
							admin@tekskillup.com
						</p>
					</div>
				</div>
			</Card>
		</motion.div>
	);
};

export default ContactInfo;
