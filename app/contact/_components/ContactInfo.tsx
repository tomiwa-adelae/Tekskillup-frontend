import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import React from "react";

const ContactInfo = () => {
	return (
		<Card className="bg-transparent outline outline-green-400 rounded-xl p-8">
			<h3 className="text-center uppercase text-xl lg:text-3xl text-green-400 mb-8">
				Get in touch
			</h3>
			<div className="space-y-6">
				<div>
					<h5 className="uppercase text-base">Our office location</h5>
					<p className="text-xs md:text-sm mt-2">
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Odio, atque!
					</p>
				</div>
				<Separator className="bg-gray-300" />
				<div>
					<h5 className="uppercase text-base">Phone</h5>
					<p className="text-xs md:text-sm mt-2">
						L+234 098765432, +234 09876543
					</p>
				</div>
				<Separator className="bg-gray-300" />

				<div>
					<h5 className="uppercase text-base">Email address</h5>
					<p className="text-xs md:text-sm mt-2">
						tkeskillup@gmail.com!
					</p>
				</div>
			</div>
		</Card>
	);
};

export default ContactInfo;
