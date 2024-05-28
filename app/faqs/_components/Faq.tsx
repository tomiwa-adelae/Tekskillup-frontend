"use client";
import { motion } from "framer-motion";

import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";

const Faq = ({ question, answer }: { question: string; answer: string }) => {
	return (
		<motion.div
			initial="hidden"
			whileInView="visible"
			transition={{
				duration: 1,
				delay: 0.2,
				type: "spring",
				stiffness: 120,
			}}
			variants={{
				visible: { y: 0 },
				hidden: { y: 100 },
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
