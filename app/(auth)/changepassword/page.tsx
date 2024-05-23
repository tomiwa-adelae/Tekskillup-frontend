import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import PasswordsForm from "./_components/PasswordsForm";

const page = () => {
	return (
		<div className="py-16 w-full dark:bg-black bg-white  dark:bg-grid-small-white/[0.2] bg-grid-small-black/[0.2] relative">
			<div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_80%,black)]"></div>
			<div className="container">
				<Button
					className="transition ease-in-out uppercase mb-4"
					asChild
					variant="ghost"
				>
					<Link href="/profile">Back</Link>
				</Button>
				<h1 className="mb-8 text-center text-3xl md:text-4xl lg:text-6xl text-green-400">
					Change your password
				</h1>
				<div>
					<PasswordsForm />
				</div>
			</div>
		</div>
	);
};

export default page;
