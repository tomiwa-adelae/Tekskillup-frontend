import React from "react";
import { Showcase } from "./_components/Showcase";
import CreatingImpact from "./_components/CreatingImpact";
import CoreValues from "./_components/CoreValues";
import OurTeams from "./_components/OurTeams";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "About us | Tekskillup",
	description:
		"About us - Know more about us - Online Learning Made EasySign up to Enrol and begin taking Hot & In-demand Digital CoursesEnrol Now Go to Classroom All Courses Why Choose us? We provide seamless services to our students and online learners all over the globe. Go at your own pace Enjoy lifetime access to courses on Tekskillup Learn from industry experts Learn […]",
};

const page = () => {
	return (
		<div>
			<Showcase />
			<CreatingImpact />
			<CoreValues />
			<OurTeams />
		</div>
	);
};

export default page;
