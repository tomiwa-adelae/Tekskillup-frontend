import Image from "next/image";
import React from "react";

export function Showcase() {
	return (
		<div className="pt-12 pb-16 w-full dark:bg-black bg-green-400  dark:bg-grid-small-white/[0.2] bg-grid-small-black/[0.2] relative flex items-center justify-center">
			<div className="container">
				<div className="flex flex-col-reverse items-center justify-between gap-8 lg:flex-row">
					<div className="flex-1 text-center lg:text-left text-white">
						<h1 className="text-3xl leading-relaxed md:text-4xl md:leading-snug lg:text-6xl lg:leading-relaxed">
							Frequently asked questions
						</h1>
						<p className="text-xs md:text-sm text-gray-100 mt-4">
							Here are quick answers to some of your frequently
							asked questions.
						</p>
					</div>
					<div className="flex-1">
						<Image
							src={"/faq-showcase-img.png"}
							alt={"About page"}
							height={1000}
							width={1000}
							className="w-auto"
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
