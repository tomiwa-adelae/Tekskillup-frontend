"use client";
import Link from "next/link";
import React from "react";
import { Facebook, Instagram, Twitter } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

const Footer = () => {
	return (
		<footer className="bg-green-400 pt-16 pb-8 text-white uppercase text-xs">
			<motion.div
				initial="hidden"
				whileInView="visible"
				transition={{ duration: 2, delay: 0.2 }}
				variants={{
					visible: { opacity: 1 },
					hidden: { opacity: 0 },
				}}
				className="container"
			>
				<div className="flex flex-col items-start justify-start gap-8 text-center md:text-left md:flex-row md:justify-between">
					<div className="transition ease-in-out space-y-8 w-full">
						<Link
							className="hover:text-gray-200 block"
							href="/about"
						>
							About us
						</Link>
						<Link
							className="hover:text-gray-200 block"
							href="/our-courses"
						>
							Our courses
						</Link>
						<Link
							className="hover:text-gray-200 block"
							href="/faqs"
						>
							FAQs
						</Link>
						<Link
							className="hover:text-gray-200 block"
							href="/contact"
						>
							Contact us
						</Link>
					</div>
					<div className="flex items-center justify-center md:justify-start gap-8 w-full my-2">
						<Link
							className="hover:text-[#4267b2]"
							target="_blank"
							rel="noopener noreferrer"
							href="/"
						>
							<Facebook />
						</Link>
						<Link
							className="hover:text-[#bf2e8e]"
							target="_blank"
							rel="noopener noreferrer"
							href={"/"}
						>
							<Instagram />
						</Link>
						<Link
							className="hover:text-[#1e9beb]"
							target="_blank"
							rel="noopener noreferrer"
							href={"/"}
						>
							<Twitter />
						</Link>
					</div>
					<div className="space-y-8 w-full text-center md:text-left">
						<Image
							src={"/tekskillup-logo.png"}
							alt="Tekskillup logo"
							width={1000}
							height={1000}
							className="w-32 mx-auto md:mx-0"
						/>
						<p className="text-xs text-gray-200 font-light">
							&copy; 2024 Tekskillup. All Rights Reserved.
						</p>
					</div>
				</div>
			</motion.div>
		</footer>
	);
};

export default Footer;
