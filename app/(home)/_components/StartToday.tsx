import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const StartToday = () => {
	return (
		<div className="container flex flex-col lg:flex-row items-start justify-center gap-8 pb-16">
			<div className="flex-1">
				<Image
					src={"/speaker-two.jpg"}
					alt="Speakers"
					width={1000}
					height={1000}
					className="aspect-video rounded-xl object-cover"
				/>
			</div>
			<div className="flex-1">
				<h5 className="uppercase text-xs lg:text-sm">
					Start your course today
				</h5>
				<h3 className="text-green-400 my-5 text-2xl md:text-3xl">
					Gain a tech skill to surpass your current earning potential.
				</h3>
				<p className="text-xs md:text-sm">
					At Tekskillup, we offer high-quality and cost-effective
					technology training tailored to meet the needs of our
					students. Moreover, we ensure that all our students acquire
					the essential tech skills required for relevant job
					opportunities upon completing the program.
				</p>
				<Button
					className="bg-green-400 transition-all duration-100 uppercase py-6 px-8 lg:px-12 lg:py-8 mt-8 hover:bg-green-500"
					asChild
				>
					<Link href="/our-courses">Get started</Link>
				</Button>
			</div>
		</div>
	);
};

export default StartToday;
