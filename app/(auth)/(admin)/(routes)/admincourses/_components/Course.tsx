import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Info } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";

interface CourseProps {
	id: string;
	title: string;
	image: string;
	onlinePrice: number;
	weekendPrice: number;
	weekdayPrice: number;
	isPublished: boolean;
}

const Course = ({
	id,
	title,
	onlinePrice,
	weekendPrice,
	weekdayPrice,
	image,
	isPublished,
}: CourseProps) => {
	return (
		<Card className="px-4 pb-4 space-y-8 transition-all ease-in-out relative">
			<Badge
				className={cn(
					"absolute top-3 right-3 bg-slate-500 text-white uppercase font-light",
					isPublished && "bg-sky-700 text-white"
				)}
				variant="outline"
			>
				{isPublished ? "Published" : "draft"}
			</Badge>
			<Image
				src={
					image ||
					"https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"
				}
				alt={title || "Picture"}
				height={1000}
				width={1000}
				className="w-full h-48 aspect-video object-cover rounded-lg mb-4"
			/>
			<h4 className="text-lg md:text-xl text-green-400">{title}</h4>
			<h5 className="text-xs md:text-sm">
				{onlinePrice ? (
					<>Online price: #{onlinePrice}</>
				) : (
					<p className="italic">No online price</p>
				)}
			</h5>
			<h5 className="text-xs md:text-sm">
				{weekdayPrice ? (
					<>Weekdays price: #{weekdayPrice}</>
				) : (
					<p className="italic">No weekdays price</p>
				)}
			</h5>
			<h5 className="text-xs md:text-sm">
				{weekendPrice ? (
					<>Weekend price: #{weekendPrice}</>
				) : (
					<p className="italic">No weekend price</p>
				)}
			</h5>
			<Button
				asChild
				className="uppercase bg-green-400 w-full transition-all duration-100 hover:bg-green-500"
			>
				<Link href={`admincourses/${id}`}>
					<Info className="mr-2 h-4 w-4" />
					View details
				</Link>
			</Button>
		</Card>
	);
};

export default Course;
