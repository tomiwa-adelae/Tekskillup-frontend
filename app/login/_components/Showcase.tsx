import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import LoginForm from "./LoginForm";

const Showcase = () => {
	return (
		<div
			className="py-16 bg-no-repeat bg-scroll bg-center bg-cover"
			style={{ backgroundImage: `url(/auth-showcase-img.jpg)` }}
		>
			<div className="container flex flex-col md:flex-row gap-4 lg:gap-8 items-center justify-between">
				<div className="hidden md:block flex-1 text-white">
					<h1 className="text-7xl">Hello, friend</h1>
					<p className="text-sm mt-4 mb-6 text-slate-200">
						Are you new to Tekskillup? Create an account now
					</p>
					<Button
						className="bg-green-400 py-8 px-8  hover:bg-green-500 transition-all duration-100 uppercase"
						asChild
					>
						<Link href="/register">Create an account</Link>
					</Button>
				</div>
				<div className="flex-1 w-full lg:max-w-lg">
					<LoginForm />
				</div>
			</div>
		</div>
	);
};

export default Showcase;
