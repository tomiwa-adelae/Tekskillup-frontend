import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Folder, Info, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface UserProps {
	id: string;
	firstName: string;
	lastName: string;
	image: string;
	email: string;
	phoneNumber: string;
}

const User = ({
	id,
	firstName,
	lastName,
	email,
	image,
	phoneNumber,
}: UserProps) => {
	return (
		<Card className="transition-all flex flex-col items-center justify-center gap-6 bg-gray-50 rounded-xl py-6 px-8 hover:bg-gray-100">
			<div className="flex items-center gap-4 justify-start w-full md:text-center md:flex-col">
				<Image
					src={image}
					alt="Test"
					height={1000}
					width={1000}
					className="w-24 h-24 md:w-32 md:h-32 object-cover rounded-full md:mx-auto"
				/>
				<div className="space-y-2">
					<h4 className="text-lg md:text 2xl text-green-400">
						{firstName} {lastName}
					</h4>
					<p className="text-xs md:text-sm">{email}</p>
					<p className="text-xs md:text-sm">{phoneNumber}</p>
				</div>
			</div>
			<div className="w-full flex items-center justify-between gap-4">
				<Button
					className="transition ease-in-out uppercase bg-green-400 hover:bg-green-500 w-full"
					asChild
				>
					<a
						target="_blank"
						rel="noopener noreferrer"
						href={`mailto:${email}`}
					>
						<Mail className="mr-2 h-4 w-4" />
						Email
					</a>
				</Button>
				<Button
					className="transition ease-in-out uppercase outline outline-green-200 bg-transparent text-green-400 hover:bg-green-200 hover:text-white w-full"
					asChild
				>
					<Link href={`/adminusers/${id}`}>
						<Folder className="mr-2 h-4 w-4" />
						Visit profile
					</Link>
				</Button>
			</div>
		</Card>
	);
};

export default User;
