import React from "react";
import FormBox from "./_components/FormBox";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const page = () => {
	return (
		<div className="py-16 w-full dark:bg-black bg-white  dark:bg-grid-small-white/[0.2] bg-grid-small-black/[0.2] relative">
			<div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_80%,black)]"></div>
			<div className="container flex items-center justify-center">
				<FormBox />
			</div>
		</div>
	);
};

export default page;
