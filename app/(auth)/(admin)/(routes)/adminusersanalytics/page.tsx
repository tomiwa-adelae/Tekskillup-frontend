import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import Wrapper from "./_components/Wrapper";

const page = () => {
	return (
		<div className="py-16 w-full dark:bg-black bg-white  dark:bg-grid-small-white/[0.2] bg-grid-small-black/[0.2] relative">
			<div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_80%,black)]"></div>
			<div className="container">
				<Button
					className="transition ease-in-out uppercase"
					asChild
					variant="ghost"
				>
					<Link href="/admindashboard">Back</Link>
				</Button>
				<h1 className="my-4 mb-6 text-center text-3xl md:text-4xl lg:text-6xl text-green-400">
					Users analytics
				</h1>
				<Wrapper />
			</div>
		</div>
	);
};

export default page;
