import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { Card } from "./ui/card";
import { PhoneCall } from "lucide-react";

const NeedHelp = ({
	helpTitle,
	helpDescription,
	helpButtonName,
	helpButtonLink,
}: {
	helpTitle: string;
	helpDescription: string;
	helpButtonName: string;
	helpButtonLink: string;
}) => {
	return (
		<div className="bg-gradient-to-r from-green-100 via-gray-100 to-green-100 py-16">
			<div className="container">
				<Card className="bg-green-400 text-white bg-no-repeat bg-right bg-auto md:py-8 p-6 md:px-8 lg:px-10 rounded-xl bg-scroll">
					<h3 className="mb-5 text-lg lg:text-2xl">
						{helpTitle}{" "}
						<PhoneCall className="inline text-green-100" />
					</h3>
					<p className="text-xs lg:text-sm text-gray-100 mb-8">
						{helpDescription}
					</p>
					<div>
						<Button
							className="bg-transparent outline outline-1 outline-white py-6 px-6 lg:py-8 lg:px-8 uppercase hover:text-green-400 hover:bg-white"
							asChild
						>
							<Link href={helpButtonLink}>{helpButtonName}</Link>
						</Button>
					</div>
				</Card>
			</div>
		</div>
	);
};

export default NeedHelp;
