import React from "react";

import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";

const Faq = ({ question, answer }: { question: string; answer: string }) => {
	return (
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
	);
};

export default Faq;
