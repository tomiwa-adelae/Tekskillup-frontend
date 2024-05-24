import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import Courses from "./_components/Courses";
import { FolderPlus } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "All courses | Admin | Tekskillup",
	description:
		"All courses - Admin access - Online Learning Made EasySign up to Enrol and begin taking Hot & In-demand Digital CoursesEnrol Now Go to Classroom All Courses Why Choose us? We provide seamless services to our students and online learners all over the globe. Go at your own pace Enjoy lifetime access to courses on Tekskillup Learn from industry experts Learn […]",
};

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
				<h1 className="my-4 text-center text-3xl md:text-4xl lg:text-6xl text-green-400">
					All courses
				</h1>
				<Button
					className="uppercase w-full bg-green-400 my-6 transition-all duration-100 hover:bg-green-500"
					asChild
				>
					<Link href="/admincreatecourse">
						<FolderPlus className="mr-2 h-4 w-4" />
						Create Course
					</Link>
				</Button>

				<Courses />
			</div>
		</div>
	);
};

export default page;
