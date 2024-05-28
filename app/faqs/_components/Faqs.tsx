"use client";
import { motion, useInView } from "framer-motion";

import Faq from "./Faq";
import MoreQuestions from "./MoreQuestions";
import { useRef } from "react";

interface QuestionsProps {
	question: string;
	answer: string;
}
[];

const Faqs = () => {
	const questions: QuestionsProps[] = [
		{
			question: "What is Tekskillup?",
			answer: "Tekskillup is a gateway to mastering tech and digital skills for a dynamic and ever-evolving world. At Tekskillup, we are committed to empowering individuals with the knowledge and expertise needed to thrive in the digital age.",
		},
		{
			question: "How do I enroll in a course?",
			answer: "To enroll in a course, browse the course catalog, select the course you're interested in, and click the 'Enroll Now' or 'Apply Now' button. You will need to create an account or log in to complete the purchase.",
		},
		{
			question: "Do I get a certificate after completing a course?",
			answer: "Yes, upon successfully completing a course, you will receive a certificate of completion that you can share with employers or include in your professional portfolio.",
		},
		{
			question: "How long do I have access to a course?",
			answer: "Once you purchase a course, you have lifetime access to it. This means you can start and finish the course at your own pace, and revisit the material anytime in the future.",
		},
		{
			question: "How can I contact customer support?",
			answer: "You can contact Tekskillup's customer support through the Help Center on the website. There you can find contact page, submit a support request for assistance.",
		},
	];

	const ref = useRef(null);

	const isInView = useInView(ref);

	return (
		<motion.div
			ref={ref}
			initial={{ opacity: 0 }}
			animate={isInView ? { opacity: 1 } : {}}
			transition={{ duration: 0.5, delay: 0.5 }}
			className="bg-gradient-to-r from-green-100 via-gray-100 to-green-100 py-16"
		>
			<div className="container">
				<div className="px-0 md:px-10 mb-8">
					{questions.map((question, index) => (
						<Faq
							key={index}
							question={question.question}
							answer={question.answer}
						/>
					))}
				</div>
				<MoreQuestions />
			</div>
		</motion.div>
	);
};

export default Faqs;
