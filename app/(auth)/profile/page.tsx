import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import Head from "./_components/Head";
import { Separator } from "@/components/ui/separator";
import RegisteredCourses from "./_components/RegisteredCourses";

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
					<Link href="/">Back</Link>
				</Button>
				<div>
					<Head />
					<Separator className="my-16" />
					<RegisteredCourses />
				</div>
			</div>
		</div>
	);
};

export default page;
