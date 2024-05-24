import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import Wrapper from "./_components/Wrapper";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Change image | Tekskillup",
	description:
		"Change image - Profile settings - Online Learning Made EasySign up to Enrol and begin taking Hot & In-demand Digital CoursesEnrol Now Go to Classroom All Courses Why Choose us? We provide seamless services to our students and online learners all over the globe. Go at your own pace Enjoy lifetime access to courses on Tekskillup Learn from industry experts Learn […]",
};

const page = () => {
	return (
		<div className="py-16 w-full dark:bg-black bg-white  dark:bg-grid-small-white/[0.2] bg-grid-small-black/[0.2] relative">
			<div className="container">
				<Button
					className="transition ease-in-out uppercase"
					asChild
					variant="ghost"
				>
					<Link href="/editprofile">Back</Link>
				</Button>
				<Wrapper />
			</div>
		</div>
	);
};

export default page;
