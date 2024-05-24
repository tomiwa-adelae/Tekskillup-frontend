import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import React from "react";

const CoreValues = () => {
	const values = [
		{
			icon: "/flexibility-icon.png",
			value: "Flexibility",
		},
		{
			icon: "/affordability-icon.png",
			value: "Affordability",
		},
		{
			icon: "/accessibility-icon.png",
			value: "Accessibility",
		},
		{
			icon: "/community-icon.png",
			value: "Community",
		},
		{
			icon: "/quality-icon.png",
			value: "Quality",
		},
		{
			icon: "/certificate-icon.png",
			value: "Certificate",
		},
	];

	return (
		<div className="bg-white py-16">
			<div className="container text-center">
				<h3 className="text-green-400 mb-5 text-2xl lg:text-3xl">
					Our Core Values
				</h3>
				<p className="text-xs md:text-sm lg:w-5/6">
					At the core of Tekskillup are our fundamental values, which
					serve as guiding principles influencing every facet of our
					platform and community. These values aren&apos;t merely
					words but the bedrock of our actions and decisions.
				</p>
				<div className="mt-8 grid grid-cols-2 gap-2 md:gap-4 md:grid-cols-3">
					{values.map((value, index) => (
						<Card
							key={index}
							className="flex flex-col items-center text-center justify-center gap-4 md:gap-8 bg-green-100 rounded-xl py-4"
						>
							<Image
								src={value.icon}
								alt={value.value}
								height={1000}
								width={1000}
								className="w-16 md:w-24"
							/>
							<h5 className="text-sm md:text-base lg:text-lg font-semibold">
								{value.value}
							</h5>
						</Card>
					))}
				</div>
			</div>
		</div>
	);
};

export default CoreValues;
