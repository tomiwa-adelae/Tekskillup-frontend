"use client";

import { motion, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CalendarClock, Hourglass } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FaNairaSign } from "react-icons/fa6";
import { Separator } from "@/components/ui/separator";
import Moment from "react-moment";
import { useRef } from "react";

interface CourseProps {
	_id: string;
	user: string;
	title: string;
	isPublished: boolean;
	lessons: {}[];
	description: string;
	image: string;
	onlinePrice: number;
	weekendPrice: number;
	weekdayPrice: number;
	weekendStartDate: string;
	weekdayStartDate: string;
}

const NewlyAddedCourse = ({ course }: { course: CourseProps }) => {
	const ref = useRef(null);

	const isInView = useInView(ref);

	if (!course) return;

	return (
		<div ref={ref} className="bg-white mb-16">
			<div className="container flex flex-col lg:flex-row-reverse gap-8">
				<motion.div
					initial={{ y: 100, opacity: 0 }}
					animate={isInView ? { y: 0, opacity: 1 } : {}}
					transition={{
						duration: 2.2,
						delay: 0.5,
						type: "tween",
					}}
					className="flex-1"
				>
					<Image
						src={course?.image}
						alt={course?.title}
						height={1000}
						width={1000}
						className="aspect-video rounded-xl object-cover"
					/>
				</motion.div>
				<div className="flex-1">
					<h5 className="uppercase text-xs lg:text-sm">
						Newly added course
					</h5>
					<h3 className="text-green-400 my-5 text-2xl lg:text-3xl">
						{course.title}
					</h3>
					<motion.p
						initial={{ opacity: 0 }}
						animate={isInView ? { opacity: 1 } : {}}
						transition={{ duration: 1.5, delay: 0.5 }}
						className="text-xs md:text-sm"
					>
						{course.description}
					</motion.p>
					<div className="font-bold space-y-4 text-xs lg:text-sm mt-6">
						<h6>
							<FaNairaSign className="inline text-green-400 mr-2 w-4 h-4" />
							Price: {course.weekendPrice}
						</h6>
						<Separator className="my-6" />
						<h6>
							<CalendarClock className="inline text-green-400 mr-2 w-5 h-5" />
							Weekend start date:{" "}
							<Moment format="DD-MMM-YYYY">
								{course.weekendStartDate}
							</Moment>
						</h6>
					</div>
					<Button
						className="bg-green-400 px-12 py-8 mt-8 uppercase hover:bg-green-500 transition-all duration-100"
						asChild
					>
						<Link href={`/our-courses/${course._id}`}>
							Enroll now
						</Link>
					</Button>
				</div>
			</div>
		</div>
	);
};

export default NewlyAddedCourse;
