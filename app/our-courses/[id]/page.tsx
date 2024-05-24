import React from "react";

import CourseContainer from "./_components/CourseContainer";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Course | Tekskillup",
	description:
		"Course - Our courses - Online Learning Made EasySign up to Enrol and begin taking Hot & In-demand Digital CoursesEnrol Now Go to Classroom All Courses Why Choose us? We provide seamless services to our students and online learners all over the globe. Go at your own pace Enjoy lifetime access to courses on Tekskillup Learn from industry experts Learn […]",
};

interface CourseProps {
	_id: string;
	user: string;
	title: string;
	isPublished: boolean;
	lessons: {}[];
	description: string;
	image: string;
	onlinePrice: number;
	weekendPrice: number;
	weekdayPrice: number;
	weekendStartDate: string;
	weekdayStartDate: string;
}

const page = ({ params }: { params: { id: string } }) => {
	return (
		<div>
			<CourseContainer id={params.id} />
		</div>
	);
};

export default page;
