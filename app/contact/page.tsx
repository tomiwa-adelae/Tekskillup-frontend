import React, { Suspense } from "react";
import { Showcase } from "./_components/Showcase";
import ContactForm from "./_components/ContactForm";
import ContactInfo from "./_components/ContactInfo";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Contact us | Tekskillup",
	description:
		"Contact us - Reach out to us - Online Learning Made EasySign up to Enrol and begin taking Hot & In-demand Digital CoursesEnrol Now Go to Classroom All Courses Why Choose us? We provide seamless services to our students and online learners all over the globe. Go at your own pace Enjoy lifetime access to courses on Tekskillup Learn from industry experts Learn […]",
};

const page = () => {
	return (
		<div>
			<Suspense fallback={null}>
				<Showcase />
				<div className="bg-gradient-to-r from-green-100 via-gray-100 to-green-100 py-16">
					<div className="container flex flex-col gap-6 md:flex-row items-center justify-between md:gap-8">
						<div className="flex-1 w-full">
							<ContactForm />
						</div>
						<div className="flex-1 w-full">
							<ContactInfo />
						</div>
					</div>
				</div>
			</Suspense>
		</div>
	);
};

export default page;
