import React from "react";
import { Showcase } from "./_components/Showcase";
import { CoursesTabs } from "./_components/CoursesTabs";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Our courses | Tekskillup",
	description:
		"Our courses code - All Tekskillup courses - Online Learning Made EasySign up to Enrol and begin taking Hot & In-demand Digital CoursesEnrol Now Go to Classroom All Courses Why Choose us? We provide seamless services to our students and online learners all over the globe. Go at your own pace Enjoy lifetime access to courses on Tekskillup Learn from industry experts Learn […]",
};

const page = () => {
	return (
		<div className="py-16 w-full dark:bg-black bg-white  dark:bg-grid-small-white/[0.2] bg-grid-small-black/[0.2] relative">
			<div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_80%,black)]"></div>
			<div className="container">
				<div>
					<Showcase />
					<CoursesTabs />
				</div>
			</div>
		</div>
	);
};

export default page;
