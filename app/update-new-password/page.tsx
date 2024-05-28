import { Suspense } from "react";
import React from "react";
import Showcase from "./_components/Showcase";
import NeedHelp from "@/components/NeedHelp";
import { Metadata } from "next";

function Fallback() {
	return <>placeholder</>;
}

export const metadata: Metadata = {
	title: "Update new password | Tekskillup",
	description:
		"Update new password - Reset password - Online Learning Made EasySign up to Enrol and begin taking Hot & In-demand Digital CoursesEnrol Now Go to Classroom All Courses Why Choose us? We provide seamless services to our students and online learners all over the globe. Go at your own pace Enjoy lifetime access to courses on Tekskillup Learn from industry experts Learn […]",
};

const page = () => {
	return (
		<div>
			<Suspense fallback={<Fallback />}>
				<Showcase />
			</Suspense>
			<NeedHelp
				helpTitle="Need help choosing a course? Talk to an expert"
				helpDescription="Are you indecisive about what course to choose? Would you like to talk to a Tech expert over any tech related issue? We have professionals in place who are ready and willing to be of help."
				helpButtonName="Get in touch"
				helpButtonLink="/contact"
			/>
		</div>
	);
};

export default page;
