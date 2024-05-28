"use client";
import { CardStack } from "@/components/ui/card-stack";
import { cn } from "@/lib/utils";
import AboutFacility from "./AboutFacility";
import { motion } from "framer-motion";

export function FaciltiesImages() {
	return (
		<motion.div
			initial="hidden"
			animate="visible"
			transition={{ duration: 0.5, delay: 0.5 }}
			variants={{
				visible: { opacity: 1 },
				hidden: { opacity: 0 },
			}}
			className="h-[40rem] mt-8 relative flex items-center justify-center w-full"
		>
			<CardStack items={CARDS} />

			<AboutFacility />
		</motion.div>
	);
}

const CARDS = [
	{
		id: 0,
		name: "Manu Arora",
		image: "/home-showcase-img.png",
	},
	{
		id: 1,
		name: "Elon Musk",
		image: "/test-image.jpg",
	},
	{
		id: 2,
		name: "Tyler Durden",
		designation: "Manager Project Mayhem",
		image: "/home-showcase-img.png",
	},
];
