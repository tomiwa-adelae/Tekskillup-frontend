"use client";
import { motion, useInView } from "framer-motion";

import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { useRef } from "react";

const Faq = ({ question, answer }: { question: string; answer: string }) => {
	const ref = useRef(null);

	const isInView = useInView(ref);
	return (
		<motion.div
		ref={ref}
		initial={{ y: 100, }}
		animate={isInView ? { y: 0, } : {}}
			transition={{
				duration: 1,
				delay: 0.2,
				type: "spring",
				stiffness: 120,
			}}
		>
			<Accordion
				className="bg-slate-50 transition ease-in-out px-4 rounded-xl  hover:bg-slate-100 mb-4 text-left"
				type="single"
				collapsible
			>
				<AccordionItem value="item-1">
					<AccordionTrigger className="text-sm text-left md:text-base hover:no-underline text-green-400">
						{question}
					</AccordionTrigger>
					<AccordionContent className="text-xs text-left md:text-sm">
						{answer}
					</AccordionContent>
				</AccordionItem>
			</Accordion>
		</motion.div>
	);
};

export default Faq;
