import type { Metadata } from "next";

import { Suspense } from "react";

import React from "react";
import Showcase from "./_components/Showcase";
import NeedHelp from "@/components/NeedHelp";

function Fallback() {
	return <>placeholder</>;
}

export const metadata: Metadata = {
	title: "Verify code | Tekskillup",
	description:
		"Verify code - Reset password - Online Learning Made EasySign up to Enrol and begin taking Hot & In-demand Digital CoursesEnrol Now Go to Classroom All Courses Why Choose us? We provide seamless services to our students and online learners all over the globe. Go at your own pace Enjoy lifetime access to courses on Tekskillup Learn from industry experts Learn […]",
};

const page = () => {
	return (
		<div>
			<Suspense fallback={<Fallback />}>
				<Showcase />
			</Suspense>
			<NeedHelp
				helpTitle="Need help with your account? Talk to an expert"
				helpDescription="Lorem ipsum dolor sit amet consectetur, adipisicing
						elit. Quas iste voluptates modi eos, amet iusto ea ad
						doloribus, laboriosam quidem odio consequuntur aliquam
						voluptatum dignissimos odit. Ut excepturi nostrum,
						praesentium obcaecati, nihil a illum consequatur rem
						nulla hic culpa aspernatur."
				helpButtonName="Get in touch"
				helpButtonLink="/contact"
			/>
		</div>
	);
};

export default page;
